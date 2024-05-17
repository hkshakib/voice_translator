/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          DEFAULT: '#007BFF',
        },
        secondary: {
          DEFAULT: '#6C757D',
        },
        accent: {
          DEFAULT: '#FFC107', // Highlights, notification badges, icons
        },
        background: {
          DEFAULT: '#F8F9FA', // Main background, section backgrounds
        },
        textCol: {
          DEFAULT: '#212529', // Primary text
        },
        mutedCol: {
          DEFAULT: '#6C757D', // Secondary text, placeholders
        },
        success: {
          DEFAULT: '#28A745', // Success messages, indicators
        },
        errorCol: {
          DEFAULT: '#DC3545', // Error messages, indicators
        },
        warning: {
          DEFAULT: '#FFC107 ', // Warning messages, indicators
        },
      },
    },
  },
  plugins: [],
}

