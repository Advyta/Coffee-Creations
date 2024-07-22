const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

      },
      fontFamily: {
        lato: ['Lato', "sans-serif"]
      },
      backgroundImage: {
        //  'bg-one': "url('/src/assets/mike-kenneally-tNALoIZhqVM-unsplash.jpg')",
      },
      aspectRatio: {
        'bg-1': '32 / 21',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.page-title': {
          fontFamily: 'lato',
          fontSize: 'clamp(2.25rem, 3.101vw + 1.523rem, 4.5rem)',
          // lineHeight: '2.75rem',
          fontWeight: '400',
          fontStyle: 'Italic',
        },
        '.heading-1': {
          fontFamily: 'lato',
          fontSize: 'clamp(2rem, 2.756vw + 1.354rem, 4rem)',
        },
        '.heading-2': {
          fontFamily: 'lato',
          fontSize: 'clamp(1.75rem, 2.498vw + 1.165rem, 3.563rem)',
        },
        '.heading-3': {
          fontFamily: 'lato',
          fontSize: 'clamp(1.5rem, 0.345vw + 1.419rem, 1.75rem)',
        },
        '.body-l': {
          fontFamily: 'lato',
          fontSize: 'clamp(1rem, 0.172vw + 0.96rem, 1.125rem)',
        },
        '.body-m': {
          fontFamily: 'lato',
          fontSize: 'clamp(0.875rem, 0.172vw + 0.835rem, 1rem)',
        },
        '.body-s': {
          fontFamily: 'lato',
          fontSize: 'clamp(0.75rem, 0.172vw + 0.71rem, 0.875rem)',
        },
      })
    })
  ],
}

