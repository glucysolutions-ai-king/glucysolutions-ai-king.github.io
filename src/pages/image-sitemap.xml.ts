import type { APIRoute } from 'astro';
import { galleryImages } from '../data/gallery';

// A dedicated Google Image Sitemap extension, separate from the page
// sitemap @astrojs/sitemap generates. This gives Google Images explicit,
// well-formed signal for every gallery photo (name + caption), which the
// default page sitemap doesn't carry. Low-risk, additive, no effect on
// existing routes.
const SITE = 'https://www.garylucy.co.uk';

export const GET: APIRoute = () => {
  const urlEntries = [
    {
      loc: `${SITE}/gallery`,
      images: galleryImages.map((img) => ({
        loc: `${SITE}/gallery/${img.file}`,
        title: img.alt,
        caption: img.caption ?? img.alt,
      })),
    },
  ];

  const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries
  .map(
    (entry) => `  <url>
    <loc>${esc(entry.loc)}</loc>
${entry.images
  .map(
    (img) => `    <image:image>
      <image:loc>${esc(img.loc)}</image:loc>
      <image:title>${esc(img.title)}</image:title>
      <image:caption>${esc(img.caption)}</image:caption>
    </image:image>`
  )
  .join('\n')}
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
