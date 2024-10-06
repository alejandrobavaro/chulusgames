import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './src', // Define que el directorio raíz sea src
  plugins: [react()],
  build: {
    outDir: '../build', // Opcional, si deseas cambiar el directorio de salida
    emptyOutDir: true,
  },
});
