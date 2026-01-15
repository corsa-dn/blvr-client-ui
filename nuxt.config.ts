import { resolve } from "node:path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  // target: "static",

  // ssr: false,
  ssr: true,

  runtimeConfig: {
    // apiBase: process.env.API_URL ?? "http://localhost:3001",
    public: {},
  },

  modules: [
    // "@nuxt/content",
    "@nuxt/hints",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@pinia/nuxt",
    "@formkit/auto-animate/nuxt",
  ],

  css: ["~/assets/styles/nuxt-ui.css", "~/assets/styles/app.css"],

  fonts: {
    families: [
      {
        name: "Cera Pro",
        src: "/fonts/CeraPro/CeraPro-Regular.woff2",
        weight: "400",
        style: "normal",
        fallbacks: ["system-ui", "sans-serif"],
      },
      {
        name: "Cera Pro",
        src: "/fonts/CeraPro/CeraPro-Medium.woff2",
        weight: "500",
        style: "normal",
        fallbacks: ["system-ui", "sans-serif"],
      },

      {
        name: "Cera Pro",
        src: "/fonts/CeraPro/CeraPro-Bold.woff2",
        weight: "600",
        style: "normal",
        fallbacks: ["system-ui", "sans-serif"],
      },

      {
        name: "Cera Pro",
        src: "/fonts/CeraPro/CeraPro-Black.woff2",
        weight: "700",
        style: "normal",
        fallbacks: ["system-ui", "sans-serif"],
      },

      {
        name: "Klein",
        src: "/fonts/Klein/Klein-Regular.otf",
        weight: "400",
        style: "normal",
        fallbacks: ["system-ui", "sans-serif"],
      },

      {
        name: "Klein",
        src: "/fonts/Klein/Klein-Medium.otf",
        weight: "500",
        style: "normal",
        fallbacks: ["system-ui", "sans-serif"],
      },
      {
        name: "Klein",
        src: "/fonts/Klein/Klein-Bold.otf",
        weight: "700",
        style: "normal",
        fallbacks: ["system-ui", "sans-serif"],
      },
      {
        name: "Xolonium",
        src: "/fonts/Xolonium/Xolonium-Regular.otf",
        weight: "400",
        style: "normal",
        fallbacks: ["system-ui", "sans-serif"],
      },
      {
        name: "Xolonium",
        src: "/fonts/Xolonium/Xolonium-Bold.otf",
        weight: "700",
        style: "normal",
        fallbacks: ["system-ui", "sans-serif"],
      },
    ],
  },

  colorMode: {
    // preference: "system",
    preference: "light", // default theme
    fallback: "light", // if user has no preference selected
    classSuffix: "", // важно для Nuxt UI

    storageKey: "bulvar-ui-theme", // can use custom name
  },

  // ui: {
  //   icons: ["heroicons", "phosphor"],
  // },

  pinia: {
    autoImports: ["defineStore", "storeToRefs"],
  },

  routeRules: {
    "/": { prerender: true },
    "/contacts": { prerender: true },
    "/deals/**": { ssr: false },
  },

  nitro: {
    // preset: "netlify-static",
    // preset: "static",

    prerender: {
      crawlLinks: false,
    },

    publicAssets: [
      { dir: resolve("public") },
      { dir: resolve("app/assets/fonts"), baseURL: "/fonts" },
    ],
  },
});
