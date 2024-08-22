/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        colorPrimary: "rgba(171, 239, 95, 1)",
        colorSecondary: "rgba(33, 33, 33, 1)",
        colorAccent: "rgba(73, 73, 73, 1)",
        colorFooter: "rgba(28, 28, 28, 1)",
        colorBadge: "rgba(171, 239, 95, 0.2)",
      },
      fontFamily: {
        defFont: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
