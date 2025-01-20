/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      nav: "1080px",
      lg: "1280px",
      xl: "1440px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        xl: "1436px", //1420 + 16 for Padding
      },
    },

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "#FD6F00",
        lightOrange: "#FFEBDB",
        light1: "#F8F8F8",
        light2: "#D9D9D9",
        light3: "#AFAFAF",
        lightBlack: "#545454",
        footerDark: "#121212",
        charcoalBlack: "#1E1E1E",
        bgGray: "#FBFBFB",
      },
    },
  },
  plugins: [],
};
