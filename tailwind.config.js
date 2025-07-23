/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-900': '#000000',  // Primary black for text
        'blue-600': '#1e40af',   // Blue for buttons and accents
        'blue-700': '#1e3a8a',   // Hover states
        'gray-600': '#4b5563',   // Subtext
        'white': '#ffffff',      // Backgrounds
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
