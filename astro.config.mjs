// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://tu-dominio.com",
  base: "/",
  trailingSlash: "never",
  build: {
    assets: "assets",
  },
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ["svgo"],
    },
  },
});
