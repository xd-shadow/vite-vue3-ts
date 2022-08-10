import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@src",
        replacement: "/src",
      },
      {
        find: "@img",
        replacement: "/src/assets/img",
      },
    ],
  },
});
