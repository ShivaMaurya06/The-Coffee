/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",

// Or If using 'src' directory
    " ./src/**/*.{js,ts,jsm,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
