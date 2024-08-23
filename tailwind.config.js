/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/components/**/*.{js,ts,jsx,tsx}",
    ".src/components/main.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-light-pink":"#FFF6B82",
        "custom-baby-pink":"#FF6B82"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

