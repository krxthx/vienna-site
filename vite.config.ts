import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // allow access through ngrok tunnels
    allowedHosts: ['.ngrok-free.app', '.ngrok-free.dev', '.ngrok.app', '.ngrok.io'],
  },
})
