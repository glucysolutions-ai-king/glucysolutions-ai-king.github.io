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

export const coverlines: Coverline[] = [
  {
    side: 'left',
    eyebrow: 'The Story',
    headline: 'The Long Run',
    dek: 'Three decades in front of the camera',
    href: '/about',
  },
  {
    side: 'left',
    eyebrow: 'On Screen',
    headline: 'Four Roles',
    dek: 'The credits that built a household name',
    href: '/screen',
  },
  {
    side: 'left',
    eyebrow: 'Live',
    headline: '8 Shows/Wk',
    dek: 'On the road with The Full Monty',
    href: '/stage',
  },
  {
    side: 'right',
    eyebrow: 'Watch',
    headline: 'The Reel',
    dek: 'Every era, cut to the essentials',
    href: '/showreel',
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
    eyebrow: 'Print',
    headline: 'Coverage',
    dek: 'Interviews worth your time',
    href: '/press',
  },
];
