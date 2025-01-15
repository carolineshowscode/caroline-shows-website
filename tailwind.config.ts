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
      primary: '#c7c2cd',
      secondary: '#F7F7F7',
      accent: '#143553',
      grey: '#999999',
      darkGrey: '#666666',
      white: '#FCFCFC',
      darkBlue: '#273e69',
      mediumBlue: '#4c6491',
      lightBlue: '#97a8c7',
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
      },
      boxShadow: {
        blackSolid: '10px 10px 0px 0px rgb(0, 0, 0)',
      }
    },
  },
  plugins: [],
} satisfies Config;
