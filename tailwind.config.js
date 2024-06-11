module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite', // Adjust the duration as needed
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-18deg)' },
        '50%': { transform: 'rotate(18deg)' },
      }
      }
    },
  },
  plugins: [],
}
