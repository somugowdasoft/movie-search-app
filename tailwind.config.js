/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all JSX/JS/TS files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#0f171e",
        "secondary-color": "#1a242f",
      }
    },
  },
  plugins: [],
}

