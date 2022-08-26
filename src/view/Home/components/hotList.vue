<template>
  <div class="hotlist">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="item of hotList" :key="item.data.houseId">
        <hot-list-item class="item" :item="item"></hot-list-item>
      </template>
    </div>
  </div>
</template>

<script setup>
import useHome from "@/store/useHome";
import { storeToRefs } from "pinia";
import hotListItem from "@/components/hotListItem/hotListItem.vue";

const useHomeStore = useHome();

const { hotList } = storeToRefs(useHomeStore);
</script>

<style lang="less" scoped>
.hotlist {
  padding: 10px 8px;
  .title {
    font-size: 22px;
    padding: 10px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    .item {
    }
  }
}
</style>
