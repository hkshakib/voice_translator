/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#32012F',
        },
        secondary: {
          DEFAULT: '#524C42',
        },
        accent: {
          DEFAULT: '#E2DFD0', // Highlights, notification badges, icons, background
        },
        highlight: {
          DEFAULT: '#F97300', // Important highlights, action calls
        },
        textCol: {
          DEFAULT: '#32012F', // Primary text
        },
        mutedCol: {
          DEFAULT: '#524C42', // Secondary text, placeholders
        },
      },
    },
  },
  plugins: [],
}

