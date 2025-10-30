import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/character_builder/",
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@pages': '/src/components/pages',
      '@utils': '/src/utils',
      '@styles': '/src/styles',
      '@app-types': '/src/types'
    },
  },
})
