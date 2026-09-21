import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  base: "/IS2350webdevelopment/my-react-app/dist/", 
  server:{
    port: 5173, // Specify your desired port here
  }
});
