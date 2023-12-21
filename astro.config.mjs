import { defineConfig } from "astro/config";
import decapCmsOauth from "astro-decap-cms-oauth";
import vercel from "@astrojs/vercel/serverless";


// https://astro.build/config
export default defineConfig({
  site: "https://hemsida-one.vercel.app",
  output: "server",
  integrations: [decapCmsOauth()],
  adapter: vercel()
});