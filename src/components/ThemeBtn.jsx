import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { lightTheme, darkTheme } from "../app/themeSlice";
import { useState } from "react";
import { motion } from "motion/react";
function ThemeBtn() {
    const dispatch = useDispatch();
    let themeMode = useSelector((state) => state.theme.themeMode);

    // Sync isDarkMode with Redux state
    const [isDarkMode, setIsDarkMode] = useState(themeMode === "dark");


    useEffect(() => {
        const theme = localStorage.getItem("theme");
        console.log("Initializing theme:", theme)
        if (theme === "dark") {
            dispatch(darkTheme());
        } else {
            dispatch(lightTheme());
        }
        
        // Mark HTML as loaded after a short delay to enable smooth transitions
        setTimeout(() => {
            document.documentElement.classList.add('loaded');
        }, 100);
    }, [dispatch])

    useEffect(() => {
        localStorage.setItem("theme", themeMode)
    }, [themeMode])

    useEffect(() => {
        // Update class on HTML tag whenever themeMode changes
        const htmltag = document.documentElement;
        htmltag.classList.remove("light", "dark");
        htmltag.classList.add(themeMode);

        // Sync local state with Redux theme
        setIsDarkMode(themeMode === "dark");
        
        console.log("Theme mode changed to:", themeMode);
    }, [themeMode]);

    const handleThemeChange = () => {
        console.log("Before Dispatch:", themeMode);
        if (isDarkMode) {
            dispatch(lightTheme()); // If currently dark, switch to light
        } else {
            dispatch(darkTheme()); // If currently light, switch to dark
        }
        console.log("After Dispatch:", themeMode);
    };

    return (
        <motion.button
            onClick={handleThemeChange}
            className={`p-1 sm:p-1.5 rounded-full flex items-center justify-center shadow-md transition-colors duration-200 ${isDarkMode ? 'bg-[#3b82f6]' : 'bg-[#ff0000]'
                }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        >
            <motion.div
                className="w-6 h-6 flex items-center justify-center"
                initial={false}
                animate={{ rotate: isDarkMode ? 0 : 180 }}
                transition={{ duration: 0.3 }}
            >
                {isDarkMode ? (
                    // Sun SVG (dark mode)
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        fill="#ffffff"
                        className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]"
                    >
                        <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z" />
                    </svg>
                ) : (
                    // Sun SVG (light mode)
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960 "
                        fill="#ffffff"
                        style={{ transform: 'scaleX(-1) rotate(90deg)' }}
                        className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]"
                    >
                        <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
                    </svg>
                )}
            </motion.div>
        </motion.button>
    );
}

export default ThemeBtn;