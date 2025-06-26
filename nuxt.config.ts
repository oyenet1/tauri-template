// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  ssr: false,
  // Enables the development server to be discoverable by other devices when running on iOS physical devices
  devServer: { host: process.env.TAURI_DEV_HOST || "localhost" },
  vite: {
    // Better support for Tauri CLI output
    clearScreen: false,
    // Enable environment variables
    // Additional environment variables can be found at
    // https://v2.tauri.app/reference/environment-variables/
    envPrefix: ["VITE_", "TAURI_"],
    server: {
      // Tauri requires a consistent port
      strictPort: true,
      // Watch options to prevent EMFILE errors
      watch: {
        ignored: [
          "**/src-tauri/target/**",
          "**/src-tauri/gen/**",
          "**/node_modules/**",
          "**/.git/**",
        ],
      },
    },
  },

  // Nitro configuration to exclude Tauri directories
  nitro: {
    storage: {
      // Prevent watching large directories
    },
  },

  // Watch options to prevent EMFILE errors
  watch: [
    "~/components/**/*",
    "~/composables/**/*",
    "~/layouts/**/*",
    "~/pages/**/*",
    "~/assets/**/*",
    "~/utils/**/*",
  ],

  // Ignore patterns for file watching
  ignore: [
    "**/src-tauri/target/**",
    "**/src-tauri/gen/**",
    "**/node_modules/**",
    "**/.git/**",
    "**/dist/**",
    "**/build/**",
  ],

  modules: [
    "@nuxt/image",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@nuxt/scripts",
    "@nuxtjs/device",
  ],
  css: ["~/assets/css/main.css"],
  app: {
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
    layoutTransition: {
      name: "slide",
      mode: "out-in",
    },
  },
});
