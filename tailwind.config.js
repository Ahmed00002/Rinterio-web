/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        colorPrimary: "rgba(171, 239, 95, 1)",
        colorSecondary: "rgba(33, 33, 33, 1)",
        colorAccent: "rgba(73, 73, 73, 1)",
        colorFooter: "rgba(28, 28, 28, 1)",
        colorBadge: "rgba(171, 239, 95, 0.2)",

        extra: "rgba(171, 239, 95, 0.5)",

        // header gradient
        gradientEnd: "rgba(255, 255, 255, 1)",
        gradientStart: "rgba(255, 255, 255, 0)",

        // progress card
        card1: "rgba(231, 193, 211, 1)",
      },
      fontFamily: {
        defFont: ["Manrope", "sans-serif"],
      },
      screens: {
        sm: "576px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1240px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      daisyui: {
        themes: false,
      },
    },
  },
  plugins: [require("daisyui")],
};
