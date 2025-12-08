import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'gallery-vendor': ['gsap'],
          'gallery-images': [
            './src/assets/dashak_1.JPG',
            './src/assets/dashak_2.JPG',
            './src/assets/dashak_3.JPG',
            './src/assets/dashak_4.JPG',
            './src/assets/dashak_5.JPG',
            './src/assets/dashak_6.JPG',
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
  },
  optimizeDeps: {
    include: ['gsap', 'react', 'react-dom']
  }
})
