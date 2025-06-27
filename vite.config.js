import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist', // Output directory
    sourcemap: true // Generate source maps
  },
  server: {
    host: true
  },
})
