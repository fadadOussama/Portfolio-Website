/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { min: "767px" },
      // => @media (min-width: 767px) { ... }

      sm: { min: "576px" },
      // => @media (min-width: 639px) { ... }
    },
    extend: {
      height: {
        "header-height": "3.5rem",
      },
      colors: {
        firstColor: "hsl(207, 65%, 65%)",
        textLightColor: "hsl(207, 4%, 56%)",

        titleColor: "hsl(207, 4%, 16%)",
        "dk-titleColor": "hsl(207, 4%, 95%)",

        textColor: "hsl(207, 4%, 28%)",
        "dk-textColor": "hsl(207, 4%, 65%)",

        bodyColor: "hsl(207, 4%, 99%)",
        "dk-bodyColor": "hsl(207, 4%, 10%)",

        containerColor: "hsl(207, 4%, 95%)",
        "dk-containerColor": "hsl(207, 4%, 12%)",
      },
      backgroundImage: {
        gradientColor: "linear-gradient(180deg,hsla(207, 48%, 72%, 0), hsla(207, 65%, 65%, 1))",
      },
      fontSize: {
        biggestSize: "1.5rem",
        "lg-biggestSize": "3rem",

        h1Size: "1.25rem",
        "lg-h1Size": "2.25rem",

        h2Size: "1.25rem",
        "lg-h2Size": "1.5rem",

        h3Size: "1rem",
        "lg-h3Size": "1.25rem",

        normalSize: "0.938rem",
        "lg-normalSize": "1rem",

        smallSize: "0.813rem",
        "lg-smallSize": "0.875rem",

        smallerSize: "0.75rem",
        "lg-smallerSize": "0.813rem",

        tinySize: "0.625rem",
        "lg-tinySize": "0.688rem",
      },
      fontFamily: {
        bodyFont: "'Roboto', sans-serif",
        titleFont: "'Lora', serif",
      },
      boxShadow: {
        main: "0 4px 20px hsla(207, 24%, 35%, .1)",
        second: "0 6px 24px hsla(207, 24%, 8%, .6)",
      },
    },
  },
  plugins: [],
};
