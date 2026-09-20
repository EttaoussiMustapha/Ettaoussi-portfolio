/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        handwriting: ['Brush Script MT', 'cursive'],
      },
    },
  },
  plugins: [],
};
