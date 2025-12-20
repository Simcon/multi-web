import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://multiframework.com/",
  integrations: [
    tailwind(),
    icon(),
    sitemap({
      filter: (page) =>
        page === "https://multiframework.com/" //||
        //page === "https://multiframework.com/pricing/"
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
