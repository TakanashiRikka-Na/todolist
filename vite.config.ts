import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,   // 修复HMR热更新失效
    },
  },
  css: {
    modules: {
      localsConvention: "dashes",
      scopeBehaviour: "local",
    },

  },
  plugins: [react()],
})
