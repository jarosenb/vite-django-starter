import eslint from '@rollup/plugin-eslint';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/core/static/',
  plugins: [
    {...eslint({include: 'src/**/*.+(js|jsx|ts|tsx)', fix: false}), enforce: 'pre', },
    react()],

  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
      _common: resolve(__dirname, 'src/_common')
    },
  },

  server: {
    hmr: {
      port: 3000,
      host: 'localhost'
    }
  }
})
