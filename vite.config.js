import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://real-estate-gfc9.onrender.com',
        changeOrigin: true,
      },
    },
  },

  plugins: [react()],
});
