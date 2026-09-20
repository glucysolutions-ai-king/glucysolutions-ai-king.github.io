#!/usr/bin/env node
/**
 * Image intake pipeline.
 *
 * Drop raw casting photos into /images-intake/ and run:
 *   node scripts/grade-images.mjs
 *
 * For each new file it:
 *   1. Grades it to the locked site palette (a duotone/black-and-white pass
 *      toward the accent colour, matching the hero and card treatment).
 *   2. Writes responsive sizes (480/960/1600w) into /public/gallery/.
 *   3. Generates a slug-based filename and a plain-language alt text prompt.
 *   4. Appends an entry to src/data/gallery.ts.
 *
 * Requires "sharp" (npm install --save-dev sharp) — not bundled by default
 * to keep the base install lean.
 */
import { readdirSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, extname, basename } from 'node:path';

const INTAKE_DIR = 'images-intake';
const OUT_DIR = 'public/gallery';
const DATA_FILE = 'src/data/gallery.ts';

// Accent colour must match --accent in src/styles/global.css.
const ACCENT_HEX = '#c9a24b';

async function main() {
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch {
    console.error('Missing dependency: run `npm install --save-dev sharp` first.');
    process.exit(1);
  }

  if (!existsSync(INTAKE_DIR)) {
    console.log(`No ${INTAKE_DIR}/ folder yet — nothing to process.`);
    return;
  }
  mkdirSync(OUT_DIR, { recursive: true });

  const files = readdirSync(INTAKE_DIR).filter((f) => /\.(jpe?g|png|webp|tiff?)$/i.test(f));
  if (files.length === 0) {
    console.log('No new images in images-intake/.');
    return;
  }

  const dataSrc = readFileSync(DATA_FILE, 'utf8');
  const newEntries = [];

  for (const file of files) {
    const base = basename(file, extname(file))
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    const slug = `gary-lucy-${base}`;

    const input = sharp(join(INTAKE_DIR, file));

    // Grade: desaturate toward monochrome, then tint shadows/highlights with
    // the locked accent for a consistent duotone-noir look across uploads.
    const graded = input
      .modulate({ saturation: 0.15 })
      .tint(ACCENT_HEX)
      .linear(1.05, -10); // slight contrast lift

    for (const width of [480, 960, 1600]) {
      await graded
        .clone()
        .resize({ width, withoutEnlargement: true })
        .jpeg({ quality: 82 })
        .toFile(join(OUT_DIR, `${slug}-${width}.jpg`));
    }

    newEntries.push({ file: `${slug}-1600.jpg`, alt: `Gary Lucy — [DESCRIBE: pose/context]` });
    console.log(`Graded and resized: ${file} -> ${slug}-*.jpg`);
  }

  if (newEntries.length) {
    const insertion = newEntries
      .map((e) => `  { file: '${e.file}', alt: '${e.alt}' },`)
      .join('\n');
    const updated = dataSrc.replace(
      '// Empty until Gary uploads casting photography. The intake script appends here.',
      `// Empty until Gary uploads casting photography. The intake script appends here.\n${insertion}`
    );
    writeFileSync(DATA_FILE, updated);
    console.log(`\nAdded ${newEntries.length} entr${newEntries.length === 1 ? 'y' : 'ies'} to ${DATA_FILE}.`);
    console.log('Replace the [DESCRIBE: ...] alt text placeholders before publishing — real alt text is an SEO and accessibility requirement, not optional.');
  }
}

main();
