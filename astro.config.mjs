import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kellogg.brengel.com',
  integrations: [tailwind(), sitemap()],
  build: {
    // Inline small assets for fewer requests
    inlineStylesheets: 'auto'
  }
});
