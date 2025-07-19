import { defineConfig } from 'qwik';
import { vercelEdgeAdapter } from '@builder.io/qwik-city/adapters/vercel-edge/vite';

export default defineConfig({
  plugins: [vercelEdgeAdapter()],
});
