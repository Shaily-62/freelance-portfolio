/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: "#F7F3EC",
        bgSoft: "#FBF9F5",
        cardCream: "#F1E9DE",
        borderMuted: "#E8DED2",
        textMain: "#262321",
        primaryDark: "#3A2922",
        richBrown: "#6B4636",
        terracotta: "#A66A4C",
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}