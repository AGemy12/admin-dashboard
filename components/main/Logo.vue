<template>
  <div
    class="logo"
    :style="toggleSideSectionBtn.isShow ? 'display:none' : null"
  >
    <nuxt-link to="/">
      <img
        :src="
          darkLightState.isDark
            ? '/media/white-logo.svg'
            : '/media/blue-logo.svg'
        "
      />
    </nuxt-link>
  </div>
</template>

<script>
import { lightDarkModes } from "@/stores/lightDarkModes";
import { sideTransition } from "@/stores/sideSectionTransitions";
export default {
  data() {
    return {
      toggleSideSectionBtn: sideTransition(),
      darkLightState: lightDarkModes(),
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  @include fitWidth;
  padding-top: 20px;
  padding-bottom: 20px;
  a {
    display: block;
    img {
      width: 150px;
    }
  }
}
</style>
