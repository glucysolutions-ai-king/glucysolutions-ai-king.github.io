// Single source of truth is `site` in astro.config.mjs (exposed as import.meta.env.SITE).
export const SITE_URL = (import.meta.env.SITE ?? 'https://garylucy.co.uk').replace(/\/$/, '');

export const absoluteUrl = (path = '/') => new URL(path, `${SITE_URL}/`).toString();
