import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/genai-explainer/",
  build: {
    outDir: "docs",
  },
  plugins: [react()],
});
