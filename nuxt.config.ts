// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@nuxt/eslint",
    "shadcn-nuxt",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
  ],

  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: "@/components/ui",
  },

  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },

  googleFonts: {
    families: {
      Raleway: [300, 400, 500, 600, 700],
    },
  },
});
