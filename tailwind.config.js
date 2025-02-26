/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': ' hsl(230, 29%, 20%)',
        'dark-grayish-blue': 'hsl(230, 11%, 40%)',
        'grayish-blue': 'hsl(231, 7%, 65%)',
        'light-grayish-blue': 'hsl(207, 33%, 95%)'

      }
    },
  },
  plugins: [],
}

