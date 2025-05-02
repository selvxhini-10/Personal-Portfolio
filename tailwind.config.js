/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wormhole: {
          '0%': { opacity: '0', transform: 'scale(1)' },
          '25%': { opacity: '0.5', transform: 'scale(1.2)' },
          '50%': { opacity: '0.8', transform: 'scale(1.5)' },
          '75%': { opacity: '1', transform: 'scale(2)' },
          '100%': { opacity: '0', transform: 'scale(3)' }
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        wormhole: 'wormhole 3s forwards',
        'gradient-x': 'gradient-x 5s ease infinite',
      },
    },
  },
  plugins: [],
};
