import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    target: 'es2015'
  },
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        background_color: 'grey',
        display: 'standalone',
        icons: [
          {
            purpose: 'any',
            sizes: '192x192',
            src: 'manifest-icon-192.maskable.png',
            type: 'image/png'
          },
          {
            purpose: 'maskable',
            sizes: '192x192',
            src: 'manifest-icon-192.maskable.png',
            type: 'image/png'
          },
          {
            purpose: 'any',
            sizes: '512x512',
            src: 'manifest-icon-512.maskable.png',
            type: 'image/png'
          },
          {
            purpose: 'maskable',
            sizes: '512x512',
            src: 'manifest-icon-512.maskable.png',
            type: 'image/png'
          }
        ],
        name: 'crypto',
        short_name: 'Testapp',
        start_url: '.',
        theme_color: 'red'
      },
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['assets/**', 'index.html', 'manifest.webmanifest'],
        runtimeCaching: [
          {
            handler: 'NetworkFirst',
            // Cache GET requests to https://coinranking1.p.rapidapi.com/coins
            urlPattern: 'https://coinranking1.p.rapidapi.com/coins'
          },
          {
            handler: 'NetworkFirst',
            // Regular expression to cache GET requests to
            // “https://avancera.app/cities/ID” (with or without a trailing
            // slash)
            urlPattern:
              /https:\/\/coinranking1\.p\/.rapidapi\/.com\/[0-9a-f-]+\/?/
          }
        ]
      }
    }),
    vue()
  ]
})
