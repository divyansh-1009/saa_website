import { Link } from "react-router-dom";
import logo from "../assets/saa_logo_no_background.png";

const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer-accent {
            color: #ef4444; /* red-500 */
          }
          .dark .footer-accent {
            color: #2563eb; /* blue-600 */
          }
        `}
      </style>
    <footer className="w-full bg-white/80 dark:bg-black/10 backdrop-blur-md border-t border-gray-200/50 dark:border-white/10 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        
        {/* Logo and Title Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
            <img
              src={logo}
              alt="SAA Logo"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 dark:invert"
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white text-center sm:text-left px-2">
              Society of Alumni Affairs
            </h2>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10">
          
          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 footer-accent uppercase hover-underline-animation">
              Resources
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-blue-600 transition-colors duration-200 inline-block hover:underline underline-offset-4"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/teams"
                  className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-blue-600 transition-colors duration-200 inline-block hover:underline underline-offset-4"
                >
                  Student Team
                </Link>
              </li>
              <li>
                <Link
                  to="/initiatives"
                  className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-blue-600 transition-colors duration-200 inline-block hover:underline underline-offset-4"
                >
                  Initiatives
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Access Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 footer-accent uppercase hover-underline-animation">
              Quick Access
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/visitIITJ"
                  className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-blue-600 transition-colors duration-200 inline-block hover:underline underline-offset-4"
                >
                  Visit IITJ
                </Link>
              </li>
              <li>
                <a
                  href="https://www.iitj.ac.in/main/en/iitj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-blue-600 transition-colors duration-200 inline-block hover:underline underline-offset-4"
                >
                  IIT Jodhpur
                </a>
              </li>
              <li>
                <a
                  href="https://alumni.iitj.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-blue-600 transition-colors duration-200 inline-block hover:underline underline-offset-4"
                >
                  Alumni Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 footer-accent uppercase hover-underline-animation">
              Connect With Us
            </h3>
            
            {/* Contact Details */}
            <div className="space-y-3 mb-6">
              <a href="tel:+917499027852" className="flex items-start gap-2 group">
                <svg className="w-5 h-5 mt-0.5 footer-accent flex-shrink-0 group-hover:text-red-600 dark:group-hover:text-blue-600 transition-colors duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span className="text-gray-700 dark:text-gray-300 text-sm group-hover:text-red-600 dark:group-hover:text-blue-600 transition-colors duration-200">
                  +91 74990 27852
                </span>
              </a>
              
              <a href="mailto:saa@iitj.ac.in" className="flex items-start gap-2 group">
                <svg className="w-5 h-5 mt-0.5 footer-accent flex-shrink-0 group-hover:text-red-600 dark:group-hover:text-blue-600 transition-colors duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span className="text-gray-700 dark:text-gray-300 text-sm group-hover:text-red-600 dark:group-hover:text-blue-600 transition-colors duration-200">
                  saa@iitj.ac.in
                </span>
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/saa.iitj/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-red-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              <a
                href="https://www.linkedin.com/company/society-of-alumni-affairs-iit-jodhpur/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-red-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 footer-accent uppercase hover-underline-animation">
              Contact Us
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
                  Our Location
                </h4>
                <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>Office of Alumni Relations</p>
                  <p>Indian Institute of Technology Jodhpur</p>
                  <p>NH 62 Nagaur Road</p>
                  <p>Karwar - 342030</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
              © 2025 Society of Alumni Affairs, IIT Jodhpur. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            </div>
          </div>
        </div>

      </div>
    </footer>
    </>
  );
};

export default Footer;