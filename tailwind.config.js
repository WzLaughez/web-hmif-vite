/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue1: '#214478', // Add your custom color here
        customBlue2: '#5599ff', // Add your custom color here
      },
      fontFamily:{
        poppins:['Poppins'],
        sans: ['Roboto', 'Arial', 'sans-serif'], // Primary font
        serif: ['Merriweather', 'Georgia', 'serif'], // Secondary font
        mono: ['Courier New', 'monospace'], // Monospace font
      }
    },
  },
  plugins: [],
}