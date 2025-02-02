/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#15803d',
        secondary: '#16a34a',
        dark: '#1f2937',
        light: '#6b7280'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

