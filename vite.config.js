import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Sitemap from "vite-plugin-sitemap";
import viteImagemin from "vite-plugin-imagemin";

const hostname = "https://www.andrijadesign.com/";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // This will expose the server on the local network
    port: 5173 // Optional: Change this if you want to use a different port
  },
  build: {
    sourcemap: true // Enable source maps in production
  },
  plugins: [
    react(),
    viteImagemin({
      webp: {
        quality: 75 // Quality of the compression
      }
    }),
    Sitemap({
      hostname,
      exclude: ["/not-found"],
      readable: true,
      generateRobotsTxt: true,
      robots: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/not-found"]
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    }
  }
});
