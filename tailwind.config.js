/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#dc052d',
        secondary: '#c60428',
      },
      spacing: {
        7.5: '1.875rem',
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        html: { color: 'white' },
      })
    }),
    ({ addUtilities }) => {
      addUtilities({
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.flex-between': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        '.flex-end': {
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
        '.flex-col-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        },
        '.flex-col-between': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
        },
      })
    },
  ],
}
