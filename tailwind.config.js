/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors :{
        "accent" : "#CAF5B3",
        "strongaccent" : "#5BCF1B",
      },
      screens:{
        "xs" : "480px",
        "xxs" : "320px",
      },
      fontSize:{
        "xxs" : "0.5rem",
      }
    },
  },
  plugins: [],
  darkMode : "class",
}

