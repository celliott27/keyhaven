import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // used to fix ReferenceError: React is not defined
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setup.ts",
    includeSource: ["src/**/*.{ts,tsx}"],
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
