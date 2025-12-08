import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import ThemeBtn from "./ThemeBtn";
import logo from "../assets/saa_logo_no_background.png";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function useClickOutside(ref, onClose) {
  useEffect(() => {
    function handle(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [ref, onClose]);
}

export default function Navbar() {
  const navigate=useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [qaOpen, setQaOpen] = useState(false);
  const qaRef = useRef(null);
  const [communityOpen, setCommunityOpen] = useState(false);
  const communityRef = useRef(null);
  
  useClickOutside(qaRef, () => setQaOpen(false));
  useClickOutside(menuRef, () => setMenuOpen(false));
  useClickOutside(communityRef, () => setCommunityOpen(false));
  
  // Debug effect to see state changes
  useEffect(() => {
    console.log('menuOpen is now:', menuOpen);
  }, [menuOpen]);
  
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between pl-2 pr-0 sm:pr-2 py-1 z-50 bg-white/80 dark:bg-black/10 backdrop-blur-md border-b border-gray-200/50 dark:border-white/10">
      <div onClick={()=>
        {
          navigate("/");
        }
      } className="text-gray-900 dark:text-white text-sm sm:text-lg flex items-center cursor-pointer">
        <img
          src={logo}
          alt="SAA logo"
          className="dark:invert w-[45px] h-[45px] sm:w-[55px] sm:h-[55px]"
        />
        <Typewriter
          words={["Society of Alumni Affairs"]}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
          loop={0}
        />
      </div>

      <nav className="absolute left-1/2 transform -translate-x-1/2 xl:flex hidden space-x-2 bg-gradient-to-r from-gray-100/80 to-gray-50/80 dark:bg-[radial-gradient(ellipse_80%_60%_at_top,rgba(255,255,255,0.1),#000000)] border border-gray-300/50 dark:border-white/10 px-2 py-1 rounded-full shadow-md text-xs backdrop-blur-sm">
        <Link
          to="/"
          className="text-gray-700 dark:text-neutral-300 bg-transparent hover:bg-gray-200/80 dark:hover:bg-black/30 border border-transparent hover:border-gray-300/50 dark:hover:border-white/20 px-3 py-1.5 rounded-full transition"
        >
          Home
        </Link>
        <Link
          to="/teams"
          className="text-gray-700 dark:text-neutral-300 bg-transparent hover:bg-gray-200/80 dark:hover:bg-black/30 border border-transparent hover:border-gray-300/50 dark:hover:border-white/20 px-3 py-1.5 rounded-full transition"
        >
          Team
        </Link>
        <Link
          to="/initiatives"
          className="text-gray-700 dark:text-neutral-300 bg-transparent hover:bg-gray-200/80 dark:hover:bg-black/30 border border-transparent hover:border-gray-300/50 dark:hover:border-white/20 px-3 py-1.5 rounded-full transition"
        >
          Initiatives
        </Link>
        <Link
          to="/visitIITJ"
          className="text-gray-700 dark:text-neutral-300 bg-transparent hover:bg-gray-200/80 dark:hover:bg-black/30 border border-transparent hover:border-gray-300/50 dark:hover:border-white/20 px-3 py-1.5 rounded-full transition"
        >
          VisitIITJ
        </Link>
        <div
          className="relative"
          ref={communityRef}
          onKeyDown={(e) => {
            if (e.key === "Escape") setCommunityOpen(false);
          }}
        >
          <button
            type="button"
            onClick={() => setCommunityOpen((v) => !v)}
            aria-haspopup="menu"
            aria-expanded={communityOpen}
            className={`text-gray-700 dark:text-neutral-300 bg-transparent hover:bg-gray-200/80 dark:hover:bg-black/30 border border-transparent hover:border-gray-300/50 dark:hover:border-white/20 px-3 py-1.5 rounded-full transition ${
              communityOpen ? "bg-gray-200/80 dark:bg-black/30" : ""
            }`}
          >
            Community
          </button>

          {communityOpen && (
            <div
              role="menu"
              tabIndex={-1}
              className="absolute left-1/2 -translate-x-1/2 mt-3 w-56 rounded-xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-xl ring-1 ring-black/5 dark:ring-white/10 p-1 z-50"
            >
              <a
                href="https://alumni.iitj.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                tabIndex={0}
                className="block w-full px-4 py-2.5 rounded-lg text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
                onClick={() => setCommunityOpen(false)}
              >
                Alumni Portal
              </a>
              <a
                href="https://www.iitj.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                tabIndex={0}
                className="block w-full px-4 py-2.5 rounded-lg text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
                onClick={() => setCommunityOpen(false)}
              >
                IIT Jodhpur
              </a>
            </div>
          )}
        </div>
        <Link
          to="/gallery"
          className="text-gray-700 dark:text-neutral-300 bg-transparent hover:bg-gray-200/80 dark:hover:bg-black/30 border border-transparent hover:border-gray-300/50 dark:hover:border-white/20 px-3 py-1.5 rounded-full transition"
        >
          Gallery
        </Link>

        {/* <div
          className="relative"  
          ref={qaRef}
          onKeyDown={(e) => {
            if (e.key === "Escape") setQaOpen(false);
          }}
        >
          <button
            type="button"
            onClick={() => setQaOpen((v) => !v)}
            aria-haspopup="menu"
            aria-expanded={qaOpen}
            className={`text-gray-700 dark:text-neutral-300 bg-transparent hover:bg-gray-200/80 dark:hover:bg-[#2a2a2a] border border-transparent hover:border-gray-300/50 dark:hover:border-[#3d3d3d] px-4 py-2 rounded-full transition ${
              qaOpen ? "bg-gray-200/80 dark:bg-[#2a2a2a]" : ""
            }`}
          >
            QuickAccess
          </button>

          {qaOpen && (
            <div
              role="menu"
              tabIndex={-1}
              className="absolute left-1/2 -translate-x-1/2 mt-3 w-56 rounded-xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-xl ring-1 ring-black/5 dark:ring-white/10 p-1 z-50"
            >
              <Link
                to="/community"
                role="menuitem"
                tabIndex={0}
                className="block w-full px-4 py-2.5 rounded-lg text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
                onClick={() => setQaOpen(false)}
              >
                Community Links
              </Link>
              <Link
                to="/gallery"
                role="menuitem"
                tabIndex={0}
                className="block w-full px-4 py-2.5 rounded-lg text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
                onClick={() => setQaOpen(false)}
              >
                Gallery
              </Link>
            </div>
          )}
        </div> */}

        {/* <Link
          to="/alumniMap"
          className="text-gray-700 dark:text-neutral-300 bg-transparent hover:bg-gray-200/80 dark:hover:bg-[#2a2a2a] border border-transparent hover:border-gray-300/50 dark:hover:border-[#3d3d3d] px-4 py-2 rounded-full transition"
        >
          Map
        </Link> */}
      </nav>

      <div className="flex items-center space-x-2">
        <ThemeBtn />
        <div ref={menuRef}>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="p-1.5 xl:hidden rounded text-gray-700 dark:text-neutral-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/80 dark:hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 dark:focus:ring-white/20"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg
              className="h-5 w-5 transition-transform duration-200"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        
          {/* Mobile menu */}
          {menuOpen && (
            <div className="z-10 absolute right-2 top-20 mt-3 w-36 rounded-xl bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-xl ring-1 ring-black/5 dark:ring-white/10 p-1 text-center transition-all duration-200">
              <ul className="text-sm flex flex-col gap-2 p-2">
                <li>
                  <Link
                    to="/"
                    className="btn block p-1 hover:bg-gray-100 rounded-md dark:hover:text-red-400 dark:hover:bg-black/60 dark:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/teams"
                    className="btn block p-1 hover:bg-gray-100 rounded-md dark:hover:text-red-400 dark:hover:bg-black/60 dark:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/initiatives"
                    className="btn block p-1 hover:bg-gray-100 rounded-md dark:hover:text-red-400 dark:hover:bg-black/60 dark:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    Initiatives
                  </Link>
                </li>
                <li>
                  <Link
                    to="/visitIITJ"
                    className="btn block p-1 hover:bg-gray-100 rounded-md dark:hover:text-red-400 dark:hover:bg-black/60 dark:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    VisitIITJ
                  </Link>
                </li>
                <li className="relative">
                  <button
                    type="button"
                    className="btn block w-full p-1 hover:bg-gray-100 rounded-md dark:hover:text-red-400 dark:hover:bg-black/60 dark:text-white"
                    onClick={() => setCommunityOpen((v) => !v)}
                  >
                    Community
                  </button>
                  {communityOpen && (
                    <div className="absolute left-0 top-full mt-1 transform -translate-x-full rounded-lg bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg ring-1 ring-black/5 dark:ring-white/10 p-1">
                      <a
                        href="https://alumni.iitj.ac.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 text-xs hover:bg-gray-100 rounded-md dark:hover:text-red-400 dark:hover:bg-black/60 dark:text-white"
                        onClick={() => {
                          setCommunityOpen(false);
                          setMenuOpen(false);
                        }}
                      >
                        Alumni Portal
                      </a>
                      <a
                        href="https://www.iitj.ac.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 text-xs hover:bg-gray-100 rounded-md dark:hover:text-red-400 dark:hover:bg-black/60 dark:text-white"
                        onClick={() => {
                          setCommunityOpen(false);
                          setMenuOpen(false);
                        }}
                      >
                        IIT Jodhpur
                      </a>
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="btn block p-1 hover:bg-gray-100 rounded-md dark:hover:text-red-400 dark:hover:bg-gray-800 dark:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    Gallery
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/alumniMap"
                    className="btn block p-1 hover:bg-gray-100 rounded-md cursor-pointer dark:hover:text-red-400 dark:hover:bg-gray-800 dark:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    Map
                  </Link>
                </li> */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}