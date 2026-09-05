// Assembles a page.tsx from an already-converted JSX fragment: strips the
// <nav>/<footer>/modal blocks handled by shared components, wraps the rest
// in a page-scoped div, and writes valid TSX with boilerplate imports.
const fs = require('fs');

function stripTopLevelTag(jsx, tagName) {
  const openRe = new RegExp(`<${tagName}\\b`);
  const m = jsx.match(openRe);
  if (!m) return jsx;
  const start = m.index;
  // Find matching close by counting nested same-tag opens/closes from start
  const tagOpenRe = new RegExp(`<${tagName}\\b`, 'g');
  const tagCloseRe = new RegExp(`</${tagName}>`, 'g');
  tagOpenRe.lastIndex = start;
  let depth = 0;
  let i = start;
  let end = -1;
  const combined = new RegExp(`(<${tagName}\\b)|(</${tagName}>)`, 'g');
  combined.lastIndex = start;
  let mm;
  while ((mm = combined.exec(jsx))) {
    if (mm[1]) depth++;
    else {
      depth--;
      if (depth === 0) {
        end = mm.index + mm[0].length;
        break;
      }
    }
  }
  if (end === -1) return jsx;
  return jsx.slice(0, start) + jsx.slice(end);
}

const file = process.argv[2];
const prefix = process.argv[3];
const outFile = process.argv[4];
const jsx = fs.readFileSync(file, 'utf8');

let body = jsx;
body = stripTopLevelTag(body, 'nav');
body = stripTopLevelTag(body, 'footer');
body = body.trim();

const out = `'use client';

import { useReveal } from '@/lib/useReveal';
import './${prefix}.scoped.css';

export default function Page() {
  useReveal();

  return (
    <div className="page-${prefix}">
${body
  .split('\n')
  .map((l) => '      ' + l)
  .join('\n')}
    </div>
  );
}
`;

fs.writeFileSync(outFile, out);
console.log('wrote', outFile);
