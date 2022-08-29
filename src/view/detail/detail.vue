<template>
  <div class="detail top_page" ref="detailRef">
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
      <detail-info
        name="描述"
        :ref="getSectionRef"
        :info="mainPart?.topModule"
      ></detail-info>
      <detail-facility
        name="设施"
        :ref="getSectionRef"
        :facility="mainPart?.dynamicModule?.facilityModule?.houseFacility"
      ></detail-facility>
      <detail-landload
        name="房东"
        :ref="getSectionRef"
        :landlord="mainPart.dynamicModule.landlordModule"
      ></detail-landload>
      <detail-comment
        name="评论"
        :ref="getSectionRef"
        :comment="mainPart.dynamicModule.commentModule"
      ></detail-comment>
      <detail-notice
        name="须知"
        :ref="getSectionRef"
        :notice="mainPart.dynamicModule.rulesModule.orderRules"
      ></detail-notice>
      <detail-map
        name="周边"
        :ref="getSectionRef"
        :position="mainPart.dynamicModule.positionModule"
      ></detail-map>
      <detail-intro-price
        :priceInfo="mainPart.introductionModule"
      ></detail-intro-price>
      <detail-footer></detail-footer>
    </div>
    <tab-controller
      v-if="showTabControl"
      @clickTab="clickTab"
      class="tab"
      :names="namesList"
    ></tab-controller>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import topBar from "@/components/topBar/topBar.vue";
import detailSwiper from "./components/detailSwiper.vue";
import detailInfo from "./components/detailInfo.vue";
import detailFacility from "./components/detailFacility.vue";
import detailLandload from "./components/detailLandload.vue";
import detailComment from "./components/detailCommnet.vue";
import detailNotice from "./components/detailNotice.vue";
import detailMap from "./components/detailMap.vue";
import useDetail from "@/store/useDetail";
import detailIntroPrice from "./components/detailIntroPrice.vue";
import detailFooter from "./components/detailFooter.vue";
import tabController from "@/components/tabController/tabController.vue";
import useScroll from "@/hook/useScroll";
import { storeToRefs } from "pinia";
import { computed, ref, watch } from "vue";
const route = useRoute();
const router = useRouter();
const useDetailStore = useDetail();
const detailRef = ref();
const names = ref({});
const { houseDetail } = storeToRefs(useDetailStore);
const { scrollTop } = useScroll(detailRef);
const showTabControl = computed(() => {
  return scrollTop.value >= 300;
});
const mainPart = computed(() => {
  return houseDetail.value.mainPart;
});

const getSectionRef = (el) => {
  const name = el.$el.getAttribute("name");
  console.log(name, "-------------");
  names.value[name] = el.$el;
  console.log(names.value);
};

const clickTab = (index) => {
  console.log(index, namesList);
  const key = Object.keys(names.value)[index];
  const el = names.value[key];
  let instance = el.offsetTop;
  console.log(instance);
  if (index !== 0) {
    instance = instance - 44;
  }
  console.log(detailRef.value);
  detailRef.value.scrollTo({
    top: instance,
    behavior: "smooth",
  });
};
const namesList = computed(() => Object.keys(names.value));
useDetailStore.fetchhouseDetailData(route.params.houseId);
const goBack = () => {
  router.back();
};

watch(scrollTop, (newVal) => {});
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
  .tab {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    background-color: #fff;
  }
}
</style>
