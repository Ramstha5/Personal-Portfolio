import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      strict: false,
    },
    hmr: {
      overlay: true
    },
    watch: {
      ignored: ['**/index.html']
    }
  },
  build: {
    assetsDir: 'assets',
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-redux'],
        },
      },
    },
    sourcemap: true,
    minify: 'terser',
  },
  preview: {
    port: 4173,
  },
})
