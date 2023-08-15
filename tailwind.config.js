/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        moanackOrange: "#EC9357",
        moanackGrey: "#647491",
        moanackDarkGrey: "#212021",
      },
      spacing: {
        xxxl: "calc((0.8rem + 1.5625vw)*6)",
        xxl: "calc((0.8rem + 1.5625vw)*4)",
        xl: "calc((0.8rem + 1.5625vw)*2)",
        full: "calc(0.8rem + 1.5625vw)",
        half: "calc((0.8rem + 1.5625vw)/2)",
      },
      fontSize: {
        h1: "4em",
        h2: "3em",
        h3: "2em",
        h4: "1.8em",
        h5: "1.5em",
        h6: "1.25em",
        sm: "0.8em",
        xs: "0.6em",
      },
      fontFamily: {
        footer: "EuclidCircularB",
        auxiliar: "BebasNeue",
      },
    },
  },
  plugins: [],
};
