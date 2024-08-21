<template>
  <div>
    <nuxt-layout>
      <v-app
        class="pages-content"
        :style="
          toggleSideSectionBtn.isShow
            ? 'width: calc(100% - 70px); left:70px'
            : null
        "
      >
        <NuxtPage />
      </v-app>
    </nuxt-layout>
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
  watch: {
    "darkLightState.isDark"(newVal) {
      this.updateClassForElements(newVal);
    },
  },
  methods: {
    updateClassForElements(isDark) {
      // جمع جميع العناصر التي تحتوي على نفس الكلاس
      let backgroundsChange = document.querySelectorAll(".dark_mode_bg");
      let textChange = document.querySelectorAll(".dark_light_text");
      let bgInDark = document.querySelectorAll(".hover_li");

      if (isDark) {
        document.body.style.backgroundColor = "#020d1a";
        document.querySelector(".pages-content").style.backgroundColor =
          "#020d1a";
      } else {
        document.querySelector(".pages-content").style.backgroundColor =
          "#ffff";
      }

      backgroundsChange.forEach((element) => {
        if (isDark) {
          element.classList.add("dark_bg");
        } else {
          element.classList.remove("dark_bg");
        }
      });
      textChange.forEach((element) => {
        if (isDark) {
          element.classList.add("light_text");
        } else {
          element.classList.remove("light_text");
        }
      });
      bgInDark.forEach((element) => {
        if (isDark) {
          element.addEventListener("mouseover", () => {
            element.classList.add("bg_in_dark_mode");
          });
          element.addEventListener("mouseout", () => {
            element.classList.remove("bg_in_dark_mode");
          });
        } else {
          element.addEventListener("mouseover", () => {
            element.classList.remove("bg_in_dark_mode");
          });
        }
      });
    },
  },
  mounted() {
    this.updateClassForElements(this.darkLightState.isDark);
  },
};
</script>

<style lang="scss">
.pages-content {
  @include absolute(70px, 300px, 0);
  width: 100%;
  transition: $transition;
  @media (max-width: 450px) {
    width: 100%;
    left: 0;
  }
}
</style>
