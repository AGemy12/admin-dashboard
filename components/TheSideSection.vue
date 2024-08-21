<template>
  <section
    class="side-section dark_mode_bg"
    :style="toggleSideSectionBtn.isShow ? 'width:70px' : null"
  >
    <ShowHiddenSideSectionBtn />
    <Logo />
    <TheNavbar />
  </section>
</template>

<script>
import { sideTransition } from "@/stores/sideSectionTransitions";
import Logo from "@/components/main/Logo.vue";
import TheNavbar from "./main/TheNavbar.vue";
import ShowHiddenSideSectionBtn from "./main/ShowHiddenSideSectionBtn.vue";
export default {
  data() {
    return {
      toggleSideSectionBtn: sideTransition(),
      darkLightState: lightDarkModes(),
    };
  },
  components: {
    Logo,
    TheNavbar,
    ShowHiddenSideSectionBtn,
  },
};
</script>

<style lang="scss">
.side-section {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  background-color: $light-color;
  box-shadow: $shadow;
  z-index: $a-class-z;
  transition: $transition;
  @media (max-width: 450px) {
    transform: translateX(-100%);
  }
}
</style>
