<template>
  <div class="home">
    <TopBar>
      <template #middle>
        <div class="header">宏源旅通</div>
      </template>
    </TopBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box></home-search-box>
    <home-catagory></home-catagory>
    <HotList></HotList>
  </div>
</template>

<script setup>
import TopBar from "@/components/topBar/topBar.vue";
import homeSearchBox from "./components/homeSearchBox.vue";
import homeCatagory from "./components/homeCatagory.vue";
import useHome from "@/store/useHome";
import HotList from "./components/hotList.vue";
import useScroll from "@/hook/useScroll";

const useHomeStore = useHome();
useHomeStore.fetchHotListData(1);
useScroll();
</script>

<style lang="less" scoped>
.home {
  .header {
    text-align: center;
    width: 100vw;
    height: 47px;
    line-height: 47px;
    font-weight: bold;
    color: #ff9854;
  }
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
