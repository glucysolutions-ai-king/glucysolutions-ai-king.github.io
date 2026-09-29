import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.garylucy.co.uk',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // Exclude the legacy redirect stub: it exists only so the old
      // /about-rs-preview URL (a since-removed design-preview page) resolves
      // to /about instead of 404ing, and must never appear as its own
      // sitemap/indexable entry alongside the page it redirects to.
      filter: (page) => !page.endsWith('/about-rs-preview'),
    }),
  ],
  build: {
    format: 'directory',
  },
});
