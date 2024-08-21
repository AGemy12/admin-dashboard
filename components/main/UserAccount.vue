<template>
  <div class="user_account_container" ref="userAccountOptions">
    <div class="user_account dark_light_text" @click="handleToggleShowHide">
      <img src="/media/user/user.png" alt="" />
      <b> Ahmad Gamal </b>
      <Icon name="material-symbols:keyboard-arrow-down-rounded" />
    </div>
    <div
      class="user_account_options dark_mode_bg"
      :style="toggleUserShowHide.userIsShow ? null : 'display:none'"
    >
      <div class="user_account_options_head">
        <img src="/media/user/user.png" alt="" />
        <p>
          <span class="dark_light_text"> Ahmad Gamal </span>
          <small class="dark_light_text">aggamal98@gmail.com</small>
        </p>
      </div>
      <ul>
        <li
          v-for="item in userLinks"
          :id="item.id"
          :key="item.id"
          class="hover_li"
        >
          <nuxt-link :to="item.path">
            <Icon
              :name="item.iconTitle"
              style="color: black"
              class="dark_light_text"
            />
            <small class="dark_light_text">{{ item.title }}</small>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { showHiddenHeaderOptions } from "~/stores/showHiddenHeaderOptions";
export default {
  data() {
    return {
      toggleUserShowHide: showHiddenHeaderOptions(),
    };
  },
  methods: {
    handleToggleShowHide() {
      this.toggleUserShowHide.toggleUserAcount();
    },
    handleClickOutsideEvent(e) {
      if (
        this.toggleUserShowHide.userIsShow &&
        !this.$refs.userAccountOptions.contains(e.target)
      ) {
        this.toggleUserShowHide.userIsShow = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutsideEvent);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutsideEvent);
  },
  computed: {
    userLinks() {
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
.user_account_container {
  position: relative;
  .user_account {
    @include flex(center, center, row, 5px);
    cursor: pointer;
    img {
      width: 45px;
    }
    span {
      font-size: 20px;
    }
  }
  .user_account_options {
    @include absolute(calc(100% + 20px), 0);
    width: 300px;
    background-color: white;
    box-shadow: $shadow;
    border-radius: 5px;
    .user_account_options_head {
      @include flex(start, center, row, 5px);
      border-bottom: 2px solid rgba(0, 0, 0, 0.05);
      padding: 10px 20px;
      img {
        width: 40px;
      }
      p {
        font-size: 15px;
        line-height: 1.2;
        @include flex(center, start, column, 0px);
        small {
          color: rgba(0, 0, 0, 0.7);
        }
      }
    }
    ul {
      padding: 10px 20px;
    }
  }
}
</style>
