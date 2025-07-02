/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     keyframes: {
    'neon-line': {
      '0%': { transform: 'translateX(-100%)', opacity: '0.1' },
      '50%': { opacity: '0.4' },
      '100%': { transform: 'translateX(100%)', opacity: '0.1' },
    },
  },
  animation: {
    'neon-line': 'neon-line 4s linear infinite',
  },
      colors: {
        SweetDaisy: '#A5D6A7 ', // Add your custom color here
        Sage: '#9C27B0  ', // Add your custom color here
        Peach: '#A5D6A7 ', // Add your custom color here
        Font: '#FFD700',
        Putih: '#FFFFFF',
        emas: '#FFD700',
        
      ungu: '#9C27B0',
      mint: '#A5D6A7',
      mintAlt: '#B2DFDB',
      abuTua: '#424242',
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