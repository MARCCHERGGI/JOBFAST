import { defineConfig } from 'vite';
import { qwikVite, qwikCity } from '@builder.io/qwik-city/vite';

export default defineConfig({
  plugins: [qwikCity(), qwikVite()],
});
