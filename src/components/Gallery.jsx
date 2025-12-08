import React, { useState, useEffect, useRef } from 'react';
import QuiltedImageList from './QuiltedImageList';
import Masonry from './Masonry';

// ============================================
// IMPORT YOUR IMAGES HERE - ONE BY ONE
// ============================================
// Dashak Event Images
import dashak_1 from '../assets/dashak_1.JPG';
import dashak_2 from '../assets/dashak_2.JPG';
import dashak_3 from '../assets/dashak_3.JPG';
import dashak_4 from '../assets/dashak_4.JPG';
import dashak_5 from '../assets/dashak_5.JPG';
import dashak_6 from '../assets/dashak_6.JPG';

// Convocation Event Images
import convocation_1 from '../assets/convocation_1.jpg';
import convocation_2 from '../assets/convocation_2.jpg';
import convocation_3 from '../assets/convocation_3.jpg';
import convocation_4 from '../assets/convocation_4.jpg';
import convocation_5 from '../assets/convocation_5.jpg';
import convocation_6 from '../assets/convocation_6.jpg';
import convocation_7 from '../assets/convocation_7.jpg';
import convocation_8 from '../assets/convocation_8.jpg';
// Farewell Event Images
import farewell_1 from '../assets/farewell_1.jpeg';
import farewell_2 from '../assets/farewell_2.jpeg';
import farewell_3 from '../assets/farewell_3.jpeg';
import farewell_4 from '../assets/farewell_4.jpeg';
import farewell_5 from '../assets/farewell_5.jpeg';
import farewell_6 from '../assets/farewell_6.jpeg';

import alt_1 from '../assets/alt_1.jpg';
import alt_2 from '../assets/alt_2.jpg';
import alt_3 from '../assets/alt_3.jpg';
import alt_4 from '../assets/alt_4.jpg';
import alt_5 from '../assets/alt_5.jpg';
import alt_6 from '../assets/alt_6.jpg';
import alt_7 from '../assets/alt_7.jpg';
import alt_8 from '../assets/alt_8.jpg';
import alt_9 from '../assets/alt_9.jpg';
import alt_10 from '../assets/alt_10.jpg';
import alt_11 from '../assets/alt_11.jpg';
import alt_12 from '../assets/alt_12.jpg';
import alt_13 from '../assets/alt_13.jpg';
import alt_14 from '../assets/alt_14.jpg';
import alt_15 from '../assets/alt_15.jpg';
import alt_16 from '../assets/alt_16.jpg';
import alt_17 from '../assets/alt_17.jpg';
import alt_18 from '../assets/alt_18.jpg';
import alt_19 from '../assets/alt_19.jpg';
import alt_20 from '../assets/alt_20.jpg';
import alt_21 from '../assets/alt_21.jpg';
import alt_22 from '../assets/alt_22.jpg';
import alt_23 from '../assets/alt_23.jpg';
import alt_24 from '../assets/alt_24.jpg';
import alt_25 from '../assets/alt_25.jpg';
import alt_26 from '../assets/alt_26.jpg';
import alt_27 from '../assets/alt_27.jpg';
import alt_28 from '../assets/alt_28.jpg';

// ============================================
// IMAGE MAPPING OBJECT
// ============================================
// Add each imported image here with its key name
const IMAGE_MAP = {
  // Dashak images
  dashak_1: dashak_1,
  dashak_2: dashak_2,
  dashak_3: dashak_3,
  dashak_4: dashak_4,
  dashak_5: dashak_5,
  dashak_6: dashak_6,
  
  // Convocation images
  convocation_1: convocation_1,
  convocation_2: convocation_2,
  convocation_3: convocation_3,
  convocation_4: convocation_4,
  convocation_5: convocation_5,
  convocation_6: convocation_6,
  convocation_7: convocation_7,
  convocation_8: convocation_8,
  
  // Farewell images
  farewell_1: farewell_1,
  farewell_2: farewell_2,
  farewell_3: farewell_3,
  farewell_4: farewell_4,
  farewell_5: farewell_5,
  farewell_6: farewell_6,

  //Insti
  alt_1: alt_1,
  alt_2: alt_2,
  alt_3: alt_3,
  alt_4: alt_4,
  alt_5: alt_5,
  alt_6: alt_6,
  alt_7: alt_7,
  alt_8: alt_8,
  alt_9: alt_9,
  alt_10: alt_10,
  alt_11: alt_11,
  alt_12: alt_12,
  alt_13: alt_13,
  alt_14: alt_14,
  alt_15: alt_15,
  alt_16: alt_16,
  alt_17: alt_17,
  alt_18: alt_18,
  alt_19: alt_19,
  alt_20: alt_20,
  alt_21: alt_21,
  alt_22: alt_22,
  alt_23: alt_23,
  alt_24: alt_24,
  alt_25: alt_25,
  alt_26: alt_26,
  alt_27: alt_27,
  alt_28: alt_28,

};

// ============================================
// GALLERY DATA CONFIGURATION
// ============================================
// Reference images by their key names from IMAGE_MAP
const galleryData = [
  {
    id: 'dashak',
    title: 'Dashak',
    images: ['dashak_1', 'dashak_2', 'dashak_3', 'dashak_4', 'dashak_5', 'dashak_6'],
  },
  {
    id: 'convocation',
    title: 'Convocation Ceremony',
    images: ['convocation_1', 'convocation_2', 'convocation_3','convocation_4', 'convocation_5', 'convocation_6','convocation_7', 'convocation_8'],
  },
  {
    id: 'farewell',
    title: 'Farewell',
    images: ['farewell_1', 'farewell_2', 'farewell_3','farewell_4', 'farewell_5', 'farewell_6'],
  },
  {
    id: 'Institute',
    title: 'Institute',
    images: ['alt_1','alt_2','alt_3','alt_4','alt_5','alt_6','alt_7','alt_8','alt_9','alt_10','alt_11','alt_12','alt_13','alt_14','alt_15','alt_16','alt_17','alt_18','alt_19','alt_20','alt_21','alt_22','alt_23','alt_24','alt_25','alt_26','alt_27','alt_28'],
  },
];

// ============================================
// EVENT DECK COMPONENT WITH QUILTED IMAGE LIST
// ============================================
function EventDeck({ images, id, aspectRatios }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const deckRef = useRef(null);

  useEffect(() => {
    const currentRef = deckRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          setIsVisible(true);
          setHasBeenVisible(true);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '100px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasBeenVisible]);

  if (id === 'convocation' || id === 'farewell') {
    const portraits = images.filter(key => aspectRatios[key] < 1);
    const landscapes = images.filter(key => aspectRatios[key] >= 1);
    const ordered = [];
    portraits.forEach((p, i) => {
      ordered.push(p);
      if (landscapes[i*2]) ordered.push(landscapes[i*2]);
      if (landscapes[i*2+1]) ordered.push(landscapes[i*2+1]);
    });
    landscapes.slice(portraits.length * 2).forEach(l => ordered.push(l));
    const masonryItems = ordered.map(key => ({
      id: key,
      img: IMAGE_MAP[key],
      height: aspectRatios[key] < 1 ? 600 : 350
    }));
    return (
      <div ref={deckRef} className="relative mx-auto w-full px-2 sm:px-4 py-8">
        {isVisible ? (
          <Masonry
            items={masonryItems}
            className="max-w-4xl mx-auto"
          />
        ) : (
          <div className="flex items-center justify-center h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-inner">
            <div className="text-center space-y-3">
              <div className="animate-pulse">
                <div className="w-16 h-16 mx-auto bg-gray-300 dark:bg-gray-700 rounded-full"></div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Preparing gallery...</p>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    // Convert image keys to actual image sources
    const displayImages = images.map(imgKey => IMAGE_MAP[imgKey]);
    return (
      <div ref={deckRef} className="relative mx-auto w-full px-2 sm:px-4 py-8">
        {isVisible ? (
          <QuiltedImageList
            images={displayImages}
            className="max-w-4xl mx-auto"
          />
        ) : (
          <div className="flex items-center justify-center h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-inner">
            <div className="text-center space-y-3">
              <div className="animate-pulse">
                <div className="w-16 h-16 mx-auto bg-gray-300 dark:bg-gray-700 rounded-full"></div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Preparing gallery...</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

// ============================================
// MAIN GALLERY COMPONENT
// ============================================
export default function Gallery() {
  const [aspectRatios, setAspectRatios] = useState({});

  useEffect(() => {
    const loadAspectRatios = async () => {
      const ratios = {};
      await Promise.all(
        Object.entries(IMAGE_MAP).map(([key, imageSrc]) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              const aspectRatio = img.width / img.height;
              ratios[key] = aspectRatio;
              resolve();
            };
            img.onerror = () => {
              ratios[key] = 1;
              resolve();
            };
            img.src = imageSrc;
          });
        })
      );
      setAspectRatios(ratios);
    };
    loadAspectRatios();
  }, []);

  return (
    <div className="relative min-h-screen pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 px-3 sm:px-4 md:px-6 lg:px-8 mt-6 sm:mt-10 overflow-x-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Background can be added here */}
      </div>

      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {galleryData.map((event) => (
          <section key={event.id} className="space-y-4 sm:space-y-6">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white hover-underline-animation px-2">
              {event.title}
            </h2>

            <EventDeck images={event.images} id={event.id} aspectRatios={aspectRatios} />
          </section>
        ))}
      </div>
    </div>
  );
}