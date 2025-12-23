import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // relative path, folder ke andar kaam karega
  plugins: [react(), tailwindcss()],
})
