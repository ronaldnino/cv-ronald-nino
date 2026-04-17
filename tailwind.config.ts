import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"Sora"', 'sans-serif'],
      },
      colors: {
        bg:      '#0a0e1a',
        surface: '#111827',
        border:  '#1e2d45',
        accent:  '#00d4ff',
        accent2: '#7c3aed',
        accent3: '#10b981',
        muted:   '#64748b',
        heading: '#f8fafc',
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease both',
        'pulse-dot': 'pulseDot 2s infinite',
        'blink':     'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.3' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
