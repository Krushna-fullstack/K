import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allow external connections
    port: 5173, // Match the correct port
    strictPort: true,
    cors: true,
    hmr: {
      clientPort: 443, // Fix WebSocket errors on HTTPS
    },
    allowedHosts: ["bjbcollege.com", "www.bjbcollege.com"],
  },
});
