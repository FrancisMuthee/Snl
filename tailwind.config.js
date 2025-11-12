/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html',   // all your Django templates
    './static/js/**/*.js',     // any JS files using Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'media', // optional: use 'media' or remove entirely
}
