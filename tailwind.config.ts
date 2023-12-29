import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        phire: {
          primary: "#fc5603",
          secondary: "#ffab52",
          accent: "#eb0f51",
          neutral: "#3d4451",
          "base-100": "#121212",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
} satisfies Config;
