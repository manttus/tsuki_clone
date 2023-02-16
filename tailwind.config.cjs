/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F4E0EA",
        ghost: "#CFBEC6",
        ghostlight: "#AAE5FA",
        textGhost: "#D6D6D6",
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 800,
      },
      letterSpacing: {
        widest: "0.20em",
      },
      fontSize: {
        xs: "11px",
        sm: "16px",
        head: "27px",
      },
    },
  },
  variants: {
    extend: {
      rotate: ["group-hover"],
      display: ["group-hover"],
    },
  },
  plugins: [],
};
