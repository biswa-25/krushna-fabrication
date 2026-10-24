/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cardDark: {
          950: '#070a0f',
          900: '#0b1019',
          850: '#101726',
          800: '#162032',
          700: '#23324a',
        },
        spark: {
          gold: '#f59e0b',       // Card Welding Flame Gold
          orange: '#ea580c',     // Card Flame Orange
          yellow: '#fbbf24',     // Card Title Bright Yellow
          glow: 'rgba(245, 158, 11, 0.4)',
        },
        steelSheen: {
          light: '#f8fafc',
          silver: '#cbd5e1',
          border: 'rgba(245, 158, 11, 0.3)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Oriya', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Noto Sans Oriya', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'card-glow': '0 10px 30px -5px rgba(245, 158, 11, 0.25), 0 0 15px rgba(234, 88, 12, 0.15)',
        'spark-btn': '0 6px 20px -2px rgba(234, 88, 12, 0.5)',
        'card-elevated': '0 15px 35px -5px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
