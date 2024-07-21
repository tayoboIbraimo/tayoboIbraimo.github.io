const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,vue}","*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend Deca", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

