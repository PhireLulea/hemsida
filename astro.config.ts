import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://hemsida-one.vercel.app",
  output: "server",
  adapter: vercel(),
  integrations: [tailwind(), react()]
});