module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        bgimage: "url('/src/images/bg-login.png')",
      },
      colors: {
        primary: {
          base: "#D40D12",
          dark: "#94090D",
          ligth: "#F0788C",
          lightest: "#F6B1C3",
        },
        gray: {
          dark: "#657786",
          ligth: "#AAB8C2",
          extraligth: "#E1E8ED",
          lightest: "#F5F8FA",
        },
        black: "#14171A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
