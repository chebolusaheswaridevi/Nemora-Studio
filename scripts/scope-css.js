// One-off dev utility: takes a reference page's full extracted <style> block
// and produces a page-scoped stylesheet safe to import globally in Next.js
// App Router (where a plain global CSS class name could otherwise leak
// across routes). Every keyframe is renamed with a page prefix and every
// selector is wrapped under ".page-<prefix>" — except selectors that
// duplicate what's already ported into globals.css (reset, tokens, nav,
// footer, modal, reveal system), which are dropped instead of duplicated.
const fs = require('fs');

const SKIP_SELECTOR_PATTERNS = [
  /^:root$/,
  /^\*/, // * , *::before, *::after
  /^html\b/,
  /^body\b/,
  /^a\b/,
  /^button\b/,
  /^svg\b/,
  /^\.sr-only\b/,
  /^\.container\b/,
  /^\.reveal\b/,
  /^#nav\b/,
  /^nav\b/,
  /^\.nav-/,
  /^\.dd-/,
  /^\.logo-ne\b/,
  /^\.logo-mora\b/,
  /^\.btn-ghost\b/,
  /^\.btn-cta\b/,
  /^footer\b/,
  /^\.footer-/,
  /^\.modal\b/,
  /^\.modal-/,
  /^\.sec-eyebrow\b/,
  /^\.sec-eyebrow-line\b/,
  /^\.sec-h2\b/,
  /^\.sec-sub\b/,
];

const SKIP_KEYFRAME_NAMES = new Set([
  'fadeUp', 'fadeIn', 'scaleIn', 'slideRight', 'shimmer', 'pulse-ring',
  'float-a', 'float-b', 'blink', 'live-pulse', 'spin-slow', 'border-flow',
  'progress-fill', 'typing-cursor', 'scroll-chevron', 'counter-spin',
]);

function shouldSkipSelector(sel) {
  const s = sel.trim();
  return SKIP_SELECTOR_PATTERNS.some((re) => re.test(s));
}

// Split top-level CSS into a list of {type:'rule'|'atrule', ...} nodes,
// brace-depth aware so nested @media blocks are handled correctly.
function parseBlocks(css) {
  const blocks = [];
  let i = 0;
  const n = css.length;
  while (i < n) {
    while (i < n && /\s/.test(css[i])) i++;
    if (i >= n) break;
    // comment
    if (css.startsWith('/*', i)) {
      const end = css.indexOf('*/', i + 2);
      i = end === -1 ? n : end + 2;
      continue;
    }
    const start = i;
    let depth = 0;
    let headerEnd = -1;
    while (i < n) {
      const ch = css[i];
      if (ch === '{') {
        if (depth === 0) headerEnd = i;
        depth++;
      } else if (ch === '}') {
        depth--;
        if (depth === 0) {
          i++;
          break;
        }
      }
      i++;
    }
    const raw = css.slice(start, i);
    const header = css.slice(start, headerEnd).trim();
    const body = css.slice(headerEnd + 1, raw.length + start - 1).trim();
    blocks.push({ header, body, raw });
  }
  return blocks;
}

function scopeSelectors(header, prefix) {
  const selectors = header.split(',').map((s) => s.trim());
  const kept = selectors.filter((s) => !shouldSkipSelector(s));
  if (!kept.length) return null;
  return kept.map((s) => `.page-${prefix} ${s}`).join(',\n');
}

function scopeCss(css, prefix) {
  const blocks = parseBlocks(css);
  const keyframeRenames = new Map();
  const out = [];

  // First pass: collect keyframe renames
  for (const b of blocks) {
    const m = b.header.match(/^@keyframes\s+([a-zA-Z0-9_-]+)$/);
    if (m && !SKIP_KEYFRAME_NAMES.has(m[1])) {
      keyframeRenames.set(m[1], `${prefix}-${m[1]}`);
    }
  }

  function renameKeyframeRefs(declBody) {
    let result = declBody;
    for (const [orig, renamed] of keyframeRenames) {
      const re = new RegExp(`(animation(?:-name)?\\s*:[^;]*?)\\b${orig}\\b`, 'g');
      result = result.replace(re, (whole, pre) => whole.replace(orig, renamed));
    }
    return result;
  }

  for (const b of blocks) {
    const kfMatch = b.header.match(/^@keyframes\s+([a-zA-Z0-9_-]+)$/);
    if (kfMatch) {
      if (SKIP_KEYFRAME_NAMES.has(kfMatch[1])) continue; // already global
      const newName = keyframeRenames.get(kfMatch[1]);
      out.push(`@keyframes ${newName} {\n${b.body}\n}`);
      continue;
    }
    if (b.header.startsWith('@media')) {
      const inner = scopeCss(b.body, prefix);
      if (inner.trim()) out.push(`${b.header} {\n${inner}\n}`);
      continue;
    }
    if (b.header.startsWith('@')) {
      // @font-face etc — pass through unscoped (rare in these files)
      out.push(b.raw);
      continue;
    }
    const scoped = scopeSelectors(b.header, prefix);
    if (!scoped) continue;
    const body = renameKeyframeRefs(b.body);
    out.push(`${scoped} {\n  ${body}\n}`);
  }

  return out.join('\n\n');
}

const file = process.argv[2];
const prefix = process.argv[3];
const outFile = process.argv[4];
if (!file || !prefix || !outFile) {
  console.error('usage: node scope-css.js <in.css> <prefix> <out.css>');
  process.exit(1);
}
const css = fs.readFileSync(file, 'utf8');
const scoped = scopeCss(css, prefix);
fs.writeFileSync(outFile, scoped);
console.log('wrote', outFile, scoped.length, 'bytes');
