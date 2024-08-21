<template>
  <div
    class="show-hodden-side"
    @click="handletoggleSideSectionBtn"
    :style="toggleSideSectionBtn.isShow ? 'margin-bottom : 20px' : null"
  >
    <Icon
      :name="
        toggleSideSectionBtn.isShow
          ? 'material-symbols-light:arrow-circle-right'
          : 'material-symbols-light:arrow-circle-left'
      "
      :class="darkLightState.isDark ? 'light_text' : null"
    />
  </div>
</template>

<script>
import { sideTransition } from "@/stores/sideSectionTransitions";
import { lightDarkModes } from "@/stores/lightDarkModes";

export default {
  data() {
    return {
      toggleSideSectionBtn: sideTransition(),
      darkLightState: lightDarkModes(),
    };
  },
  methods: {
    handletoggleSideSectionBtn() {
      this.toggleSideSectionBtn.toggleShow();
    },
  },
};
</script>

<style lang="scss">
.show-hodden-side {
  @include customWidthHeight(30px, 30px, 20px);
  @include flex(center, center);
  margin-top: 20px;
  border-radius: 50%;
  cursor: pointer;
  span {
    font-size: 40px;
    flex-shrink: 0;
    color: $dark-color;
  }
}
</style>
