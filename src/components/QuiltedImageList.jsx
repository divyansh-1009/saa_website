import React, { useState, useEffect, useRef } from 'react';

export default function QuiltedImageList({ images, className = '' }) {
  const [imageAspectRatios, setImageAspectRatios] = useState({});
  const imageRefs = useRef({});

  // Load images and detect their aspect ratios
  useEffect(() => {
    const loadImageAspectRatios = async () => {
      const ratios = {};
      
      await Promise.all(
        images.map((imageSrc, index) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              const aspectRatio = img.width / img.height;
              ratios[index] = aspectRatio;
              resolve();
            };
            img.onerror = () => {
              ratios[index] = 1; // Default to square if image fails to load
              resolve();
            };
            img.src = imageSrc;
          });
        })
      );
      
      setImageAspectRatios(ratios);
    };

    loadImageAspectRatios();
  }, [images]);

  // Calculate container style based on aspect ratio
  const getContainerStyle = (index, aspectRatio) => {
    if (!aspectRatio) return {};
    
    // Base width for one column (will be calculated by grid)
    // We'll use aspect-ratio CSS property to maintain proportions
    const baseHeight = 200; // Base height in pixels
    const calculatedWidth = baseHeight * aspectRatio;
    
    return {
      aspectRatio: `${aspectRatio}`,
      minHeight: '150px',
    };
  };

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 ${className}`}>
      {images.map((image, index) => {
        const aspectRatio = imageAspectRatios[index];
        const isPortrait = aspectRatio && aspectRatio < 1;
        const isLandscape = aspectRatio && aspectRatio > 1;
        
        return (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            style={getContainerStyle(index, aspectRatio)}
          >
            <img
              ref={(el) => {
                if (el) imageRefs.current[index] = el;
              }}
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              style={{
                objectFit: 'cover',
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
          </div>
        );
      })}
    </div>
  );
}
