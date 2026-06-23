import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#0A1628',
          50: '#0D1E34',
          100: '#091320',
        },
        bronze: {
          light: '#D4B87A',
          DEFAULT: '#C9A96E',
          dark: '#A8893A',
        },
        cream: {
          DEFAULT: '#F0EDE6',
          50: '#F8F6F0',
          100: '#F0EDE4',
        },
        stone: {
          DEFAULT: '#8A9BAB',
          light: '#B8C5D0',
          dark: '#5C7080',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 8vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 5.5rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 3.5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      spacing: {
        'section': '8rem',
        'section-sm': '5rem',
      },
      maxWidth: {
        'content': '1440px',
        'text': '680px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'line-grow': 'lineGrow 0.8s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineGrow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
export default config
