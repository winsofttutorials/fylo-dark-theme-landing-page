import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      //https://winsofttutorials.github.io/fylo-dark-theme-landing-page/
    },
  },
});
