module.exports = {
  purge: ["./src/pages/**/*.js", "./src/components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        100: "30rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
