/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    fontFamily: {
      jet: ['"JetBrains Mono"', "serif"],
      grotesk: ['"Space Grotesk"', "sans-serif"],
    },
    colors: {
      black: {
        800: "#292929",
        900: "#121212",
        700:"#1E1E1E",
        200: "#E3E3E3",
      },
    },
  },
  plugins: [],
};
