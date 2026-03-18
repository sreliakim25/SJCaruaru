import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: 'São João de Caruaru 2026',
        short_name: 'SJ Caruaru',
        description: 'O Maior e Melhor São João do Mundo',
        theme_color: '#B5451B',
        background_color: '#1A0A00',
        display: 'standalone',
        icons: [
          {
            src: 'https://cdn-icons-png.flaticon.com/512/3665/3665922.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
