<template>
  <header
    class="dashboard_header dark_mode_bg"
    :style="
      toggleSideSectionBtn.isShow
        ? 'width: calc(100% - 70px);'
        : 'width: calc(100% - 300px);'
    "
  >
    <div class="dashboard_header_bars">
      <Icon name="ant-design:bars-outlined" />
    </div>
    <div class="dashboard_header_features">
      <LightDarkModes />
      <NotificationsHeader />
      <UserAccount />
    </div>
  </header>
</template>

<script>
import { lightDarkModes } from "@/stores/lightDarkModes";
import LightDarkModes from "./main/LightDarkModes.vue";
import NotificationsHeader from "./main/NotificationsHeader.vue";
import UserAccount from "./main/UserAccount.vue";
import { sideTransition } from "@/stores/sideSectionTransitions";
export default {
  components: {
    UserAccount,
    NotificationsHeader,
    LightDarkModes,
  },
  data() {
    return {
      toggleSideSectionBtn: sideTransition(),
      darkLightState: lightDarkModes(),
    };
  },
};
</script>

<style lang="scss">
.dashboard_header {
  position: fixed;
  top: 0;
  right: 0;
  height: 70px;
  background-color: $light-color;
  box-shadow: $shadow;
  z-index: calc($a-class-z - 1);
  padding: 0 20px;
  transition: $transition;
  @include flex(end, center, row);
  @media (max-width: 450px) {
    width: 100% !important;
    @include flex(space-between, center, row);
  }
  .dashboard_header_bars {
    @include flex(center, center, row);
    display: none;
    cursor: pointer;
    @media (max-width: 450px) {
      display: block;
    }
    span {
      font-size: 25px;
      &:hover {
        color: $main-color;
      }
    }
  }
  .dashboard_header_features {
    @include flex(space-between, center, row);
  }
}
</style>
