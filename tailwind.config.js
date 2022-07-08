const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],

  theme: {
    extend: {
      dropShadow: {
        'blue' : '0px 0px 30px rgba(0, 182, 250,0.7)',
        'green' : '0px 0px 40px rgba(0,242, 155, 0.7)'
      },

      fontFamily:{
        'tanker' : ['Tanker', 'sans-serif'],
        'bebas': ['Bebas Neue']
      },
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'blue-tt': '#00B6FA',
        'green-tt':'#00F29B'
      }

    },

  },
  plugins: [],
}
