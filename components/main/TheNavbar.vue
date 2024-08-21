<template>
  <ul class="navbar">
    <li v-for="item in navRoutes" :id="item.id" class="hover_li">
      <nuxt-link
        :to="item.path"
        :style="
          toggleSideSectionBtn.isShow
            ? 'padding:5px; justify-content:center'
            : null
        "
        class="dark_light_text"
      >
        <Icon :name="item.iconTitle" class="dark_light_text" />
        <small :style="toggleSideSectionBtn.isShow ? 'display:none' : null">{{
          item.title
        }}</small>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import { sideTransition } from "@/stores/sideSectionTransitions";

export default {
  name: "TheNavbar",
  data() {
    return {
      toggleSideSectionBtn: sideTransition(),
    };
  },
  computed: {
    navRoutes() {
      let routes = [
        {
          id: 1,
          title: "dashboard",
          iconTitle: "material-symbols:dashboard-customize-outline",
          path: "/",
          isShow: true,
        },
        {
          id: 2,
          title: "customer",
          iconTitle: "material-symbols:account-circle-full",
          path: "/customer",
          isShow: true,
        },
        {
          id: 3,
          title: "products",
          iconTitle: "material-symbols:shopping-cart-outline",
          path: "/products",
          isShow: true,
        },
        {
          id: 4,
          title: "payments",
          iconTitle: "fluent:payment-24-regular",
          path: "/payments",
          isShow: true,
        },
        {
          id: 5,
          title: "orders",
          iconTitle: "hugeicons:delivery-sent-02",
          path: "/orders",
          isShow: true,
        },
        {
          id: 6,
          title: "mail",
          iconTitle: "material-symbols:mail-outline-rounded",
          path: "/mail",
          isShow: true,
        },
        {
          id: 7,
          title: "chat",
          iconTitle: "material-symbols:android-chat",
          path: "/chat",
          isShow: true,
        },
        {
          id: 8,
          title: "clender",
          iconTitle: "uil:calender",
          path: "/clender",
          isShow: true,
        },
        {
          id: 8,
          title: "brands",
          iconTitle: "ic:baseline-woo-commerce",
          path: "/brands",
          isShow: true,
        },
        {
          id: 9,
          title: "settings",
          iconTitle: "material-symbols:settings",
          path: "/settings",
          isShow: true,
        },
        {
          id: 10,
          title: "logout",
          iconTitle: "material-symbols:logout",
          path: "/logout",
          isShow: true,
        },
      ];
      return routes.filter((item) => item.isShow);
    },
  },
};
</script>

<style lang="scss">
.navbar {
  padding: 10px 20px;
}
</style>
