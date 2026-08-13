// name=svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      // fallback for SPA-style client-side routing:
      fallback: 'index.html'
    }),
    // When hosting at https://<user>.github.io/qr-code-generator set base accordingly.
    paths: {
      base: dev ? '' : '/qr-code-generator'
    }
  }
};

export default config;
