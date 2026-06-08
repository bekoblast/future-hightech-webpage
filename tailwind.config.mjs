/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Sampled from the official 2024 Company Profile PDF
        navy: {
          50:  '#eef2f8',
          100: '#d6dfee',
          200: '#adbede',
          300: '#7e95c7',
          400: '#4c6aa8',
          500: '#2c4a83',
          600: '#1f3a6e',
          700: '#16345D', // primary brand navy
          800: '#0f2547',
          900: '#0A1321', // deep navy used on dark sections
          950: '#050a14',
        },
        orange: {
          50:  '#fff4ed',
          100: '#ffe5d4',
          200: '#ffc7a8',
          300: '#ffa071',
          400: '#ff7338',
          500: '#EF6822', // primary brand orange
          600: '#d44d10',
          700: '#af3a0f',
          800: '#8c3014',
          900: '#722a14',
          950: '#3e1308',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #EF6822 0%, #d44d10 35%, #16345D 100%)',
        'brand-gradient': 'linear-gradient(135deg, #EF6822 0%, #16345D 100%)',
        'grid-navy': 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        'glow-orange': '0 10px 40px -10px rgba(239,104,34,0.55)',
        'glow-navy': '0 10px 40px -10px rgba(22,52,93,0.55)',
      },
    },
  },
  plugins: [],
};
