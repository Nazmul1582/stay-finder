/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', "sans-serif"],
        blackHanSans: ["Black Han Sans", "sans-serif"]
      }
    },
  },
  plugins: [require("daisyui")],
}

