import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      // colors: {
      //   primary: "#fc5603",
      //   secondary: "#ffab52",
      //   accent: "#eb0f51",
      //   neutral: "#3d4451",
      //   "base-100": "#121212",
      // },
    },
  },
  plugins: [require("flowbite/plugin")],
} satisfies Config;
