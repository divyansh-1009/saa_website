import React from 'react';
import president from "../assets/president_team.jpg";

// ========================
// UPDATED Social Media Icons - RESPONSIVE
// ========================

const InstagramIcon = ({ className = "" }) => (
  <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${className}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedInIcon = ({ className = "" }) => (
  <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${className}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Email Icon (Clean & Modern)
const EmailIcon = ({ className = "" }) => (
  <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${className}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

// ========================
// UPDATED Faculty Advisor Card - RESPONSIVE ICONS
// ========================

const FacultyAdvisorCard = () => (
  <div className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md group relative bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-xl sm:rounded-2xl py-6 px-4 sm:px-6 shadow-2xl border border-white/50 dark:border-white/10 hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 flex flex-col items-center">
    {/* Decorative gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    <div className="relative z-10 flex flex-col items-center text-center flex-grow w-full">
      {/* Profile Image */}
      <div className="relative mb-4 sm:mb-6">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 animate-pulse"></div>
        <img
          className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full object-cover ring-4 ring-red-200 dark:ring-red-800 shadow-xl group-hover:ring-red-400 dark:group-hover:ring-red-600 transition-all duration-300"
          src={president}
          alt="Shankar Manoharan"
        />
      </div>

      {/* Name & Role */}
      <div className="mb-4 sm:mb-6 w-full">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-[#60a5fa] transition-colors duration-300 hover-underline-animation">
          Shankar Manoharan
        </h3>
        <p className="text-sm sm:text-base text-red-600 dark:text-[#60a5fa] font-medium">President</p>
      </div>

      {/* UPDATED Social Icons - RESPONSIVE */}
      <div className="flex items-center justify-center space-x-3 sm:space-x-4 w-full">
        {/* Instagram */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-container group/icon relative bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-2.5"
          aria-label="Follow Shankar Manoharan on Instagram"
        >
          <InstagramIcon />
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur opacity-0 group-hover/icon:opacity-30 transition-opacity duration-200"></div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/smanoharan-naan/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-container group/icon relative bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full hover:from-blue-600 hover:to-blue-800 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-2.5"
          aria-label="Connect with Shankar Manoharan on LinkedIn"
        >
          <LinkedInIcon />
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full blur opacity-0 group-hover/icon:opacity-30 transition-opacity duration-200"></div>
        </a>

        {/* Email */}
        <a
          href="mailto:shankarmanoharan@iitj.ac.in"
          className="social-icon-container group/icon relative bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:from-green-600 hover:to-emerald-700 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-2.5"
          aria-label="Email Shankar Manoharan"
        >
          <EmailIcon />
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur opacity-0 group-hover/icon:opacity-30 transition-opacity duration-200"></div>
        </a>
      </div>
    </div>

    {/* Hover border */}
    <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-800 transition-colors duration-300"></div>
  </div>
);

// ========================
// UPDATED Main Section - RESPONSIVE
// ========================

const FacultyAdvisor = () => {
  return (
    <section className="py-12 sm:py-16 px-4 text-center mt-16 sm:mt-20">
      {/* Section Header */}
      <div className="flex items-center justify-center mb-8 sm:mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent flex-1 max-w-16 sm:max-w-32 md:max-w-48"></div>
        <h3 className="px-4 sm:px-6 text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-900 whitespace-nowrap">
          President
        </h3>
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent flex-1 max-w-16 sm:max-w-32 md:max-w-48"></div>
      </div>

      {/* Advisor Card */}
      <FacultyAdvisorCard />
    </section>
  );
};

export default FacultyAdvisor;