/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      height:{
        'header-h': '550px',
        
      },
      screens:{
        'mobile': '320px',
        'tablet' : '768px',
        'laptop' : '1024px'
      }
    },
  },
  plugins: [],
}

