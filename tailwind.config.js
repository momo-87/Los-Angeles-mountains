/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html, js}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        "color-text1": "#4c4c4c",
        "color-text2": "#3e4e6c",
    }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

