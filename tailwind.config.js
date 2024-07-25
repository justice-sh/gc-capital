/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bowlby_one: ['"Bowlby One", sans-serif'],
        azeret_mono: ['"Azeret Mono", monospace'],
        inter: ['"Inter", sans-serif'],
      },
      colors: {
        yellow: {
          401: "#FFED05",
        },
        red: {
          501: "#CC3738",
        },
      },
      screens: {
        "xl-1": { max: "1400px" },

        "lg-2": { max: "1280px" },
        "lg-1": { max: "1024px" },

        "md-4": { max: "912px" },
        "md-3": { max: "853px" },
        "md-2": { max: "820px" },
        "md-1": { max: "768px" },

        "sm-8": { max: "600px" },
        "sm-7": { max: "540px" },
        "sm-6": { max: "430px" },
        "sm-5": { max: "414px" },
        "sm-4": { max: "390px" },
        "sm-3": { max: "375px" },
        "sm-2": { max: "360px" },
        "sm-1": { max: "344px" },
      },
    },
  },
  plugins: [],
};
