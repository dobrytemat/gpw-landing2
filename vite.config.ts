import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Zmień poniższą linię na nazwę Twojego repozytorium
  base: '/gpw-landing2/', 
})