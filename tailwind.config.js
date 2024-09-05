/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#363C43',
        bgColor:'#616161D1',
      },
    },
  },
  plugins: [],
}

