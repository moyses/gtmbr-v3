import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
    './src/utils/**/*.{js,ts,jsx,tsx}',
    './src/hooks/**/*.{js,ts,jsx,tsx}',
    './src/contexts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        dark: '#090227',
        brand: {
          primary: '#8536fd',
          secondary: '#403f94',
          light: '#f0f4fd',
        },
        purple: {
          600: '#d0c3f9',
          800: '#7617b2',
          900: '#61148f',
          950: '#43006b',
        },
        cyan: {
          100: '#2DEBFC',
          200: '#187D86',
          300: '#0E474C',
        },
        gray: {
          100: '#F9FAFC',
          200: '#D3D5D9',
          300: '#93979F',
          400: '#20242C',
          500: '#16181D',
          600: '#14161A',
          700: '#101216',
          800: '#0B0C0F',
        },
      },
      fontFamily: {
        sans: ['PT Sans Caption', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        // Headings - PT Sans Caption
        'heading-hg': ['40px', { lineHeight: '120%', fontWeight: '700' }],
        'heading-xl': ['32px', { lineHeight: '120%', fontWeight: '700' }],
        'heading-lg': ['28px', { lineHeight: '120%', fontWeight: '700' }],
        'heading-md': ['24px', { lineHeight: '120%', fontWeight: '700' }],
        'heading-sm': ['20px', { lineHeight: '120%', fontWeight: '700' }],
        'heading-xs': ['16px', { lineHeight: '120%', fontWeight: '700' }],

        // Body - Inter
        'body-md': ['16px', { lineHeight: '150%', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '150%', fontWeight: '400' }],
        'body-xs': ['12px', { lineHeight: '150%', fontWeight: '400' }],

        // Action - Inter
        'action-md': ['16px', { lineHeight: 'normal', fontWeight: '500' }],
        'action-sm': ['14px', { lineHeight: 'normal', fontWeight: '500' }],
      },
    },
  },
  plugins: [animate],
} satisfies Config;
