/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index/**/*{js,jsx,ts,tsx}", "./src/**/*{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        brandGreen: "#083D2D",
        brandGray: "#F8F7F8",
        brandBlue: "#0D0D2B",
      },

      // backgroundImage: {
      //   'image': "url('/Illustration.svg')"
      // }
    },
  },
  plugins: [],
};
