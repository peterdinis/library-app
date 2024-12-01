/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        headingMain: "#141414",
        headingSecondary: "#2b2b2b",
        darkHeadingMain: "a9aaab",
        darkHeadingSecondary: "#b3b4b5",
      }
    },
  },
  plugins: [],
}