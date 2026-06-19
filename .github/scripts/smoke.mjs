// Headless smoke test: load every asset kind, assert it renders and throws no JS errors.
// Run by CI; ignores CDN/network/font noise and only fails on real script errors.
import { chromium } from 'playwright';
import { pathToFileURL } from 'url';
import path from 'path';

const KINDS = ['carousel', 'post', 'banner', 'onepager', 'proposal', 'imported'];
const base = pathToFileURL(path.resolve('studio/index.html')).href;

// benign messages that are environmental (not our code)
const IGNORE = /favicon|Failed to load resource|net::|ERR_|Access to (font|CSS|fetch)|CORS|preload|MIME type|was preloaded/i;

const browser = await chromium.launch({ args: ['--no-sandbox'] });
const failures = [];

for (const kind of KINDS) {
  const page = await browser.newPage();
  const errs = [];
  page.on('pageerror', e => errs.push('pageerror: ' + (e && e.message || e)));
  page.on('console', m => {
    if (m.type() !== 'error') return;
    const t = m.text();
    if (IGNORE.test(t)) return;
    errs.push('console.error: ' + t);
  });
  try {
    await page.goto(base + '?kind=' + kind, { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(2500);
    const frames = await page.locator('.nt-frame').count();
    if (frames === 0) errs.push('no .nt-frame rendered');
    if (errs.length) failures.push({ kind, errs });
    else console.log(`ok: ${kind} (frames=${frames})`);
  } catch (e) {
    failures.push({ kind, errs: ['threw: ' + (e && e.message || e)] });
  }
  await page.close();
}

await browser.close();

if (failures.length) {
  console.error('SMOKE FAILURES:\n' + JSON.stringify(failures, null, 2));
  process.exit(1);
}
console.log(`\nAll ${KINDS.length} asset kinds loaded and rendered with no script errors.`);
