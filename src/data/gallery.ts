// Populated by the image intake pipeline (see /scripts/grade-images.md).
// `file` is the largest size; `srcset` lists the responsive widths generated
// alongside it, all pre-graded to the site's monochrome/contrast look.
export interface GalleryImage {
  file: string; // largest file, under /public/gallery/
  slug: string; // URL slug for the dedicated image page: /gallery/<slug>
  title: string; // short human title used in the page H1 and <title>
  credit?: string; // photographer / copyright credit — only rendered when confirmed
  srcset?: string; // e.g. "/gallery/name-480.jpg 480w, /gallery/name-960.jpg 960w"
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  {
    file: 'gary-lucy-actor-headshot-dark-1200.jpg',
    slug: 'headshot',
    title: 'Actor headshot',
    srcset: '/gallery/gary-lucy-actor-headshot-dark-480.jpg 480w, /gallery/gary-lucy-actor-headshot-dark-960.jpg 960w, /gallery/gary-lucy-actor-headshot-dark-1200.jpg 1200w',
    alt: 'Gary Lucy, British actor, headshot against a dark background',
    width: 1170,
    height: 1322,
    credit: 'Jenny Scott Photography',
  },
  {
    file: 'gary-lucy-actor-headshot-checked-shirt-1200.jpg',
    slug: 'headshot-checked-shirt',
    title: 'Headshot in a checked shirt',
    srcset: '/gallery/gary-lucy-actor-headshot-checked-shirt-480.jpg 480w, /gallery/gary-lucy-actor-headshot-checked-shirt-960.jpg 960w, /gallery/gary-lucy-actor-headshot-checked-shirt-1200.jpg 1200w',
    alt: 'Gary Lucy, British actor, headshot in a blue checked shirt',
    width: 1170,
    height: 1328,
    credit: 'Jenny Scott Photography',
  },
  {
    file: 'gary-lucy-actor-portrait-white-shirt-1200.jpg',
    slug: 'portrait-white-shirt',
    title: 'Portrait in a white shirt',
    srcset: '/gallery/gary-lucy-actor-portrait-white-shirt-480.jpg 480w, /gallery/gary-lucy-actor-portrait-white-shirt-960.jpg 960w, /gallery/gary-lucy-actor-portrait-white-shirt-1200.jpg 1200w',
    alt: 'Gary Lucy, British actor, studio portrait in a white shirt and blue tie',
    width: 1170,
    height: 1222,
  },
  {
    file: 'gary-lucy-actor-red-carpet-suit-1200.jpg',
    slug: 'red-carpet',
    title: 'On the red carpet',
    srcset: '/gallery/gary-lucy-actor-red-carpet-suit-480.jpg 480w, /gallery/gary-lucy-actor-red-carpet-suit-960.jpg 960w, /gallery/gary-lucy-actor-red-carpet-suit-1200.jpg 1200w',
    alt: 'Gary Lucy, British actor, smiling in a three-piece suit at a red carpet event',
    width: 1170,
    height: 1422,
    credit: 'Hollyoaks',
  },
  {
    file: 'gary-lucy-sitting-1600.jpg',
    slug: 'seated-aircraft-wreckage-portrait',
    title: 'Seated on aircraft wreckage',
    srcset: '/gallery/gary-lucy-sitting-480.jpg 480w, /gallery/gary-lucy-sitting-960.jpg 960w, /gallery/gary-lucy-sitting-1600.jpg 1600w',
    alt: 'Gary Lucy, black and white editorial portrait, seated on aircraft wreckage',
    width: 1200,
    height: 1377,
    credit: 'Dan Collins',
  },
  {
    file: 'gary-lucy-jacket-1600.jpg',
    slug: 'leather-jacket-portrait',
    title: 'Leather jacket portrait',
    srcset: '/gallery/gary-lucy-jacket-480.jpg 480w, /gallery/gary-lucy-jacket-960.jpg 960w, /gallery/gary-lucy-jacket-1600.jpg 1600w',
    alt: 'Gary Lucy, black and white editorial portrait, leather jacket',
    width: 1200,
    height: 1802,
    credit: 'Dan Collins',
  },
  {
    file: 'gary-lucy-wing-1600.jpg',
    slug: 'aircraft-wing-portrait',
    title: 'Seated on an aircraft wing',
    srcset: '/gallery/gary-lucy-wing-960.jpg 960w, /gallery/gary-lucy-wing-1600.jpg 1600w',
    alt: 'Gary Lucy, editorial portrait, seated on aircraft wing',
    width: 1200,
    height: 800,
    credit: 'Dan Collins',
  },
  {
    file: 'gary-lucy-fuselage-1600.jpg',
    slug: 'aircraft-fuselage-portrait',
    title: 'Aircraft fuselage backdrop',
    srcset: '/gallery/gary-lucy-fuselage-960.jpg 960w, /gallery/gary-lucy-fuselage-1600.jpg 1600w',
    alt: 'Gary Lucy, editorial portrait, aircraft fuselage backdrop',
    width: 1200,
    height: 800,
    credit: 'Dan Collins',
  },
  {
    file: 'gary-lucy-actor-standing-editorial.jpg',
    slug: 'standing-editorial-portrait',
    title: 'Full-length standing portrait',
    alt: 'Gary Lucy, full-length editorial portrait, standing',
    width: 1400,
    height: 2100,
    credit: 'Dan Collins',
  },
  {
    file: 'gary-lucy-actor-walking-editorial.jpg',
    slug: 'walking-editorial-portrait',
    title: 'Walking toward camera',
    alt: 'Gary Lucy, editorial portrait, walking toward camera',
    width: 1400,
    height: 2101,
    credit: 'Dan Collins',
  },
  {
    file: 'gary-lucy-actor-seated-editorial.jpg',
    slug: 'seated-editorial-portrait',
    title: 'Seated editorial portrait',
    alt: 'Gary Lucy, editorial portrait, seated',
    width: 1400,
    height: 1605,
    credit: 'Dan Collins',
  },
  {
    file: 'gary-lucy-actor-studio-portrait.jpg',
    slug: 'studio-portrait',
    title: 'Studio portrait',
    alt: 'Gary Lucy, studio portrait',
    width: 1400,
    height: 2100,
    credit: 'Dan Collins',
  },
];

export const imageUrl = (img: GalleryImage) => `/gallery/${img.file}`;
export const imagePagePath = (img: GalleryImage) => `/gallery/${img.slug}`;
