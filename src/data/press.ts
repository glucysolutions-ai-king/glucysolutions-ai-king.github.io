export interface PressItem {
  title: string;
  outlet: string;
  date: string | null; // ISO, or null if unconfirmed — [VERIFY] before publishing
  url: string;
  kind: 'Interview' | 'News' | 'Feature';
  verified: boolean;
}

// [INPUT NEEDED]: only add items that support the professional relaunch narrative.
// Per the content rules, this list deliberately excludes tabloid, relationship
// or litigation coverage even if it ranks — it exists to counterweight it, not add to it.
export const pressItems: PressItem[] = [
  {
    title: 'Gary Lucy talks The Full Monty and life on the road with the UK tour',
    outlet: 'This Morning (ITV)',
    date: null, // [VERIFY] exact publish date before going live
    url: 'https://www.itv.com/thismorning/articles/gary-lucy-the-full-monty',
    kind: 'Interview',
    verified: true,
  },
];
