<template>
  <div class="app">
    <!-- 这种写法不推荐了 -->
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
    <!-- vurrouter6的写法 -->
    <router-view v-slot="props">
      <keep-alive>
        <component :is="props.Component" />
      </keep-alive>
    </router-view>
    <tab-bar v-show="!route.meta.hideTabBar" class="tab_bar"></tab-bar>
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
