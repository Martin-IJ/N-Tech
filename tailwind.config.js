const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #710CF6, #D016D7)',
      },
      backgroundColor: {
        'bgrc-color': '#E6F5FF',
        'main-color': '#17191F',
        'default': '#710CF6',
        'faded-black': '#666666',
        'gradient': 'linear-gradient(to right, #710CF6, #D016D7)',
      },
      textColor: {
        'bgrc-color': '#E6F5FF',
        'default': '#710CF6',
        'main-color': '#161823',
        'faded-black': '#666666',
        'gradient': 'linear-gradient(to right, #710CF6, #D016D7)',
      },
      borderColor: {
        'default': '#710CF6',
        'faded-black': '#666666',
        'gradient': 'linear-gradient(to right, #710CF6, #D016D7)',
      },
    },
  },
  plugins: [],
});