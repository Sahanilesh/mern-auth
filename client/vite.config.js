// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // <<< Is this imported?
import tailwindcss from '@tailwindcss/vite'; // For Tailwind setup

export default defineConfig({
  plugins: [
    react(), // <<< Is this called in the array?
    tailwindcss(), // Your Tailwind plugin
    // ... other plugins
  ],
});