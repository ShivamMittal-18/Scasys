import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      "46e8-2401-4900-5b97-37b5-f4e3-8118-91e5-c0dc.ngrok-free.app"
    ]
  }
})
