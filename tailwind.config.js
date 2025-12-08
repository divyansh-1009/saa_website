/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // enables class-based dark mode
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      // Primary red scale (all hues map to red variants)
      red: {
        50: '#ffe5e5',
        100: '#ffcccc',
        200: '#ffb2b2',
        300: '#ff9999',
        400: '#ff4d4d',
        500: '#ff0000',
        600: '#e60000',
        700: '#cc0000',
        800: '#b30000',
        900: '#990000',
        950: '#4d0000',
      },
      // Map common neutrals entirely to black/white
      gray: {
        50: '#ffffff', 100: '#ffffff', 200: '#ffffff', 300: '#ffffff', 400: '#ffffff',
        500: '#000000', 600: '#000000', 700: '#000000', 800: '#000000', 900: '#000000', 950: '#000000',
      },
      slate: {
        50: '#ffffff', 100: '#ffffff', 200: '#ffffff', 300: '#ffffff', 400: '#ffffff',
        500: '#000000', 600: '#000000', 700: '#000000', 800: '#000000', 900: '#000000', 950: '#000000',
      },
      zinc: {
        50: '#ffffff', 100: '#ffffff', 200: '#ffffff', 300: '#ffffff', 400: '#ffffff',
        500: '#000000', 600: '#000000', 700: '#000000', 800: '#000000', 900: '#000000', 950: '#000000',
      },
      neutral: {
        50: '#ffffff', 100: '#ffffff', 200: '#ffffff', 300: '#ffffff', 400: '#ffffff',
        500: '#000000', 600: '#000000', 700: '#000000', 800: '#000000', 900: '#000000', 950: '#000000',
      },
      // Actual blue colors for dark mode hover effects
      blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
        950: '#172554',
      },
      indigo: {
        50: '#ffe5e5', 100: '#ffcccc', 200: '#ffb2b2', 300: '#ff9999', 400: '#ff4d4d',
        500: '#ff0000', 600: '#e60000', 700: '#cc0000', 800: '#b30000', 900: '#990000', 950: '#4d0000',
      },
      purple: {
        50: '#ffe5e5', 100: '#ffcccc', 200: '#ffb2b2', 300: '#ff9999', 400: '#ff4d4d',
        500: '#ff0000', 600: '#e60000', 700: '#cc0000', 800: '#b30000', 900: '#990000', 950: '#4d0000',
      },
      pink: {
        50: '#ffe5e5', 100: '#ffcccc', 200: '#ffb2b2', 300: '#ff9999', 400: '#ff4d4d',
        500: '#ff0000', 600: '#e60000', 700: '#cc0000', 800: '#b30000', 900: '#990000', 950: '#4d0000',
      },
      green: {
        50: '#ffe5e5', 100: '#ffcccc', 200: '#ffb2b2', 300: '#ff9999', 400: '#ff4d4d',
        500: '#ff0000', 600: '#e60000', 700: '#cc0000', 800: '#b30000', 900: '#990000', 950: '#4d0000',
      },
      emerald: {
        50: '#ffe5e5', 100: '#ffcccc', 200: '#ffb2b2', 300: '#ff9999', 400: '#ff4d4d',
        500: '#ff0000', 600: '#e60000', 700: '#cc0000', 800: '#b30000', 900: '#990000', 950: '#4d0000',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 60% at top, rgba(255,0,0,0.1), transparent)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

