import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), icon()],
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en", "fr"]
  },
  output: "hybrid",
  adapter: vercel()
});
