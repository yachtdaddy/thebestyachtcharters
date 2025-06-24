/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#003366',
        'gold': '#D4AF37',
        'off-white': '#f8f9fa',
        'charcoal': '#333333',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
