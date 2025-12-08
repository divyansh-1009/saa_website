'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/g7.jpg";
import g8 from "../assets/g8.jpg";
import g10 from "../assets/g10.jpg";
import VisitIITj from "../assets/Visitiitj.jpg";
import mahi from '../../asset/mahi_team.jpg';
import raghuveer from '../../asset/raghuveer_team.jpg';

// Inline CSS for FlipCard - Optimized for performance
const styles = `
.flip-card {
  background-color: transparent;
  width: 100%;
  height: 16rem;
  cursor: pointer;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
  transform-style: preserve-3d;
  will-change: transform;
}

.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
  overflow: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.flip-card-front img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
}

.flip-card-back {
  background-color: #1f2937;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
  transform: rotateY(180deg);
}

/* Swiper Navigation Styles */
.swiper-button-prev-custom,
.swiper-button-next-custom {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 640px) {
  .swiper-button-prev-custom,
  .swiper-button-next-custom {
    padding: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
  
  .swiper-button-prev-custom svg,
  .swiper-button-next-custom svg {
    width: 1rem;
    height: 1rem;
  }
}

/* Swiper Pagination Styles */
.swiper-pagination {
  position: relative !important;
  margin-top: 1.5rem;
}

.swiper-pagination-bullet {
  background: gray;
  opacity: 0.5;
}

.swiper-pagination-bullet-active {
  background: #ef4444;
  opacity: 1;
}

.dark .swiper-pagination-bullet-active {
  background: #3b82f6;
}

/* Responsive icon fixes */
@media (max-width: 640px) {
  .social-icon-container {
    width: 2.5rem !important;
    height: 2.5rem !important;
    padding: 0.5rem !important;
  }
  
  .social-icon {
    width: 1rem !important;
    height: 1rem !important;
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  .social-icon-container {
    width: 3rem !important;
    height: 3rem !important;
    padding: 0.75rem !important;
  }
  
  .social-icon {
    width: 1.25rem !important;
    height: 1.25rem !important;
  }
}
`;

// Sample team data with mailto
const teamData = [
  {
    name: 'Raghuveer Kulkarni',
    role: 'Vice President',
    img: raghuveer,
    instagram: 'https://www.instagram.com/raghuveerkulkarni007/',
    linkedin: 'https://www.linkedin.com/in/raghuveer-kulkarni-185450281/',
    mailto: 'mailto:b23es1020@iitj.ac.in'
  },
  {
    name: 'Mahi Chouhan',
    role: 'Overall Coordinator',
    img: mahi,
    instagram: 'https://www.instagram.com/mahi_06chouhan/',
    linkedin: 'https://www.linkedin.com/in/mahi-chouhan-50579728a/',
    mailto: 'mailto:b23ee1038@iitj.ac.in'
  },
];

// ========================
// UPDATED Social Media Icons - FIXED RESPONSIVENESS
// ========================

const InstagramIcon = ({ className = "" }) => (
  <svg className={`social-icon w-4 h-4 sm:w-5 sm:h-5 ${className}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedInIcon = ({ className = "" }) => (
  <svg className={`social-icon w-4 h-4 sm:w-5 sm:h-5 ${className}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065  0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Email Icon (Replace with your final SVG later)
const EmailIcon = ({ className = "" }) => (
  <svg className={`social-icon w-4 h-4 sm:w-5 sm:h-5 ${className}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

// ========================
// UPDATED SAATeam Section - FIXED ICON RESPONSIVENESS
// ========================

const SAATeam = () => {
  return (
    <section className="mt-6 mb-6 sm:mt-8 sm:mb-8 md:mt-10 md:mb-10 lg:mt-12 lg:mb-12 rounded-2xl sm:rounded-3xl bg-gray-50 dark:bg-gray-950 py-8 sm:py-10 md:py-12">
      <div className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto max-w-screen-xl text-center relative">
        
        <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4 hover-underline-animation">
          Normal Visit
        </h1>
  
        <p className="mb-8 sm:mb-10 text-base sm:text-lg md:text-xl font-normal text-gray-600 dark:text-gray-300 sm:px-8 md:px-16 lg:px-32 xl:px-48 leading-relaxed max-w-4xl mx-auto">
          Contact Us
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="relative z-10 flex justify-center w-full">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-7xl px-4">
          {teamData.map((member, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-gray-300 dark:border-gray-500 hover:shadow-2xl transition-shadow duration-200 w-full sm:w-80 md:w-72 lg:w-80"
            >
              <div className="flex flex-col items-center text-center h-full">
                {/* Profile Image */}
                <div className="mb-4 sm:mb-6">
                  <img
                    className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full object-cover ring-2 ring-gray-300 dark:ring-gray-600"
                    src={member.img}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Name and Role */}
                <div className="mb-4 sm:mb-6 flex-grow flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                    {member.role}
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex items-center justify-center space-x-3 sm:space-x-4 mt-auto">
                  {/* Instagram */}
                  {member.instagram && member.instagram !== '#' && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-container bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-red-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 hover:scale-110 rounded-full flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-2.5"
                      aria-label={`Follow ${member.name} on Instagram`}
                    >
                      <InstagramIcon />
                    </a>
                  )}

                  {/* LinkedIn */}
                  {member.linkedin && member.linkedin !== '#' && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-container bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-red-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 hover:scale-110 rounded-full flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-2.5"
                      aria-label={`Connect with ${member.name} on LinkedIn`}
                    >
                      <LinkedInIcon />
                    </a>
                  )}

                  {/* Email */}
                  {member.mailto && (
                    <a
                      href={member.mailto}
                      className="social-icon-container bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-red-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 hover:scale-110 rounded-full flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-2.5"
                      aria-label={`Email ${member.name}`}
                    >
                      <EmailIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FlipCard Component - Optimized with lazy loading
function FlipCard({ imageSrc, name }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`flip-card ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={imageSrc}
            alt={name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="flip-card-back">{name}</div>
      </div>
    </div>
  );
}

// Main Component
export default function VisitIITJ() {
  const cards = [
    { imageSrc: g1, name: 'Clock Tower' },
    { imageSrc: g2, name: 'Campus Life' },
    { imageSrc: g3, name: 'Cafeteria' },
    { imageSrc: g4, name: 'Sports Facilities' },
    { imageSrc: g5, name: 'Fountain' },
    { imageSrc: g6, name: 'Knowledge Tree' },
    { imageSrc: g7, name: 'Sports Facilities' },
    { imageSrc: g8, name: 'PRITHVI DRDO' },
    { imageSrc: g10, name: 'Green Spaces' },
  ];

  return (
    <>
      <Helmet>
        <title>Visit IIT Jodhpur</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href={VisitIITj} />
      </Helmet>
      <style>{styles}</style>

      {/* Hero Section */}
      <section className="text-black dark:text-white py-6 sm:py-8 md:py-12 overflow-x-hidden">
        <div className="gap-6 sm:gap-8 items-center px-3 sm:px-4 md:px-6 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-6 justify-items-center">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 mt-12 sm:mt-16 md:mt-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-black dark:text-white hover-underline-animation">
              Visit IIT Jodhpur
            </h2>
            <p className="mb-6 font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
              We invite you to tour IIT Jodhpur's impressive and picturesque campus, where you can see the foundation of our impactful endeavors.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={VisitIITj}
              alt="IIT Jodhpur Campus"
              className="w-full h-auto"
              width={600}
              height={400}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Flip Card Carousel */}
      <section className="py-8 sm:py-12 md:py-16 overflow-x-hidden">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 px-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white hover-underline-animation">
            Our Campus Highlights
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base md:text-lg">
            Tap to flip and explore
          </p>
        </div>
        <div className="w-full max-w-7xl mx-auto overflow-hidden px-3 sm:px-4 relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop={true}
            loopAdditionalSlides={1}
            autoplay={{ 
              delay: 5000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={false}
            grabCursor={true}
            touchRatio={1}
            threshold={10}
            speed={600}
            lazy={{
              loadPrevNext: true,
              loadPrevNextAmount: 2
            }}
            watchSlidesProgress={true}
            breakpoints={{
              480: { slidesPerView: 1.3, spaceBetween: 20 },
              640: { slidesPerView: 1.5, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 28 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 3, spaceBetween: 32 }
            }}
            className="!overflow-visible"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index} className="h-auto">
                <FlipCard imageSrc={card.imageSrc} name={card.name} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <button
            className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Team Section */}
      <SAATeam />
    </>
  );
}