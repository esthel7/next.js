/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,js,tsx}', './components/**/*.{ts,tsx,js,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        video: 'repeat(auto-fit, minmax(250px, 1fr))'
      },
      spacing: {
        18: '4.5rem',
        24: '6rem',
        250: '62.5rem',
        '70%': '70%',
        '90%': '90%'
      },
      screens: {
        100: { max: '25rem' },
        110: { max: '27.5rem' },
        '110-150': { min: '27.5rem', max: '37.5rem' },
        125: { max: '31.25rem' },
        144: { max: '36rem' },
        150: { max: '37.5rem' },
        '150-200': { min: '37.5rem', max: '50rem' },
        176: { max: '44rem' },
        200: { max: '50rem' },
        300: { max: '75rem' },
        325: { max: '81.25rem' }
      },
      colors: {
        darkGray: '#2d2d2d'
      }
    }
  },
  plugins: []
};
