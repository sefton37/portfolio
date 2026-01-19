/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      colors: {
        // Neutral palette - warm grays
        surface: {
          DEFAULT: '#0a0a0a',
          raised: '#111318',
          overlay: '#181b22',
        },
        text: {
          primary: '#fafafa',
          secondary: '#a1a1a1',
          muted: '#525252',
        },
        accent: {
          DEFAULT: '#22d3ee',
          hover: '#67e8f9',
          muted: '#164e63',
          dim: '#0e7490',
        },
        border: {
          DEFAULT: '#1e293b',
          hover: '#0e7490',
        },
        cyan: {
          DEFAULT: '#06b6d4',
          light: '#22d3ee',
          dark: '#0891b2',
          glow: 'rgba(6, 182, 212, 0.15)',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
