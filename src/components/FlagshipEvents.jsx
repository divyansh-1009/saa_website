import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useImageAspectRatio } from '../hooks/useImageAspectRatio';

import dashak_1 from '../assets/dashak_1.JPG';
import dashak_2 from '../assets/dashak_2.JPG';
import dashak_3 from '../assets/dashak_3.JPG';
import dashak_4 from '../assets/dashak_4.JPG';
import dashak_5 from '../assets/dashak_5.JPG';
import dashak_6 from '../assets/dashak_6.JPG';

import convocation_1 from '../assets/convocation_1.jpg';
import convocation_2 from '../assets/convocation_2.jpg';
import convocation_3 from '../assets/convocation_3.jpg';
import convocation_4 from '../assets/convocation_4.jpg';
import convocation_5 from '../assets/convocation_5.jpg';
import convocation_6 from '../assets/convocation_6.jpg';
import convocation_7 from '../assets/convocation_7.jpg';
import convocation_8 from '../assets/convocation_8.jpg';
import convocation_9 from '../assets/convocation_9.jpg';



import farewell_1 from '../assets/farewell_1.jpeg';
import farewell_2 from '../assets/farewell_2.jpeg';
import farewell_3 from '../assets/farewell_3.jpeg';
import farewell_4 from '../assets/farewell_4.jpeg';
import farewell_5 from '../assets/farewell_5.jpeg';
import farewell_6 from '../assets/farewell_6.jpeg';




const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImageAspectRatio = useImageAspectRatio(images[currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="relative w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 border border-red-200 dark:border-[#1e40af] transition-all duration-500"
      style={{
        aspectRatio: currentImageAspectRatio ? `${currentImageAspectRatio}` : '16/9',
        minHeight: '256px',
        maxHeight: '600px'
      }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-white dark:bg-gray-200 w-6'
                : 'bg-white/50 dark:bg-gray-400/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const EventModal = ({ event, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Image Carousel */}
                  <ImageCarousel images={event.images} />

                  {/* Event Details */}
                  <div className="mt-6 sm:mt-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      {event.title}
                    </h2>
                    
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        {event.fullDescription}
                      </p>
                      
                      {event.highlights && (
                        <div className="mt-6">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                            Highlights
                          </h3>
                          <ul className="space-y-2">
                            {event.highlights.map((highlight, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                                <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

const EventCard = ({
  event,
  index,
  setCardRef,
  style,
  onMouseMove,
  onMouseLeave,
  onClick,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: '-10% 0px',
  });

  return (
    <div onClick={onClick} className="block group cursor-pointer">
      <motion.div
        ref={ref}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 ${
          !event.imageFirst ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Image Container */}
        <div
          ref={setCardRef(index)}
          style={style}
          onMouseMove={(e) => onMouseMove(e, index)}
          onMouseLeave={() => onMouseLeave(index)}
          className="w-full lg:w-[45%] xl:w-[40%] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-red-500 dark:border-[#2563eb] group-hover:scale-105"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden relative w-full h-[200px] sm:h-[220px] lg:h-[200px] xl:h-[220px]">
            <img
              src={event.image}
              alt={event.title}
              className="object-contain bg-gray-50 dark:bg-gray-900 w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full lg:w-[50%] xl:w-[55%] text-center lg:text-left px-2 sm:px-4 py-2">
          <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold mb-3 lg:mb-4 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-[#60a5fa] transition-colors duration-300 hover-underline-animation">
            {event.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-base xl:text-lg leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
            {event.description}
          </p>
          
          <div className="mt-4 flex items-center justify-center lg:justify-start">
            <span className="text-red-600 dark:text-[#60a5fa] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0 hover-underline-animation">
              Learn more →
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function FlagshipEvents() {
  const cardRefs = useRef([]);
  const [styles, setStyles] = useState([{}, {}, {}]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const setCardRef = (index) => (el) => {
    cardRefs.current[index] = el;
  };

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / 20).toFixed(2);
    const rotateY = ((x - rect.width / 2) / -20).toFixed(2);

    const newStyles = [...styles];
    newStyles[index] = {
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`,
      transition: 'transform 0.15s ease',
    };
    setStyles(newStyles);
  };

  const handleMouseLeave = (index) => {
    const newStyles = [...styles];
    newStyles[index] = {
      transform: 'perspective(800px) rotateX(0) rotateY(0) scale(1)',
      transition: 'transform 0.4s ease',
    };
    setStyles(newStyles);
  };

  const events = [
    {
      title: 'Dashak',
      description:
        "Annual alumni gathering fostering interactions, celebrating IITJ's journey with community and enthusiasm.",
      image: dashak_2,
      images: [dashak_1, dashak_2, dashak_3,dashak_4,dashak_5,dashak_6],
      imageFirst: true,
      fullDescription:
        "Dashak is the prestigious 10-yearly alumni meetup of IIT Jodhpur — a grand celebration of connection, nostalgia, and pride. More than a reunion, Dashak honors the journeys of alumni who have carried the institute’s legacy across the globe. The event serves as a bridge between the past and the present, bringing together graduates, faculty, and current students to celebrate milestones and envision the future. Through keynote sessions, cultural evenings, campus walks, and networking opportunities, Dashak revives the cherished memories of campus life while strengthening the lifelong bond that defines the IIT Jodhpur community.",
      highlights: [
        'Alumni networking sessions across multiple batches',
        'Inspiring keynote speeches from successful alumni',
        'Campus tours highlighting new facilities and developments',
        'Cultural performances and entertainment',
        'Recognition of outstanding alumni achievements',
        'Interactive workshops and panel discussions'
      ]
    },
    {
      title: 'Convocation',
      description:
        'Celebrating academic milestones and officially welcoming graduates into the alumni family.',
      image: convocation_4,
      images: [convocation_1, convocation_2, convocation_3,convocation_4,convocation_5,convocation_6,convocation_7,convocation_8,convocation_9],
      imageFirst: false,
      fullDescription:
        "The Convocation ceremony is a momentous occasion marking the culmination of years of hard work and dedication. It's where students transition from being members of the institute to becoming part of the illustrious alumni network. The ceremony features the conferring of degrees, inspiring speeches from distinguished guests, and the symbolic passing of the torch to the next generation. It's not just an end, but the beginning of a lifelong association with IIT Jodhpur.",
      highlights: [
        'Formal degree conferral ceremony',
        'Addresses by eminent personalities and chief guests',
        'Recognition of academic excellence and achievements',
        'Traditional academic procession',
        'Official induction into the alumni association',
        'Memorable moments with faculty, friends, and family'
      ]
    },
    {
      title: 'Farewell',
      description:
        'Heartfelt send-off to graduates, cherishing memories and celebrating new beginnings.',
      image: farewell_1,
      images: [farewell_1, farewell_2, farewell_3,farewell_4,farewell_5,farewell_6],
      imageFirst: true,
      fullDescription:
        "The Farewell event is an emotional celebration organized by juniors to bid adieu to graduating seniors. It's a night filled with nostalgia, laughter, and tears as students reminisce about their time at IIT Jodhpur. The event includes cultural performances, heartfelt speeches, fun activities, and awards that capture the unique personalities and contributions of each graduate. It's a beautiful transition from student life to alumni status, marking the beginning of new adventures while celebrating the bonds formed during their time at the institute.",
      highlights: [
        'Emotional speeches and memories shared',
        'Cultural performances and entertainment',
        'Fun awards and recognition',
        'Photo sessions and memory book signing',
        'Dinner and celebration with peers and faculty',
        'Traditional passing of responsibilities to juniors'
      ]
    },
  ];

  return (
    <section className="light:bg-gradient-to-br rounded-lg from-gray-50/10 to-blue-50/20 dark:bg-black/20 px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-8 lg:mb-12 leading-tight text-gray-900 dark:text-white">
          Flagship Events of SAA
        </h2>
        <div className="flex flex-col gap-8 lg:gap-12 xl:gap-16">
          {events.map((event, index) => (
            <div key={index} className="w-full">
              <EventCard
                event={event}
                index={index}
                setCardRef={setCardRef}
                style={styles[index]}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => setSelectedEvent(event)}
              />
              
              {index < events.length - 1 && (
                <div className="mt-8 lg:mt-12 w-full max-w-xs mx-auto">
                  <div className="h-[3px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-900 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Event Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={selectedEvent !== null}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
}