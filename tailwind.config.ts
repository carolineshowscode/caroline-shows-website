import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      primary: '#f6f4f0',
      secondary: '#f6f4f0',
      accent: '#e6cccc',
      grey: '#999999',
      darkGrey: '#666666',
      white: '#FCFCFC',
      darkBlue: '#c28787',
      mediumBlue: '#d6b2b2',
      lightBlue: '#d6c2c2',
      green: '#4a6b4a',
      black: '#080807',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        playwrite: ['Playwrite IN', 'serif'],
        geist: ['Geist', 'sans-serif'],
        dosis: ['Dosis', 'serif'],
      },
      boxShadow: {
        blackSolid: '10px 10px 0px 0px rgb(0, 0, 0)',
      }
    },
  },
  plugins: [],
} satisfies Config;
