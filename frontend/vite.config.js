import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['titan-ai-frontend.onrender.com']
  },
  preview: {
    allowedHosts: ['titan-ai-frontend.onrender.com']
  }
})
