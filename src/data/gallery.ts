// Populated by the image intake pipeline (see /scripts/grade-images.md).
// `file` is the largest size; `srcset` lists the responsive widths generated
// alongside it, all pre-graded to the site's monochrome/contrast look.
export interface GalleryImage {
  file: string; // largest file, under /public/gallery/
  srcset?: string; // e.g. "/gallery/name-480.jpg 480w, /gallery/name-960.jpg 960w"
  alt: string;
  caption?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    file: 'gary-lucy-sitting-1600.jpg',
    srcset: '/gallery/gary-lucy-sitting-480.jpg 480w, /gallery/gary-lucy-sitting-960.jpg 960w, /gallery/gary-lucy-sitting-1600.jpg 1600w',
    alt: 'Gary Lucy, black and white editorial portrait, seated on aircraft wreckage', // [VERIFY] confirm shoot/photographer credit before publishing
  },
  {
    file: 'gary-lucy-jacket-1600.jpg',
    srcset: '/gallery/gary-lucy-jacket-480.jpg 480w, /gallery/gary-lucy-jacket-960.jpg 960w, /gallery/gary-lucy-jacket-1600.jpg 1600w',
    alt: 'Gary Lucy, black and white editorial portrait, leather jacket',
  },
  {
    file: 'gary-lucy-wing-1600.jpg',
    srcset: '/gallery/gary-lucy-wing-960.jpg 960w, /gallery/gary-lucy-wing-1600.jpg 1600w',
    alt: 'Gary Lucy, editorial portrait, seated on aircraft wing',
  },
  {
    file: 'gary-lucy-fuselage-1600.jpg',
    srcset: '/gallery/gary-lucy-fuselage-960.jpg 960w, /gallery/gary-lucy-fuselage-1600.jpg 1600w',
    alt: 'Gary Lucy, editorial portrait, aircraft fuselage backdrop',
  },
];
