import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
      meta: {
        hideTabBar: false,
      },
    },
    {
      path: "/home",
      component: () => import("@/view/Home/Home.vue"),
      meta: {
        hideTabBar: false,
      },
    },
    {
      path: "/favor",
      component: () => import("@/view/favor/favor.vue"),
      meta: {
        hideTabBar: false,
      },
    },
    {
      path: "/message",
      component: () => import("@/view/message/message.vue"),
      meta: {
        hideTabBar: false,
      },
    },
    {
      path: "/order",
      component: () => import("@/view/order/order.vue"),
      meta: {
        hideTabBar: false,
      },
    },
    {
      path: "/city",
      component: () => import("@/view/city/city.vue"),
      meta: {
        hideTabBar: true,
      },
    },
  ],
});

export default router;
