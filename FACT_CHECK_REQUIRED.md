# Fact-Check Required — garylucy.co.uk

Generated during the SEO/content implementation pass. Nothing below has been
published as changed fact — the live site still shows only what was already
marked `verified: true` in `src/data/credits.ts`. This list is for Gary to
confirm or correct; it is not a list of things that were silently guessed.

## Resolved this session

1. **The Full Monty tour dates / "first stage role" framing.** Previously
   flagged: `credits.ts` stated 2023–2024 and framed it as Gary's first
   stage role, which a Wikipedia summary appeared to contradict (a possible
   2014 credit). **Resolved by Gary directly (24 Sep 2026):** the site no
   longer states specific years or claims it was his first stage role, nor
   claims "award-winning, number one" status (unverified superlative,
   removed). Copy across `credits.ts`, `stage.astro`, and `about.astro` now
   describes it simply as the UK touring production of The Full Monty,
   running across the country over several years.

## Resolved 10 October 2026 — Codex pass, independently re-verified

ChatGPT Codex proposed a round of fact and copy fixes to this site on a
separate branch. Each claim below was independently checked against a live
source before merging — Codex's own citations were not taken on trust.

1. **The Good Ship Murder — series 3 is 2025, not 2026.** Confirmed via
   IMDb (`pro.imdb.com/title/tt39219403`) and TV Guide UK: the episode
   "Christmas Special — Alicante" first broadcast on Channel 5 on
   **27 December 2025**. `years` corrected from 2026 to 2025 throughout
   `credits.ts` and the timeline.

2. **The Chelsea Detective — episode title added.** Series 4 opens with
   "Death on the Aether" (confirmed via tellyvisions.org's episode recap
   and pogdesign.co.uk's episode guide), now referenced in the summary
   copy. **Character name corrected to "Michael Curtis" on 15 October
   2026.** IMDb's current Gary Lucy filmography and the episode cast listing
   both use "Michael Curtis." An earlier recap used the shortened "Mike";
   the official site now follows the credited form shown on IMDb.

3. **Unsupported promotional copy removed.** The homepage, about page and
   screen pages no longer describe recent work as Gary's "biggest" or a
   "step up," call The Full Monty the "number one" UK tour, or claim it was
   "award-winning" — none of this was independently verifiable. The about
   page's invented first-person pull quote ("I've never chased the safe
   option...") has also been removed: it was never something Gary is on
   record as saying, and attributing an invented quote to him is a real
   liability, not just a tone issue.

4. **Press coverage added.** Two new items added to `press.ts` and
   independently confirmed live: TV Guide UK's Good Ship Murder series 3
   cast piece, and SBS's season 3 explainer. A third, from Radio Times, was
   added but left `verified: false` — the URL returned a bot block when
   checked this session, so its content couldn't be independently
   confirmed even though the URL pattern and date are plausible. Worth a
   human click-through before fully trusting it.

5. **Entity schema — SOS Global AI removed from Gary's `Person.sameAs`,
   and from the Organization's `sameAs` back-reference.** `sameAs` is meant
   for identity profiles of the *same* entity (a person's own social
   profiles, Wikipedia, IMDb), not a related-but-distinct organization —
   using it to link Gary to a company he founded was schema-non-standard
   and risked confusing entity resolution rather than helping it. The
   Person↔Organization relationship is still correctly carried by the
   Organization's `founder` property (pointing at Gary's `@id`) plus the
   actual in-content hyperlinks to sosglobalai.com, which is the
   Google-recommended way to establish this link.

6. **"Est. 1997" on the magazine-hero masthead**, was "Est. 1999." 1997 is
   Gary's actual first screen credit (Grange Hill) per the site's own
   career timeline; 1999 was when Hollyoaks started, not when his career
   began. Corrected.

7. **`SEO-BASELINE.md` said the site was hosted on "Cloudflare's CDN."**
   It isn't — garylucy.co.uk is served from GitHub Pages. Stale doc text
   fixed; no effect on the live site.

8. **Canonical URL format re-audited on 15 October 2026.** A live HTTP
   check showed that GitHub Pages redirects bare directory paths to
   slash-ending URLs. The site now generates matching slash-ending
   canonicals, breadcrumbs and sitemap entries instead of pointing crawlers
   at a URL that immediately redirects.

### Codex changes NOT merged

- **Coverline homepage priority.** Codex replaced the homepage's lead
  "SOS Global AI" coverline with a Chelsea Detective one, reasoning the
  actor site shouldn't lead with business news. That's a legitimate
  opinion, but it undoes a coverline placement Gary's own earlier
  instruction this session ("use the one site to the other... immediately,
  aggressively") was specifically aimed at — not a fact-check matter, so
  left as-is pending Gary's call. The other two left-side coverlines
  ("Fifteen Credits," "8 Shows/Wk") were still updated, since those were
  fragile/unverifiable numeric claims rather than a priority decision.

## Carried over from the existing data file (unchanged, still open)

4. **Social/representation `sameAs` links.** `credits.ts` notes that current
   public results for Instagram/Facebook handles may show outdated
   representation details. Not included in structured data until confirmed.

5. **Gallery image #1 photographer/shoot credit.** `gallery.ts` flags the
   "seated on aircraft wreckage" portrait as needing a confirmed shoot or
   photographer credit before that's asserted anywhere.

6. **Press item publish date.** The one entry in `press.ts` (This Morning /
   ITV, Full Monty interview) has no confirmed publish date. The page now
   simply omits the date rather than showing a placeholder — add the real
   date once known.

## Not flagged — already solid

Hollyoaks (1999–2002, 2017–2023, Best Newcomer 2000), Footballers' Wives
(2002–2004), The Bill (2005–2010), EastEnders (2012–2014, Villain of the
Year nomination 2013), and the core biographical facts (birth date, place,
years active) all check out against the data file's existing verification
and were not contradicted by anything found this session.
