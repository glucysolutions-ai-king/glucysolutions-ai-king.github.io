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
    years: '2023–2024',
    venue: 'UK Tour',
    summary:
      'Lucy led the UK touring stage production of The Full Monty as Gaz, his first major theatre role, alongside Andrew Dunn, Louis Emerick, Rupert Hill, Martin Miller and Bobby Schofield.',
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
    'Gary Lucy is a British actor with nearly three decades of screen and stage credits, known for major returning roles in Hollyoaks, Footballers’ Wives, The Bill and EastEnders, and currently appearing in Channel 5’s The Good Ship Murder.',
  sameAs: [
    'https://en.wikipedia.org/wiki/Gary_Lucy',
    'https://www.imdb.com/name/nm0524804/',
    'https://tv.apple.com/us/person/gary-lucy/umc.cpc.131woa7w1p6qwwphkf2oowrul',
    // [VERIFY] confirm current Instagram / Facebook handles before publishing —
    // existing public results reportedly show outdated representation details.
  ],
  verifiedNote:
    'Award status: "award-winning" is used site-wide on the strength of the confirmed 2000 British Soap Award for Best Newcomer.',
};
