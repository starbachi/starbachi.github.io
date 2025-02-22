import { defineConfig } from "vite";
import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
      ],
    },
  },
});