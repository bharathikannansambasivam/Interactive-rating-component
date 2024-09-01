/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Orange: "hsl(25, 97%, 53%)",
        White: "hsl(0, 0%, 100%)",
        LightGrey: "hsl(217, 12%, 63%)",
        DarkBlue: "#1B222C",
        lightgray_button: "#262f39",
        VeryDarkBlue: "hsl(216, 12%, 8%)",
      },
    },
  },
  plugins: [],
};
