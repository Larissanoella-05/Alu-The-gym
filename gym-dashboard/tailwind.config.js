module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#faf8f5',
          100: '#f4f0e9',
          200: '#e8e0d3',
          300: '#d9ccb8',
          400: '#c7b399',
          500: '#b89a7d',
          600: '#a7866c',
          700: '#8b6d59',
          800: '#705a4b',
          900: '#5b4a3f',
        },
        gray: {
          800: '#2d3748',
          900: '#1a202c',
        }
      }
    },
  },
  plugins: [],
}
