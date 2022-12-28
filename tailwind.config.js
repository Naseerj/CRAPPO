/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index/**/*{js,jsx,ts,tsx}",
    "./src/**/*{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
       colors: {
        brandGreen: "#083D2D",
        brandGray: "#F8F7F8",
        brandBlue:'#0D0D2B',
      },
      backgroundImage: {
        bitcoin: 'url()',
      }
    },
  },
  plugins: [],
}
