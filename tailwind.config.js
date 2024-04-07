/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    // screens: {       
    //   'mobile': '370px',
    // },
    extend: {
      fontFamily:{
        fugaz:['fugaz one']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

