/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#121214",
        primary: "#633bbc",
        card: "#1d1d22",
        blue: "#065e7c",
      },
      screens: {
        "xs": {"max": "370px"},
        "lg": {"max": "1000px"},
        "md": {"max": "800px"},
        "sm": {"max": "670px"},
      }
    },
  },
  plugins: [],
}
