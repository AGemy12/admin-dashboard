<template>
  <div class="notifications_container" ref="notifiVisible">
    <div class="notifications" @click="handleToggleNotifiShowHide">
      <Icon
        name="ic:round-notifications"
        :class="darkLightState.isDark ? 'light_text' : null"
      />
    </div>
    <div
      class="notifications_items dark_mode_bg"
      :style="toggleNotifiShowHide.notifiIsShow ? null : 'display:none'"
    >
      <div class="notifications_items_head">
        <h3 class="dark_light_text">notifications (15)</h3>
      </div>
      <ul>
        <li v-for="item in NotifLinks" :id="item.id" class="hover_li">
          <a href="#">
            <img src="/media/user/user.png" alt="" />
            <div class="notifications_items_item">
              <h5 class="dark_light_text">title of notification</h5>
              <span class="dark_light_text"> ahmad send to you message </span>
            </div>
          </a>
        </li>
      </ul>
      <div class="notification_b">
        <a href="#">
          <button class="dark_light_text hover_li">
            see all notifications
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { showHiddenHeaderOptions } from "@/stores/showHiddenHeaderOptions";
import { lightDarkModes } from "@/stores/lightDarkModes";

export default {
  data() {
    return {
      toggleNotifiShowHide: showHiddenHeaderOptions(),
      darkLightState: lightDarkModes(),
    };
  },
  methods: {
    handleToggleNotifiShowHide() {
      this.toggleNotifiShowHide.toggleNotifi();
    },
    handleHideAtClickOutside(e) {
      if (
        this.toggleNotifiShowHide.notifiIsShow &&
        !this.$refs.notifiVisible.contains(e.target)
      ) {
        this.toggleNotifiShowHide.notifiIsShow = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleHideAtClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleHideAtClickOutside);
  },
  computed: {
    NotifLinks() {
      let links = [
        {
          id: 1,
          title: "view profile",
          iconTitle: "material-symbols:lab-profile",
          path: "/profile",
          isShow: true,
        },
        {
          id: 2,
          title: "Account Settings",
          iconTitle: "material-symbols:settings",
          path: "/account-settings",
          isShow: true,
        },
        {
          id: 3,
          title: "Logout",
          iconTitle: "material-symbols:shopping-cart-outline",
          path: "/",
          isShow: true,
        },
      ];
      return links.filter((item) => item.isShow);
    },
  },
};
</script>

<style lang="scss">
.notifications_container {
  position: relative;
  @include customWidthHeight(45px, 45px, 20px, 20px);
  @include flex(center, center);
  .notifications {
    @include flex(center, center, row, 5px);
    cursor: pointer;
    span {
      font-size: 20px;
      transition: $transition;
    }
  }
  .notifications_items {
    @include absolute(calc(100% + 20px), 0);
    width: 350px;
    background-color: $light-color;
    box-shadow: $shadow;
    border-radius: 5px;
    .notifications_items_head {
      @include flex(start, center, row, 5px);
      border-bottom: 2px solid rgba(0, 0, 0, 0.05);
      padding: 10px 20px;
      h3 {
        font-size: 16px;
        text-transform: capitalize;
        color: $main-color;
      }
    }
    ul {
      padding: 10px 20px;
      li {
        a {
          @include flex(start, center, row, 10px);
          &:hover .notifications_items_item h5 {
            color: $light-color;
          }
          img {
            width: 45px;
          }
          .notifications_items_item {
            line-height: 1;
            h5 {
              font-size: 15px;
              font-family: $semi_bold_font;
              color: $main-color;
            }
            span {
              font-size: 12px;
            }
          }
        }
      }
    }
    .notification_b {
      @include fitWidth($left: auto, $right: auto);
      margin-top: 10px;
      margin-bottom: 20px;
      a {
        display: block;
        button {
          text-transform: capitalize;
          padding: 7px 20px;
          background-color: transparent;
          border: 1px solid $main-color;
          font-size: 14px;
          transition: $transition;
          &:hover {
            background-color: $main-color;
            color: $light-color;
          }
        }
      }
    }
  }
}
</style>
