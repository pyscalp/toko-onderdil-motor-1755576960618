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
          DEFAULT: '#3b82f6', // blue-500
          dark: '#2563eb'    // blue-600
        },
        secondary: {
          DEFAULT: '#6366f1', // indigo-500
          dark: '#4f46e5'    // indigo-600
        },
        accent: {
          DEFAULT: '#a855f7', // purple-500
          dark: '#9333ea'    // purple-600
        }
      }
    },
  },
  plugins: [],
}