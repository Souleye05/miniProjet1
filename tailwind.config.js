/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.php',
    './template/**/*.php',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

