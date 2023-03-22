/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customGreen: '#19B464',
        customYellow: '#AEC328',
        customOrange: '#C37C28',
        customRed: '#C32828'
      },
    },
  },
  plugins: [],
}
