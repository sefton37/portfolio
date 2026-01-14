import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://kellogg.brengel.com',
  integrations: [tailwind()],
  build: {
    // Inline small assets for fewer requests
    inlineStylesheets: 'auto'
  }
});
