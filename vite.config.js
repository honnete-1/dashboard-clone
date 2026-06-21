import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Pretty much the default Vite + React setup.
// We don't need anything fancy here for this assignment.
export default defineConfig({
  plugins: [react()],
});
