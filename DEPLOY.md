# Deploying garylucy.co.uk — free, no Fasthosts required

## 1. Push the code to GitHub

```bash
cd garylucy-site
git init
git add .
git commit -m "Initial site"
gh repo create garylucy-site --private --source=. --push
# or: create a repo on github.com and `git remote add origin <url>` then `git push -u origin main`
```

## 2. Deploy to Cloudflare Pages (free)

1. Go to dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Pick the `garylucy-site` repo.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. You'll get a `*.pages.dev` URL immediately — check it renders before touching DNS.

## 3. Point garylucy.co.uk at it (GoDaddy DNS)

**Change the GoDaddy password before doing anything else** — it was typed into this chat in plain text, which means it must be treated as already compromised.

In Cloudflare Pages → your project → **Custom domains** → **Set up a custom domain** → enter `garylucy.co.uk`, then repeat for `www.garylucy.co.uk`. Cloudflare will show you the exact records to add. In practice, in GoDaddy's DNS management for garylucy.co.uk, add:

| Type | Name | Value |
|---|---|---|
| CNAME | `www` | `garylucy-site.pages.dev` |
| A | `@` (root) | `192.0.2.1` (Cloudflare will give the current anycast IP — use theirs, not this placeholder) |
| CNAME (or ALIAS/ANAME if GoDaddy offers it for root) | `@` | `garylucy-site.pages.dev` (preferred over the A record if GoDaddy supports root CNAME/ANAME) |

Remove any existing conflicting A/CNAME records for `@` and `www` first — GoDaddy won't let two records own the same name.

Cloudflare Pages issues a free SSL certificate automatically once DNS resolves (usually within minutes, sometimes up to 24h for propagation). Set **www → root redirect** (or root → www, your call) in Cloudflare Pages' custom domain settings so there's one canonical URL — the site's `astro.config.mjs` and SEO tags assume `https://www.garylucy.co.uk/` is canonical, so redirect the bare domain to `www`, or tell me to flip it the other way.

## 4. Verify with Search Console and Bing

- Google Search Console (search.google.com/search-console): add property `https://www.garylucy.co.uk`, verify via the DNS TXT record method (add one more GoDaddy record), submit `https://www.garylucy.co.uk/sitemap-index.xml`.
- Bing Webmaster Tools: same process, or import directly from Search Console once that's verified.

## 5. Contact form

The contact page posts to Formspree (free tier, 50 submissions/month). Sign up at formspree.io, create a form, and replace `YOUR_FORM_ID` in `src/pages/contact.astro` with the real ID. No backend or paid hosting needed.

## 6. Adding photos

Drop raw files into `images-intake/`, run `npm install --save-dev sharp` once, then `node scripts/grade-images.mjs`. It grades every image to the locked palette, generates responsive sizes, and adds them to the gallery with a placeholder alt-text prompt for you to fill in before it goes live.

## 7. Ongoing changes

Any edit + `git push` to the connected branch triggers an automatic Cloudflare Pages rebuild and redeploy — no manual redeploy step, ever, and no cost regardless of traffic volume.

---

## Palette decision needed

Three options are built into `src/styles/global.css` and switchable by changing `data-theme` on the `<html>` tag in `src/layouts/Layout.astro`:

- **`amber`** (locked/default) — black-and-white base, warm gold accent. Closest to the Rolling Stone/James Dean brief.
- **`crimson`** — black-and-white base, deep red accent. More tabloid/noir-thriller.
- **`denim`** — near-black base, muted steel-blue accent. Cooler, more restrained.

Say the word if you want a different one locked in — it's a one-line change.

## What's still open (needs your input, not a build decision)

- Showreel: send the YouTube/Vimeo link or the raw video file.
- Photography: drop files into `images-intake/` per step 6.
- Contact routing: Formspree ID, or a confirmed public email once representation is settled.
- Any further verified press coverage to add to `/press`.
