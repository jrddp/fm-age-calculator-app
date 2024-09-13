import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        background: "hsl(0, 0%, 94%)",
        "light-gray": "hsl(0, 0%, 86%)",
        muted: "hsl(0, 1%, 44%)",
        foreground: "hsl(0, 0%, 8%)",
        primary: "#864CFF",
        error: "#F87171", // red-400
      },
    },
  },
  plugins: [],
};

export default config;
