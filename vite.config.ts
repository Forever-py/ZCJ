import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/variables.scss";', // 添加公共样式
      },
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  }
})
