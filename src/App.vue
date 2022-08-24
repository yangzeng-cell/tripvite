<template>
  <div class="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-bar class="tab_bar"></tab-bar>
  </div>
</template>

<script setup>
import tabBar from "./components/tabBar/tabBar.vue";
</script>

<style lang="less" scoped>
.app {
  .tab_bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
