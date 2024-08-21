import { defineStore } from "pinia";

export const showHiddenHeaderOptions = defineStore("showHiddenHeaderOptions", {
  state: () => ({
    userIsShow: false,
    notifiIsShow: false,
  }),
  actions: {
    toggleUserAcount() {
      this.userIsShow = !this.userIsShow;
    },
    toggleNotifi() {
      this.notifiIsShow = !this.notifiIsShow;
    },
  },
});
