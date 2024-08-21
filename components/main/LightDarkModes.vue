<template>
  <div class="modes">
    <div class="current_mode" @click="handleDarkLightState">
      <Icon
        :class="darkLightState.isDark ? 'light_text' : null"
        :name="
          darkLightState.isDark
            ? 'tdesign:mode-dark'
            : 'material-symbols:sunny-outline-rounded'
        "
      />
    </div>
  </div>
</template>

<script>
import { lightDarkModes } from "@/stores/lightDarkModes";

export default {
  data() {
    return {
      darkLightState: lightDarkModes(),
    };
  },
  methods: {
    handleDarkLightState() {
      this.darkLightState.lightDarkToggle();
    },
  },
};
</script>

<style lang="scss" scoped>
.modes {
  .current_mode {
    transition: $transition;
    cursor: pointer;
    span {
      display: block;
      font-size: 20px;
      transition: $transition;
      color: $dark-color;
    }
  }
}
</style>
