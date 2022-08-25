<template>
  <div class="city_group">
    <van-index-bar :sticky="false" :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="hot_list">
        <ul>
          <li
            v-for="item in groupData.hotCities"
            :key="item.cityId"
            @click="getDest(item)"
          >
            {{ item.cityName }}
          </li>
        </ul>
      </div>

      <template v-for="(item, index) in groupData.cities" :key="index">
        <van-index-anchor :index="item.group" />
        <template v-for="val in item.cities" :key="val.cityId">
          <van-cell :title="val.cityName" @click="getDest(val)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed, toRefs } from "vue";
import useCity from "@/store/useCity";
import { useRouter } from "vue-router";
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});
const useCityStore = useCity();
const router = useRouter();
const { groupData } = toRefs(props);
const indexList = computed(() => {
  const list = groupData.value.cities?.map((item) => item.group);
  list.unshift("#");
  return list;
});

const getDest = (value) => {
  console.log(value.cityName);
  useCityStore.currentCity = value.cityName;
  router.back();
};
</script>

<style lang="less" scoped>
.city_group {
  padding: 0 16px;
  .hot_list {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        height: 28px;
        width: 70px;
        margin: 6px 0;
        text-align: center;
        line-height: 28px;
        font-size: 12px;
        border-radius: 12px;
        background-color: #fff4ec;
      }
    }
  }
}
</style>
