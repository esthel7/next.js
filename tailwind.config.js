/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,js,tsx}', './components/**/*.{ts,tsx,js,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        video: 'repeat(auto-fit, minmax(250px, 1fr))'
      },
      spacing: {
        110: '27.5rem',
        144: '36rem',
        150: '37.5rem',
        176: '44rem',
        200: '50rem',
        300: '75rem',
        '70%': '70%',
        '90%': '90%'
      },
      screens: {
        110: { max: '27.5rem' },
        144: { max: '36rem' },
        150: { max: '37.5rem' },
        176: { max: '44rem' },
        200: { max: '50rem' },
        300: { max: '75rem' }
      },
      colors: {
        darkGray: '#2d2d2d'
      }
    }
  },
  plugins: []
};
