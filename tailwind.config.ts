import type { Config } from 'tailwindcss';

// Tokens mirror the :root custom properties in src/app/globals.css 1:1 —
// keep both in sync if a value ever changes.
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        'ink-3': 'var(--ink-3)',
        'ink-4': 'var(--ink-4)',
        surface: 'var(--surface)',
        accent: 'var(--accent)',
        warm: 'var(--warm)',
        emerald: 'var(--emerald)',
        amber: 'var(--amber)',
        mist: 'var(--mist)',
        'mist-2': 'var(--mist-2)',
        border: 'var(--border)',
        'border-md': 'var(--border-md)',
        'border-hi': 'var(--border-hi)',
        'text-1': 'var(--text-1)',
        'text-2': 'var(--text-2)',
        'text-3': 'var(--text-3)',
        'text-4': 'var(--text-4)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      borderRadius: {
        sm: 'var(--r-sm)',
        md: 'var(--r-md)',
        lg: 'var(--r-lg)',
        xl: 'var(--r-xl)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out': 'cubic-bezier(0.45, 0, 0.15, 1)',
      },
      maxWidth: {
        container: '1160px',
      },
    },
  },
  plugins: [],
};

export default config;
