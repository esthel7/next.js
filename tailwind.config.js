/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,js,tsx}', './components/**/*.{ts,tsx,js,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        video: 'repeat(auto-fit, minmax(250px, 1fr))'
      },
      spacing: {
        144: '36rem'
      },
      screens: {
        144: { max: '36rem' }
      }
    }
  },
  plugins: []
};
