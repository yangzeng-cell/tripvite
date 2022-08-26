<template>
  <ul class="home_cata">
    <li v-for="item in catagoryList" :key="item.id">
      <img :src="item.pictureUrl" alt="" srcset="" />
      <span>{{ item.title }}</span>
    </li>
  </ul>
</template>

<script setup>
import useHome from "@/store/useHome";
import { storeToRefs } from "pinia";
const useHomeStore = useHome();
const { catagoryList } = storeToRefs(useHomeStore);
useHomeStore.fetchHomeCatagoryData();
</script>

<style lang="less" scoped>
.home_cata {
  display: flex;
  height: 80px;
  overflow-x: auto;
  margin-top: 8px;
  &::-webkit-scrollbar {
    display: none;
  }
  li {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 70px;
    font-size: 12px;
    img {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
