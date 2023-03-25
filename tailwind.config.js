/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      primary: 'Montserrat',
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
}