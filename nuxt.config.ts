import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/sass/main.scss"],
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxt/icon",
    "@pinia/nuxt",
    //...
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ` 
          @import "@/assets/sass/abstracts/_mixins.scss";
          @import "@/assets/sass/abstracts/_variables.scss";
          `,
        },
      },
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
