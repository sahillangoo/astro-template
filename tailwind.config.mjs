/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Playfair Display", "serif"],
        secondary: ["Gabarito", "sans-serif"],
        main: ["Outfit", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      variants: {},
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [],
    base: true, // applies background color and foreground color for root element by default
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};

module.exports = config;
