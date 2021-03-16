const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        90: "22rem",
        108: "27rem",
        120: "30rem",
        132: "33rem",
        144: "36rem",
        156: "39rem",
        168: "42rem",
        180: "45rem",
      },
    },
    colors: {
      // custom
      white: "#ffffff",
      black: "#000000",
      error: "#E83F36",
      search: "#F4F4F4",
      // default
      gray: colors.trueGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },

    fontFamily: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
