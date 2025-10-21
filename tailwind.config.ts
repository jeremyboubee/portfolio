import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{astro,html,js,jsx,ts,tsx}",
    "./src/components/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
