import { galleryImages } from '../data/gallery';
import { SITE_URL, absoluteUrl } from '../data/site';

const escapeXml = (value: string) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

const image = (path: string, title: string, caption = title) => `
    <image:image>
      <image:loc>${escapeXml(absoluteUrl(path))}</image:loc>
      <image:title>${escapeXml(title)}</image:title>
      <image:caption>${escapeXml(caption)}</image:caption>
    </image:image>`;

export function GET() {
  const galleryEntries = galleryImages
    .map((item) => image(`/gallery/${item.file}`, item.alt, item.caption ?? item.alt))
    .join('');

  const page = (path: string, images: string[]) => `
  <url>
    <loc>${path === '/' ? `${SITE_URL}/` : absoluteUrl(path)}</loc>${images.join('')}
  </url>`;

  const full = '/hero/gary-lucy-actor-full-length-black-white.jpg';
  const close = '/hero/gary-lucy-actor-close-up-black-white.jpg';
  const walking = '/gallery/gary-lucy-actor-walking-editorial.jpg';
  const studio = '/gallery/gary-lucy-actor-studio-portrait.jpg';

  const pages = [
    page('/', [image(full, 'Gary Lucy, British screen and stage actor'), image(close, 'Gary Lucy, black and white close-up portrait')]),
    page('/about', [image(full, 'Gary Lucy, British actor, standing portrait'), image(close, 'Gary Lucy, close portrait')]),
    page('/screen', [image(walking, 'Gary Lucy, British actor, on location')]),
    page('/stage', [image(studio, 'Gary Lucy, studio portrait for his stage work')]),
    page('/contact', [image(studio, 'Gary Lucy, British actor, studio portrait')]),
    page('/news/current-screen-work-2026', [image(walking, 'Gary Lucy, British actor, walking editorial portrait')]),
    page('/gallery', galleryImages.map((item) => image(`/gallery/${item.file}`, item.alt, item.caption ?? item.alt))),
  ].join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${pages}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
