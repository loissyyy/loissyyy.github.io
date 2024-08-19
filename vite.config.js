import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/loissyyy.github.io/',  // Set this to the correct subdirectory
  plugins: [react()],
});

