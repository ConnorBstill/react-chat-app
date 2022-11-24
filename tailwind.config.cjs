/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'primary': '#b71c1c',
      'primary-light': '#ff833a',
      'primary-dark': '#ac1900',
      'secondary': '#424242',
      'secondary-light': '#6d6d6d',
      'secondary-dark': '#1b1b1b',
      'text-primary': '#000000',
      'text-secondary': '#ffffff',
      'gray-light': '#d3dce6',
    },
    extend: {},
  },
  plugins: [],
}
