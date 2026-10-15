import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GitHub Pages serves the apex domain and redirects www to it. Search
  // engines must see the same host in redirects, canonicals and sitemaps.
  site: 'https://garylucy.co.uk',
  // GitHub Pages serves directory routes with a trailing slash. Keep the
  // generated canonicals and sitemap URLs identical to the final live URL.
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Exclude the legacy redirect stub: it exists only so the old
      // /about-rs-preview URL (a since-removed design-preview page) resolves
      // to /about instead of 404ing, and must never appear as its own
      // sitemap/indexable entry alongside the page it redirects to.
      filter: (page) => !page.replace(/\/$/, '').endsWith('/about-rs-preview'),
      lastmod: new Date('2026-10-15'),
    }),
  ],
  build: {
    format: 'directory',
  },
});
