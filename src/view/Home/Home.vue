<template>
  <div class="home" ref="homeRef">
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
    <div v-if="isShowSearchBar" class="search">
      <SearchBar></SearchBar>
    </div>
  </div>
</template>

<script setup>
import TopBar from "@/components/topBar/topBar.vue";
import homeSearchBox from "./components/homeSearchBox.vue";
import homeCatagory from "./components/homeCatagory.vue";
import useHome from "@/store/useHome";
import HotList from "./components/hotList.vue";
import useScroll from "@/hook/useScroll";
import { computed, onActivated, ref, watch } from "vue";
import SearchBar from "../../components/searchBar/searchBar.vue";
const homeRef = ref();
const useHomeStore = useHome();
const { attachBottom, scrollTop } = useScroll(homeRef);
watch(attachBottom, (newVal) => {
  if (newVal) {
    useHomeStore.fetchHotListData();
    attachBottom.value = false;
  }
});

const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360;
});
useHomeStore.fetchHotListData();

// 在home切换的时候,保存原来的位置,切换回来的时候
onActivated(() => {
  homeRef?.value?.scrollTo({
    top: scrollTop.value,
    behavior: "smooth",
  });
});
</script>

<style lang="less" scoped>
.home {
  // 必须设置高度,否则无法监听滚动
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 60px;
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
  .search {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 16px 16px 10px;
    background: #fff;
    color: #999;
  }
}
</style>
