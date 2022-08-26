<template>
  <div class="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-bar v-if="!route.meta.hideTabBar" class="tab_bar"></tab-bar>
    <Loading></Loading>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import tabBar from "./components/tabBar/tabBar.vue";
import Loading from "./components/loading/loading.vue";
import useLoading from "@/store/useLoading";

const route = useRoute();
const useLoadingStore = useLoading();
</script>

<style lang="less" scoped>
.app {
  padding-bottom: 80px;
  .tab_bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
