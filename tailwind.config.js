/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './<app>/**/*.{tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: 'Roboto_700Bold',
        body: 'Roboto_400Regular',
        alt: 'BaiJamjuree_700Bold',
      },

      colors: {
        gray: {
          50: '#eaeaea',
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },
        red: {
          50: '#faebeb',
          100: '#f8e0e0',
          200: '#f0bfbf',
          300: '#cf3232',
          400: '#ba2d2d',
          500: '#a62828',
          600: '#9b2626',
          700: '#7c1e1e',
          800: '#5d1616',
          900: '#481212',
        },
        green: {
          50: '#e6fbef',
          100: '#b1f1ce',
          200: '#8cebb6',
          300: '#57e295',
          400: '#36dc81',
          500: '#04d361',
          600: '#04c058',
          700: '#039645',
          800: '#027435',
          900: '#025929',
        },
      },
    },
  },
  plugins: [],
}
