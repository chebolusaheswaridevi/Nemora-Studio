// One-off dev utility: mechanically converts the reference mockups' static
// HTML fragments into valid JSX so we don't hand-retype thousands of lines
// of markup (and risk transcription drift from the reference pixel values).
// Interactive bits (onclick=, <script> logic) are intentionally left as
// TODO markers — those get hand-wired into React state per page.
const fs = require('fs');
const path = require('path');

const VOID_TAGS = new Set(['br', 'hr', 'img', 'input', 'meta', 'link', 'source', 'area', 'base', 'col', 'embed', 'param', 'track', 'wbr']);

const ATTR_MAP = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  minlength: 'minLength',
  autocomplete: 'autoComplete',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  crossorigin: 'crossOrigin',
  srcset: 'srcSet',
  contenteditable: 'contentEditable',
  spellcheck: 'spellCheck',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  frameborder: 'frameBorder',
  allowfullscreen: 'allowFullScreen',
  // SVG presentation attrs
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'stroke-opacity': 'strokeOpacity',
  'fill-rule': 'fillRule',
  'fill-opacity': 'fillOpacity',
  'clip-rule': 'clipRule',
  'clip-path': 'clipPath',
  'text-anchor': 'textAnchor',
  'dominant-baseline': 'dominantBaseline',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'font-family': 'fontFamily',
  'font-size': 'fontSize',
  'font-weight': 'fontWeight',
  'letter-spacing': 'letterSpacing',
  'text-decoration': 'textDecoration',
  'gradientunits': 'gradientUnits',
  'gradienttransform': 'gradientTransform',
  'xlink:href': 'xlinkHref',
  'marker-end': 'markerEnd',
  'marker-start': 'markerStart',
  'vector-effect': 'vectorEffect',
  'shape-rendering': 'shapeRendering',
};

function camelizeCssProp(prop) {
  prop = prop.trim();
  if (prop.startsWith('--')) return prop; // custom property, keep literal (quoted key)
  if (prop.startsWith('-webkit-') || prop.startsWith('-moz-') || prop.startsWith('-ms-')) {
    return prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  }
  return prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function styleAttrToObjectLiteral(value) {
  const decls = value
    .split(';')
    .map((d) => d.trim())
    .filter(Boolean);
  const pairs = decls.map((d) => {
    const idx = d.indexOf(':');
    const prop = d.slice(0, idx).trim();
    let val = d.slice(idx + 1).trim();
    val = val.replace(/'/g, "\\'").replace(/"/g, '\\"');
    const key = camelizeCssProp(prop);
    const keyLiteral = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `'${key}'`;
    return `${keyLiteral}: '${val}'`;
  });
  return `{ ${pairs.join(', ')} }`;
}

function convertAttrs(attrString) {
  if (!attrString || !attrString.trim()) return '';
  // Tokenize attributes: name="value" | name='value' | name={...} | name
  const attrRe = /([a-zA-Z_:][a-zA-Z0-9_:-]*)(=("([^"]*)"|'([^']*)'))?/g;
  let m;
  const out = [];
  while ((m = attrRe.exec(attrString))) {
    const rawName = m[1];
    const hasValue = m[2] !== undefined;
    const value = hasValue ? m[4] !== undefined ? m[4] : m[5] : null;
    if (rawName.toLowerCase() === 'style' && hasValue) {
      out.push(`style={${styleAttrToObjectLiteral(value)}}`);
      continue;
    }
    if (rawName.startsWith('on')) {
      out.push(`data-todo-handler="${rawName}:${(value || '').replace(/"/g, '&quot;')}"`);
      continue;
    }
    const mappedName = ATTR_MAP[rawName.toLowerCase()] || rawName;
    if (!hasValue) {
      out.push(mappedName);
    } else {
      out.push(`${mappedName}="${value.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;')}"`);
    }
  }
  return out.length ? ' ' + out.join(' ') : '';
}

function convertHtmlToJsx(html) {
  // Strip HTML comments -> JSX comments
  html = html.replace(/<!--([\s\S]*?)-->/g, (_, c) => `{/*${c.replace(/\*\//g, '* /')}*/}`);

  // Convert tags
  html = html.replace(/<(\/?)([a-zA-Z][a-zA-Z0-9]*)((?:\s+[^<>]*?)?)(\s*\/?)>/g, (whole, closing, tag, attrs, selfCloseMark) => {
    const lowerTag = tag.toLowerCase();
    if (closing === '/') {
      return `</${tag}>`;
    }
    const isVoid = VOID_TAGS.has(lowerTag);
    const converted = convertAttrs(attrs);
    if (isVoid) {
      return `<${tag}${converted} />`;
    }
    if (selfCloseMark.includes('/')) {
      return `<${tag}${converted} />`;
    }
    return `<${tag}${converted}>`;
  });

  return html;
}

const file = process.argv[2];
if (!file) {
  console.error('usage: node html-to-jsx.js <file.body.html> [outfile]');
  process.exit(1);
}
const html = fs.readFileSync(file, 'utf8');
const jsx = convertHtmlToJsx(html);
const outFile = process.argv[3] || file.replace(/\.body\.html$/, '.jsx.fragment');
fs.writeFileSync(outFile, jsx);
console.log('wrote', outFile);
