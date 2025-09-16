/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        omkarBlue: "#004aad",
        omkarGold: "#fbbf24"
      }
    }
  },
  plugins: []
};
