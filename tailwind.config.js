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
      dropShadow: {
        'green': ['rgb(255,153,0) 0px 0px 1px','rgba(249,164,0, 0.6) 0px 0px 5px', 'rgba(249,164,0, 0.4) 0px 5px 4px'],
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
      },
    },
  },
  plugins: [],
}
