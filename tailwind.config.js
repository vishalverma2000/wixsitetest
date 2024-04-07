/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*"],
  theme: {
    fontFamily: {
      bodoni: ["Bodoni Moda", "serif"],
      arial: ["Arial", "sans-serif"],
    },
    screens: {
      sm: "400px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1080px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
