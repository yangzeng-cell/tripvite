<template>
  <div class="detail">
    <top-bar class="top_bar">
      <template #left>
        <div class="left" @click="goBack">
          <van-icon name="arrow-left" />
          <span>旅途</span>
        </div>
      </template>
      <template #middle>
        <div class="middle">房屋详情</div>
      </template>
    </top-bar>
    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <detail-swiper
        :swiper-data="mainPart?.topModule?.housePicture?.housePics"
      ></detail-swiper>
      <detail-info :info="mainPart?.topModule"></detail-info>
      <detail-facility
        :facility="mainPart?.dynamicModule?.facilityModule?.houseFacility"
      ></detail-facility>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import topBar from "@/components/topBar/topBar.vue";
import detailSwiper from "./components/detailSwiper.vue";
import detailInfo from "./components/detailInfo.vue";
import detailFacility from "./components/detailFacility.vue";
import useDetail from "@/store/useDetail";
import { storeToRefs } from "pinia";
import { computed } from "vue";
const route = useRoute();
const router = useRouter();
const useDetailStore = useDetail();

const { houseDetail } = storeToRefs(useDetailStore);

const mainPart = computed(() => {
  return houseDetail.value.mainPart;
});
useDetailStore.fetchhouseDetailData(route.params.houseId);
const goBack = () => {
  router.back();
};
</script>

<style lang="less" scoped>
.detail {
  .top_bar {
    height: 46px;
    display: block;
    text-align: center;
    line-height: 46px;
    position: relative;
    .middle {
      font-size: 16px;
      color: #323232;
    }
    .left {
      position: absolute;
      left: 0;
      height: 100%;
      width: 48px;
      padding: 0 16px;
      font-size: 14px;
      color: #ff9854;
    }
  }
}
</style>
