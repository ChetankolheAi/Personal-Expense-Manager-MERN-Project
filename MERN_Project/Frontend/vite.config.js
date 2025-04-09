import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the output folder is set
    emptyOutDir: true, // Clears old files before building
  },
  closeBundle() {
    const from = path.resolve(__dirname, 'public/_redirects');
    const to = path.resolve(__dirname, 'dist/_redirects');
    if (existsSync(from)) {
      copyFileSync(from, to);
      console.log('✅ Copied _redirects to dist/');
    } else {
      console.warn('⚠️ _redirects file not found in public/');
    }
  }
})
