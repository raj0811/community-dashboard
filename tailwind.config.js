/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arOneSans: ["'AR One Sans'", "sans-serif"],
      },
      colors: {
        edviron_black: "#1E1B59",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
