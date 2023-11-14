import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsx: "automatic",
    jsxDev: false,
    jsxImportSource: "preactend",
    // jsxFactory: "createElement",
    // jsxFragment: "Fragment",
  },
})
