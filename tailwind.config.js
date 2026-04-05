/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          accent: "#FF6B00",
          hover: "#E66000",
        }
      }
    },
  },
  plugins: [],
}
