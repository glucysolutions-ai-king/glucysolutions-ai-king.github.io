// "Coverlines" — the magazine-style headline links running down the sides of the
// homepage hero, styled after classic Rolling Stone / editorial cover layouts.
// TEXT BELOW IS PLACEHOLDER COPY, sized to roughly match real coverline length —
// swap for final lines once the tone is signed off. None of it makes a factual
// claim (award counts, dates etc.) precisely so it's safe to ship as holding text.

export interface Coverline {
  side: 'left' | 'right';
  eyebrow: string;
  headline: string;
  dek: string; // the small supporting line under a coverline headline
  href: string;
}

// Order within each side matters: MagazineHero.astro renders cl-left/cl-right
// in array order, and .cl:first-child gets a visibly bigger headline + the
// topmost position (.cl:last-child gets a smaller one) — so the first entry
// on each side is the most prominent, by design, not just by position.
export const coverlines: Coverline[] = [
  {
    side: 'left',
    eyebrow: 'The Next Chapter',
    headline: 'SOS Global AI',
    dek: "Gary's window into the future of entertainment",
    href: '/news/sos-global-ai',
  },
  {
    side: 'left',
    eyebrow: 'On Screen',
    headline: 'Fifteen Credits',
    dek: 'Soap villain to primetime detective',
    href: '/screen',
  },
  {
    side: 'left',
    eyebrow: 'Live',
    headline: '8 Shows/Wk',
    dek: "The UK's number one touring show, night after night",
    href: '/stage',
  },
  {
    side: 'right',
    eyebrow: 'The Story',
    headline: 'No Signs Of Slowing',
    dek: 'Three decades in front of the camera',
    href: '/about',
  },
  {
    side: 'right',
    eyebrow: 'Unseen',
    headline: 'The Archive',
    dek: 'Frames from three decades of shoots',
    href: '/gallery',
  },
  {
    side: 'right',
    eyebrow: 'Watch',
    headline: 'The Reel',
    dek: 'Every era, cut to the essentials',
    href: '/showreel',
  },
];
