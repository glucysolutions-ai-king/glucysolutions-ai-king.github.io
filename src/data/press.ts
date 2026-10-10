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
    title: 'The Good Ship Murder Christmas special cast: Meet the characters',
    outlet: 'Radio Times',
    date: '2025-12-27', // [VERIFY] URL returned a bot block on fetch this session — plausible (correct domain pattern, matches the confirmed 27 Dec 2025 broadcast), not independently confirmed
    url: 'https://www.radiotimes.com/tv/drama/good-ship-murder-cast-channel-5/',
    kind: 'Feature',
    verified: false,
  },
  {
    title: 'The Good Ship Murder series 3 episode 1 guest cast includes EastEnders and Coronation Street stars',
    outlet: 'TV Guide UK',
    date: '2025-12-27',
    url: 'https://www.tvguide.co.uk/articles/the-good-ship-murder-series-3-episode-1-guest-cast/',
    kind: 'Feature',
    verified: true,
  },
  {
    title: "It's all aboard for sun, sea and sudden death with the new season of 'The Good Ship Murder'",
    outlet: 'SBS',
    date: '2026-08-11',
    url: 'https://www.sbs.com.au/whats-on/article/the-good-ship-murder-season-3-explainer/pnu6tyvcw',
    kind: 'Feature',
    verified: true,
  },
  {
    title: 'Gary Lucy talks The Full Monty and life on the road with the UK tour',
    outlet: 'This Morning (ITV)',
    date: null, // [VERIFY] exact publish date before going live
    url: 'https://www.itv.com/thismorning/articles/gary-lucy-the-full-monty',
    kind: 'Interview',
    verified: true,
  },
];
