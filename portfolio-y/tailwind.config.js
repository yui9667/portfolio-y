/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        80: '80vh',
      },
      screens: {
        'max-xxm': { max: '320px' },
        'max-xm': { max: '481px' },
        'max-sm': { max: '568px' },
        'max-md': { max: '768px' },
        'max-lg': { max: '1023px' },
        'max-xl': { max: '1279px' },
        'max-2xl': { max: '1535px' },
      },
    },
  },
  plugins: [],
};
