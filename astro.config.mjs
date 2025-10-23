// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      svgr({
        include: "**/*.svg?preact",
        svgrOptions: {
          plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
          svgoConfig: {
            plugins: [
              "preset-default",
              "removeTitle",
              "removeDesc",
              "removeDoctype",
              "cleanupIds",
            ],
          },
        },
      }),
    ],
  },

  integrations: [preact({ compat: true })],
});
