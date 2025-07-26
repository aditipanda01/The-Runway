import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['slick-carousel']
  },
  build: {
    rollupOptions: {
      // Force Vite to inline the CSS instead of skipping it
      external: [],
    }
  }
})
