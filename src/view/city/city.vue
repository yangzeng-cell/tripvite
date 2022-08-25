<template>
  <div class="city">
    <div class="top">
      <van-search
        v-model="searchValue"
        shape="round"
        show-action
        placeholder="请输入搜索关键词"
        @cancel="cancelClick"
        background="#ff9854"
      />
      <van-tabs v-model:active="activeTab" title-active-color="#ff9854">
        <template v-for="(item, key) in cityDate" :key="key">
          <van-tab :title="item.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key) in cityDate" :key="key">
        <cityGroup v-show="activeTab === key" :groupData="value"></cityGroup>
      </template>
    </div>
  </div>
</template>

<script setup>
import useCity from "@/store/useCity";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import cityGroup from "./components/cityGroup.vue";
import { useRouter } from "vue-router";
const useCityStore = useCity();
const router = useRouter();
const activeTab = ref();
const searchValue = ref("");
const { cityDate } = storeToRefs(useCityStore);

useCityStore.getCityDate();

const cancelClick = () => {
  router.back();
};
</script>

<style lang="less" scoped>
.city {
  :deep(.van-icon) {
    color: #ff9854;
    font-weight: bold;
  }
  :deep(.van-tabs__line) {
    background: #ff9854;
  }
  .top {
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
