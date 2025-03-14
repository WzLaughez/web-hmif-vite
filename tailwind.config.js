/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        SweetDaisy: '#FFFBF0', // Add your custom color here
        Sage: '#BFDAA4', // Add your custom color here
        Peach: '#F49069', // Add your custom color here
      },
      fontFamily:{
        // poppins:['Poppins'],
        sans: ['Roboto', 'sans-serif'], // Primary font
        serif: ['Merriweather', 'Georgia', 'serif'], // Secondary font
        mono: ['Courier New', 'monospace'], // Monospace font
      }
    },
  },
  plugins: [],
}