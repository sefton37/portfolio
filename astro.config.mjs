import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kellogg.brengel.com',
  integrations: [tailwind(), sitemap()],
  build: {
    // Serve stylesheets as external files so style-src 'self' is sufficient (no unsafe-inline)
    inlineStylesheets: 'never'
  }
});
