module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      secondary: ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        purple: "#6548A3",

        background: "#F0EDF5",
        input: "#C4C4D1",
        detail: "#A0A0B2",
        "base-darker": "#6C6C80",
        title: "#3D3D4C",
      },
    },
  },
  plugins: [],
}