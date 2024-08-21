import { defineStore } from "pinia";

export const lightDarkModes = defineStore("lightDarkModes", {
  state: () => ({
    isDark: false,
  }),
  actions: {
    lightDarkToggle() {
      this.isDark = !this.isDark;
    },
  },
});
