// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        osm: resolve(__dirname, "events/open-source-marathon/index.html"),
        osmLeaderboard: resolve(
          __dirname,
          "events/open-source-marathon/leaderboard.html",
        ),
      },
    },
  },
});
