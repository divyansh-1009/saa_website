import { useEffect, useCallback, useRef } from 'react';
import { gsap } from 'gsap';
import './BounceCards.css';

export default function BounceCards({
  className = '',
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  transformStyles = [
    'rotate(10deg) translate(-170px)',
    'rotate(5deg) translate(-85px)',
    'rotate(-3deg)',
    'rotate(-10deg) translate(85px)',
    'rotate(2deg) translate(170px)'
  ],
  enableHover = true
}) {
  const hoverTimeoutRef = useRef(null);
  const isAnimatingRef = useRef(false);
  useEffect(() => {
    // Optimize initial animation with reduced stagger for better performance
    gsap.fromTo(
      '.card',
      { scale: 0, rotation: 0 },
      {
        scale: 1,
        stagger: animationStagger * 0.5, // Reduced stagger for faster loading
        ease: 'power2.out', // Simpler easing for better performance
        delay: animationDelay * 0.5 // Reduced delay
      }
    );
  }, [animationStagger, animationDelay]);

  const getNoRotationTransform = transformStr => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, 'rotate(0deg)');
    } else if (transformStr === 'none') {
      return 'rotate(0deg)';
    } else {
      return `${transformStr} rotate(0deg)`;
    }
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    } else {
      return baseTransform === 'none' ? `translate(${offsetX}px)` : `${baseTransform} translate(${offsetX}px)`;
    }
  };

  const pushSiblings = useCallback((hoveredIdx) => {
    if (!enableHover || isAnimatingRef.current) return;

    isAnimatingRef.current = true;

    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    // Debounce hover animations
    hoverTimeoutRef.current = setTimeout(() => {
      images.forEach((_, i) => {
        gsap.killTweensOf(`.card-${i}`);

        const baseTransform = transformStyles[i] || 'none';

        if (i === hoveredIdx) {
          const noRotationTransform = getNoRotationTransform(baseTransform);
          gsap.to(`.card-${i}`, {
            transform: noRotationTransform,
            duration: 0.3, // Reduced duration for snappier response
            ease: 'power2.out', // Simpler easing
            overwrite: 'auto',
            onComplete: () => { isAnimatingRef.current = false; }
          });
        } else {
          const offsetX = i < hoveredIdx ? -120 : 120; // Reduced offset for better performance
          const pushedTransform = getPushedTransform(baseTransform, offsetX);

          const distance = Math.abs(hoveredIdx - i);
          const delay = distance * 0.03; // Reduced delay

          gsap.to(`.card-${i}`, {
            transform: pushedTransform,
            duration: 0.3,
            ease: 'power2.out',
            delay,
            overwrite: 'auto'
          });
        }
      });
    }, 50); // 50ms debounce
  }, [enableHover, images, transformStyles]);

  const resetSiblings = useCallback(() => {
    if (!enableHover) return;

    // Clear timeout on mouse leave
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    images.forEach((_, i) => {
      gsap.killTweensOf(`.card-${i}`);
      const baseTransform = transformStyles[i] || 'none';
      gsap.to(`.card-${i}`, {
        transform: baseTransform,
        duration: 0.2, // Faster reset
        ease: 'power2.out',
        overwrite: 'auto',
        onComplete: () => { isAnimatingRef.current = false; }
      });
    });
  }, [enableHover, images, transformStyles]);

  return (
    <div
      className={`bounceCardsContainer ${className}`}
      style={{
        position: 'relative',
        width: containerWidth,
        height: containerHeight
      }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`card card-${idx}`}
          style={{
            transform: transformStyles[idx] ?? 'none'
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <img
            className="image"
            src={src}
            alt={`card-${idx}`}
            loading="lazy"
            decoding="async"
            fetchpriority={idx === 0 ? "high" : "low"}
            style={{
              willChange: 'transform',
              transform: 'translateZ(0)', // Force GPU acceleration
            }}
          />
        </div>
      ))}
    </div>
  );
}
