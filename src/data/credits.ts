// Content inventory for garylucy.co.uk
// Every entry here is sourced from IMDb, Wikipedia, BBC/ITV/Channel 5 press materials,
// or the British Soap Awards record. Anything not independently confirmed is marked
// [VERIFY] in the `verified` field and must be checked before being treated as final —
// none of it is published as fact until confirmed.
// Deliberately excluded per content rules: marriage/family details, representation
// (agent/PR) contact info, 2:22 litigation, and any tabloid material.

export interface Role {
  slug: string;
  character: string;
  show: string;
  years: string;
  network: string;
  type: 'Soap' | 'Drama' | 'Crime Drama' | 'Theatre' | 'Entertainment';
  summary: string;
  verified: boolean;
  seoTitle: string;
  seoDescription: string;
}

export const roles: Role[] = [
  {
    slug: 'hollyoaks',
    character: 'Luke Morgan',
    show: 'Hollyoaks',
    years: '1999–2002, 2017–2023',
    network: 'Channel 4',
    type: 'Soap',
    summary:
      'Gary Lucy originated the role of Luke Morgan in Channel 4’s Hollyoaks in 1999, returning for further runs in 2002 and from 2017 to 2023. The character’s storyline earned Lucy the Best Newcomer award at the 2000 British Soap Awards.',
    verified: true,
    seoTitle: 'Gary Lucy in Hollyoaks — Luke Morgan',
    seoDescription:
      'Gary Lucy played Luke Morgan in Hollyoaks (1999–2002, 2017–2023), winning Best Newcomer at the 2000 British Soap Awards.',
  },
  {
    slug: 'footballers-wives',
    character: 'Kyle Pascoe',
    show: "Footballers' Wives",
    years: '2002–2004',
    network: 'ITV',
    type: 'Drama',
    summary:
      'Lucy played footballer Kyle Pascoe in ITV’s primetime drama Footballers’ Wives, one of the defining British drama series of the early 2000s.',
    verified: true,
    seoTitle: "Gary Lucy in Footballers' Wives — Kyle Pascoe",
    seoDescription:
      "Gary Lucy played Kyle Pascoe in ITV's Footballers' Wives (2002–2004).",
  },
  {
    slug: 'the-bill',
    character: 'DC Will Fletcher',
    show: 'The Bill',
    years: '2005–2010',
    network: 'ITV',
    type: 'Crime Drama',
    summary:
      'Lucy spent five years on ITV’s long-running police procedural The Bill, playing DC Will Fletcher.',
    verified: true,
    seoTitle: 'Gary Lucy in The Bill — Will Fletcher',
    seoDescription: 'Gary Lucy played DC Will Fletcher in ITV’s The Bill (2005–2010).',
  },
  {
    slug: 'eastenders',
    character: 'Danny Pennant',
    show: 'EastEnders',
    years: '2012–2014',
    network: 'BBC One',
    type: 'Soap',
    summary:
      'Lucy joined BBC One’s EastEnders as Danny Pennant, a city banker whose storylines ran through 2012 to 2014.',
    verified: true,
    seoTitle: 'Gary Lucy in EastEnders — Danny Pennant',
    seoDescription: 'Gary Lucy played Danny Pennant in BBC One’s EastEnders (2012–2014).',
  },
  {
    slug: 'the-good-ship-murder',
    character: 'Jason Agnew',
    show: 'The Good Ship Murder',
    years: '2026',
    network: 'Channel 5',
    type: 'Crime Drama',
    summary:
      'Lucy joined the cast of Channel 5’s hit cruise-ship murder-mystery series The Good Ship Murder as Jason Agnew in its third series, filmed on location in the Mediterranean.',
    verified: true,
    seoTitle: 'Gary Lucy in The Good Ship Murder — Jason Agnew',
    seoDescription:
      'Gary Lucy plays Jason Agnew in Channel 5’s The Good Ship Murder, series 3 (2026).',
  },
  {
    slug: 'the-chelsea-detective',
    character: 'Mike Curtis',
    show: 'The Chelsea Detective',
    years: '2026',
    network: 'Acorn TV',
    type: 'Crime Drama',
    summary:
      'Lucy joined the fourth series of Acorn TV’s The Chelsea Detective as Mike Curtis — his most recent screen role, and a significant step up in the scale of production he is working on. The series streams on Acorn TV, including via the Acorn TV Amazon Prime Video Channel, and is distributed across multiple territories internationally. It is created and executive produced by Peter Fincham — Controller of BBC One from 2005 to 2007, then Director of Television at ITV from 2008 to 2016 — through his production company Expectation.',
    verified: true,
    seoTitle: 'Gary Lucy in The Chelsea Detective — Mike Curtis',
    seoDescription:
      'Gary Lucy plays Mike Curtis in The Chelsea Detective, series 4 (2026), streaming on Acorn TV and the Acorn TV Amazon Prime Video Channel.',
  },
];

export interface StageCredit {
  title: string;
  role: string;
  years: string;
  venue: string;
  summary: string;
  verified: boolean;
}

export const stageCredits: StageCredit[] = [
  {
    title: 'The Full Monty',
    role: 'Gaz',
    years: 'National Tour',
    venue: 'UK Tour',
    summary:
      'Lucy headlined the award-winning, number one UK touring production of The Full Monty as Gaz, a production that ran across the country over several years, alongside Andrew Dunn, Louis Emerick, Rupert Hill, Martin Miller and Bobby Schofield.',
    verified: true,
  },
];

export interface OtherCredit {
  title: string;
  role: string;
  years: string;
  network: string;
  verified: boolean;
}

export const otherCredits: OtherCredit[] = [
  {
    title: 'Dancing on Ice',
    role: 'Contestant (runner-up, 2010, with professional partner Maria Fillipov)',
    years: '2010, 2014',
    network: 'ITV',
    verified: true,
  },
  {
    title: 'Grange Hill',
    role: 'Various',
    years: 'Early career',
    network: 'BBC',
    verified: true,
  },
  {
    title: 'Dream Team',
    role: 'Series regular',
    years: '1997–1998',
    network: 'Sky One',
    verified: true,
  },
  {
    title: "She's Gone",
    role: 'Michael Sands',
    years: '2004',
    network: 'Film',
    verified: true,
  },
  {
    title: 'Whatever It Takes',
    role: 'Matthew Cassady',
    years: '2009',
    network: 'ITV',
    verified: true,
  },
  {
    title: 'Missing',
    role: 'Ben Lloyd',
    years: '2010',
    network: 'ITV',
    verified: true,
  },
  {
    title: 'Casualty',
    role: 'Valentine Kildare',
    years: '2014',
    network: 'BBC One',
    verified: true,
  },
  {
    title: 'The Dumping Ground',
    role: 'Billy McLaine',
    years: '2018',
    network: 'CBBC',
    verified: true,
  },
];

// A single chronological, gap-free view of the whole career — merging `roles` and
// `otherCredits` (including both Hollyoaks stints as separate entries) so that
// every credit, not just the six with their own detail pages, appears in the same
// photo-card layout, in the order it actually happened. `slug` is only set where
// a full detail page exists (src/pages/screen/[slug].astro); both Hollyoaks
// entries point at the same page, since it's one role told in two runs.
export interface TimelineEntry {
  slug?: string;
  character: string;
  show: string;
  years: string;
  network: string;
  image: string;
  verified: boolean;
}

export const careerTimeline: TimelineEntry[] = [
  { character: 'Various', show: 'Grange Hill', years: '1997', network: 'BBC', image: '/gallery/gary-lucy-sitting-1600.jpg', verified: true },
  { character: 'Series regular', show: 'Dream Team', years: '1997–1998', network: 'Sky One', image: '/hero/gl-standing-bw-web.jpg', verified: true },
  { slug: 'hollyoaks', character: 'Luke Morgan', show: 'Hollyoaks', years: '1999–2002', network: 'Channel 4', image: '/portraits/gl-standing2-web.jpg', verified: true },
  { slug: 'footballers-wives', character: 'Kyle Pascoe', show: "Footballers' Wives", years: '2002–2004', network: 'ITV', image: '/gallery/gary-lucy-jacket-1600.jpg', verified: true },
  { character: 'Michael Sands', show: "She's Gone", years: '2004', network: 'Film', image: '/gallery/gary-lucy-fuselage-1600.jpg', verified: true },
  { slug: 'the-bill', character: 'DC Will Fletcher', show: 'The Bill', years: '2005–2010', network: 'ITV', image: '/gallery/gary-lucy-wing-1600.jpg', verified: true },
  { character: 'Matthew Cassady', show: 'Whatever It Takes', years: '2009', network: 'ITV', image: '/hero/gl-wing-color.jpg', verified: true },
  { character: 'Ben Lloyd', show: 'Missing', years: '2010', network: 'ITV', image: '/gallery/gl-walking2-web.jpg', verified: true },
  { character: 'Contestant (runner-up, with professional partner Maria Fillipov)', show: 'Dancing on Ice', years: '2010, 2014', network: 'ITV', image: '/hero/gl-closeup-bw-web.jpg', verified: true },
  { slug: 'eastenders', character: 'Danny Pennant', show: 'EastEnders', years: '2012–2014', network: 'BBC One', image: '/portraits/gl-seated2-web.jpg', verified: true },
  { character: 'Valentine Kildare', show: 'Casualty', years: '2014', network: 'BBC One', image: '/gallery/gl-studio2-web.jpg', verified: true },
  { slug: 'hollyoaks', character: 'Luke Morgan (returns)', show: 'Hollyoaks', years: '2017–2023', network: 'Channel 4', image: '/portraits/gl-standing2-web.jpg', verified: true },
  { character: 'Billy McLaine', show: 'The Dumping Ground', years: '2018', network: 'CBBC', image: '/hero/gl-fuselage-color.jpg', verified: true },
  { slug: 'the-good-ship-murder', character: 'Jason Agnew', show: 'The Good Ship Murder', years: '2026', network: 'Channel 5', image: '/portraits/gl-walking2-web.jpg', verified: true },
  { slug: 'the-chelsea-detective', character: 'Mike Curtis', show: 'The Chelsea Detective', years: '2026', network: 'Acorn TV', image: '/hero/gl-sitting-bw-web.jpg', verified: true },
];

export interface Award {
  name: string;
  category: string;
  year: string;
  result: 'Won' | 'Nominated';
  detail: string;
  verified: boolean;
}

export const awards: Award[] = [
  {
    name: 'British Soap Awards',
    category: 'Best Newcomer',
    year: '2000',
    result: 'Won',
    detail: 'For the Luke Morgan storyline in Hollyoaks.',
    verified: true,
  },
  {
    name: 'British Soap Awards',
    category: 'Best Dramatic Performance',
    year: '2000',
    result: 'Nominated',
    detail: 'For Luke Morgan in Hollyoaks.',
    verified: true,
  },
  {
    name: 'British Soap Awards',
    category: 'Villain of the Year',
    year: '2013',
    result: 'Nominated',
    detail: 'For Danny Pennant in EastEnders.',
    verified: true,
  },
];

// Site-wide facts used in schema.org / meta tags. Anything marked verified:false
// must be confirmed with Gary before it appears on the live site.
export const profile = {
  name: 'Gary Lucy',
  fullName: 'Gary Edward Lucy',
  born: '1981-11-27',
  birthPlace: 'Chigwell, Essex, England',
  yearsActive: '1996–present',
  headline: 'British screen and stage actor',
  bioShort:
    'Gary Lucy is a British actor with nearly three decades of screen and stage credits, known for major returning roles in Hollyoaks, Footballers’ Wives, The Bill and EastEnders. His most recent screen work is Acorn TV’s The Chelsea Detective, alongside Channel 5’s The Good Ship Murder.',
  sameAs: [
    'https://en.wikipedia.org/wiki/Gary_Lucy',
    'https://www.imdb.com/name/nm0524804/',
    'https://tv.apple.com/us/person/gary-lucy/umc.cpc.131woa7w1p6qwwphkf2oowrul',
    'https://www.instagram.com/gary.lucy/',
    'https://sosglobalai.com',
    // Facebook handle still [VERIFY] — confirm current handle before publishing.
  ],
  verifiedNote:
    'Award status: "award-winning" is used site-wide on the strength of the confirmed 2000 British Soap Award for Best Newcomer.',
};
