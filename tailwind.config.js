/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        brand: {
          blue: '#0284c7',       // Industrial Cobalt Blue
          blueDark: '#0369a1',
          blueLight: '#e0f2fe',
          amber: '#f59e0b',      // Welding Flame Gold / Amber
          amberDark: '#d97706',
          amberLight: '#fef3c7',
          emerald: '#059669',    // WhatsApp / Verification green
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Oriya', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Noto Sans Oriya', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        'card': '0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
        'metallic': '0 12px 30px -8px rgba(2, 132, 199, 0.18)',
      }
    },
  },
  plugins: [],
}
