import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsx: "automatic",
    jsxDev: false,
    jsxImportSource: "@jaeseokim/preactend",
    // jsxFactory: "createElement",
    // jsxFragment: "Fragment",
  },
})
