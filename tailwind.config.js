/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
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

