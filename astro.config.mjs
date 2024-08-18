import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://i-ala-wilson.github.io/IEPPAL-INFO/", // Update this to your GitHub Pages URL
  base: '/IEPPAL-INFO', // Add this if your repo name is not username.github.io
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
