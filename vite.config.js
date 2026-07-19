import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // "@" points at /src so imports read like `@/components/ui/tabs`
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
