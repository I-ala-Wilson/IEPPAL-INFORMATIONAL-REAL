import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://i-ala-wilson.github.io/IEPPAL-INFO/",
  // Update this to your GitHub Pages URL
  base: '/IEPPAL-INFO',
  // Add this if your repo name is not username.github.io
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  },
  integrations: [mdx(), tailwind(), sitemap(), icon()]
});