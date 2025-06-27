/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        SweetDaisy: '#f3f0da', // Add your custom color here
        Sage: '#1d1e3f', // Add your custom color here
        Peach: '#f3f0da', // Add your custom color here
      },
      fontFamily:{
        // poppins:['Poppins'],
        sans: ['Poppins', 'sans-serif'], // Primary font
        serif: ['Merriweather', 'Georgia', 'serif'], // Secondary font
        mono: ['Courier New', 'monospace'], // Monospace font
      }
    },
  },
  plugins: [],
}