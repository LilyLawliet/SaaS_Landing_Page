import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// Import the new Vite-specific plugin
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Use the new Tailwind CSS Vite plugin
    tailwindcss()
  ],
})
