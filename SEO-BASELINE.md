# SEO baseline and 30-day tracking plan

## Baseline (to snapshot before launch)

Run these once the site is live, before any further changes, so movement is measurable:

1. **Search Console**: submit sitemap, note initial index coverage (0 pages indexed at day 0 is expected).
2. **SERP snapshot** for the core query set below — record current rank (or "not ranking") and which URL currently holds each position. If you connect Ahrefs or Semrush, this is one `serp-overview` / `rank-tracker-overview` pull per keyword; otherwise a manual incognito search works for a one-time baseline.

## Core keyword set to track

| Keyword | Intent | Current top result (fill in at baseline) |
|---|---|---|
| gary lucy | Brand | |
| gary lucy actor | Brand + role | |
| gary lucy hollyoaks | Role | |
| gary lucy footballers wives | Role | |
| gary lucy eastenders | Role | |
| gary lucy the good ship murder | Current work | |
| gary lucy the full monty | Theatre | |
| gary lucy agent | Representation (currently confused per third-party sources) |

## Technical SEO already built in

- Person + ProfilePage + TVSeries + BreadcrumbList schema on every relevant page
- Unique title/meta per page, canonical tags, OG/Twitter cards
- `sitemap-index.xml`, `robots.txt`, `llms.txt`
- Static HTML content (all copy server-rendered; the 3D layer is decorative only)
- Fast static hosting on Cloudflare's CDN (no server round-trip)

## 30-day plan

- **Week 1**: launch, submit sitemap, verify Bing, request indexing for homepage + top 3 role pages in Search Console.
- **Week 2**: check indexing status; fix any crawl errors; add real photography and showreel once supplied.
- **Week 3**: pursue 1–2 backlinks from legitimate sources (a corrected IMDb/Spotlight bio link, a press mention linking to the new site) — backlinks from authoritative pages move new-domain rankings faster than on-page tweaks alone.
- **Week 4**: re-pull the keyword set above, compare against baseline, report movement.

## What actually moves these rankings

For a brand-new domain, the constraint isn't on-page optimisation (already handled) — it's authority. The single highest-leverage action is getting the existing high-authority profiles (IMDb, Wikipedia, Apple TV, any verified socials) to link to garylucy.co.uk as the canonical "official site." That alone typically outweighs weeks of content work on a new domain.
