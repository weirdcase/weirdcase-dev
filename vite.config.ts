import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import sass from 'sass'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      // scss: {
      //   implementation: sass,
      // },
      scss: {
        api: 'modern-compiler',
      }
    },
  },
  server: {
    port: 8080,
  },
  build: {
    outDir: './dist'
  }
})
