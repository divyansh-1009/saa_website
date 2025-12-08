'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useImageAspectRatio } from '../hooks/useImageAspectRatio';
import about1 from "../assets/alt_9.jpg";
import about2 from "../assets/alt_10.jpg";
import about3 from "../assets/alt_11.jpg";
import about4 from "../assets/alt_12.jpg";

const testimonials = [
  {
    id: 1,
    title: "Why It Started",
    content: "Intern Bridge was launched to connect students with real-world opportunities, providing hands-on internship experiences and mentorship to prepare them for professional success.",
    // author: "Dr. Lisa Thompson",
    // role: "Program Founder",
    // avatar: "💼",
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "What We Do",
    content: "We pair students with industry professionals for internships, offer career workshops, networking events, and personalized guidance to help students transition from classroom to workplace.",
    // author: "James Patel",
    // role: "Internship Coordinator",
    // avatar: "🤝",
    color: "from-green-500 to-blue-600"
  },
  {
    id: 3,
    title: "Our Impact",
    content: "Intern Bridge participants achieve 75% higher internship placement rates and gain critical skills, with 90% reporting increased confidence in their career paths.",
    // author: "Sophie Nguyen",
    // role: "Career Advisor",
    // avatar: "🚀",
    color: "from-purple-500 to-pink-600"
  }
];

const carouselImages = [about1, about2, about3, about4];

export default function InternBridge() {
  const [currentCard, setCurrentCard] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const currentImageAspectRatio = useImageAspectRatio(carouselImages[currentImage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <Helmet>
        <title>Intern Bridge - Internship Connection Program</title>
        <meta name="description" content="Connect with industry professionals and kickstart your career with the Intern Bridge Program" />
      </Helmet>

      <main className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-10 text-center">
        
        {/* Image Carousel at the top */}
        <div className="relative w-full max-w-5xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <div 
            className="relative w-full transition-all duration-500"
            style={{
              aspectRatio: currentImageAspectRatio ? `${currentImageAspectRatio}` : '16/9',
              minHeight: '300px',
              maxHeight: '600px'
            }}
          >
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Intern Bridge slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
            ))}
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentImage
                      ? 'bg-white scale-125'
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={() => setCurrentImage((prev) => (prev + 1) % carouselImages.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>

        <div className="mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-red-600 dark:text-red-400 hover-underline-animation">
            Intern Bridge Initiative
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-8 text-black dark:text-gray-300">
            IBI
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
            Connecting students with industry professionals to launch successful careers through internships and mentorship.
          </p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto mb-12">
          <div className="relative h-[500px] sm:h-[550px] lg:h-[600px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentCard;
              const isNext = index === (currentCard + 1) % testimonials.length;
              const isPrev = index === (currentCard - 1 + testimonials.length) % testimonials.length;
              
              let transform = '';
              let zIndex = 1;
              let opacity = 0.3;
              let scale = 0.85;
              
              if (isActive) {
                transform = 'translateX(0) translateY(0) rotate(0deg)';
                zIndex = 30;
                opacity = 1;
                scale = 1;
              } else if (isNext) {
                transform = 'translateX(25px) translateY(15px) rotate(3deg)';
                zIndex = 20;
                opacity = 0.7;
                scale = 0.95;
              } else if (isPrev) {
                transform = 'translateX(-25px) translateY(15px) rotate(-3deg)';
                zIndex = 20;
                opacity = 0.7;
                scale = 0.95;
              } else {
                transform = `translateX(${Math.random() * 50 - 25}px) translateY(${Math.random() * 30 + 25}px) rotate(${Math.random() * 8 - 4}deg)`;
                zIndex = 10;
                opacity = 0.4;
                scale = 0.9;
              }

              return (
                <div
                  key={testimonial.id}
                  className="absolute w-80 h-96 sm:w-96 sm:h-[420px] lg:w-[450px] lg:h-[480px] xl:w-[500px] xl:h-[520px] rounded-3xl shadow-2xl transition-all duration-700 ease-in-out cursor-pointer hover:scale-105"
                  style={{
                    transform: `${transform} scale(${scale})`,
                    zIndex,
                    opacity,
                  }}
                  onClick={() => setCurrentCard(index)}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${testimonial.color} rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-2xl`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-6 right-6 text-6xl sm:text-7xl lg:text-8xl">{testimonial.avatar}</div>
                      <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full transform translate-x-16 translate-y-16"></div>
                      <div className="absolute top-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-white opacity-5 rounded-full transform -translate-x-10 -translate-y-10"></div>
                    </div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center">
                          {testimonial.title}
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 opacity-90">
                          "{testimonial.content}"
                        </p>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="text-3xl sm:text-4xl lg:text-5xl mr-3 sm:mr-4">{testimonial.avatar}</div>
                        <div className="text-left">
                          <p className="font-semibold text-sm sm:text-base lg:text-lg">{testimonial.author}</p>
                          <p className="text-xs sm:text-sm lg:text-base opacity-80">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>

                    {isActive && (
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full animate-pulse"></div>
                      </div>
                    )}

                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm sm:text-base">{index + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-8 space-x-3 sm:space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  index === currentCard
                    ? 'bg-blue-500 scale-125 dark:bg-blue-400'
                    : 'bg-gray-600 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <div className="mt-6 w-full max-w-xs sm:max-w-sm mx-auto">
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-1 sm:h-2">
              <div 
                className="bg-blue-600 dark:bg-blue-400 h-1 sm:h-2 rounded-full transition-all duration-75 ease-linear"
                style={{ width: `${((currentCard + 1) / testimonials.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-400">
            {currentCard + 1} of {testimonials.length}
          </div>
        </div>

        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 text-sm sm:text-base lg:text-lg">
          Join Intern Bridge Today
        </button>
      </main>

      <footer className="absolute bottom-4 text-gray-700 dark:text-gray-400 text-xs sm:text-sm z-10">
        © {new Date().getFullYear()} Intern Bridge Program. All rights reserved.
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .slide-in {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}