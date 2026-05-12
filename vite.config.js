import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/china-it-job-market/',
  server: {
    port: 10127,
  },
})
