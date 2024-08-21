import { defineStore } from "pinia";

export const sideTransition = defineStore("sideTransition", {
  state: () => ({
    isShow: false,
  }),
  actions: {
    toggleShow() {
      this.isShow = !this.isShow;
    },
  },
});
