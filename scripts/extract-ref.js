// One-off dev utility: pulls <style>/<body>/<script> blocks out of the
// reference mockup HTML files so they can be ported into the Next.js app
// without hand-retyping thousands of lines of CSS.
const fs = require('fs');
const path = require('path');

const SRC_DIR = 'C:\\Users\\SAHESWARI DEVI\\Downloads';
const OUT_DIR = path.join(__dirname, '..', '.extract');

const files = {
  home: 'nemora-v5.html',
  platform: 'nemora-platform.html',
  about: 'nemora-about (1).html',
  customers: 'nemora-customers.html',
  demo: 'nemora-demo.html',
  pricing: 'nemora-pricing.html',
};

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

for (const [key, filename] of Object.entries(files)) {
  const full = path.join(SRC_DIR, filename);
  const html = fs.readFileSync(full, 'utf8');

  const styleMatches = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]);
  const css = styleMatches.join('\n\n');

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let body = bodyMatch ? bodyMatch[1] : '';

  const scriptMatches = [...body.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
  const js = scriptMatches.join('\n\n');
  body = body.replace(/<script[\s\S]*?<\/script>/gi, '').trim();

  fs.writeFileSync(path.join(OUT_DIR, `${key}.css`), css);
  fs.writeFileSync(path.join(OUT_DIR, `${key}.body.html`), body);
  fs.writeFileSync(path.join(OUT_DIR, `${key}.js`), js);
  console.log(`${key}: css=${css.length}b body=${body.length}b js=${js.length}b`);
}
