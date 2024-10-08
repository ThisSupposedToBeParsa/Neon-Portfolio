import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navSky: "#45d4ff",
        navRed: "#e20000",
        navGreen: "#2cff05",
        navViolet: "#C32CFF",
      },
      boxShadow: {
        dropLight: "0px 0px 77px 10px #fff",
      },
    },
  },
  plugins: [],
};
export default config;
