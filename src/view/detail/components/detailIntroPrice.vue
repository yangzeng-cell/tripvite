<template>
  <div class="price">
    <h2 class="title">{{ priceInfo.title }}</h2>
    <div class="content">{{ priceInfo.introduction }}</div>
  </div>
</template>

<script setup>
import detailSection from "@/components/detailSection/detailSection.vue";
const props = defineProps({
  priceInfo: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.price {
  padding: 16px 12px;
  border-top: 5px solid #f2f3f4;

  .title {
    font-size: 12px;
    color: #000;
    font-weight: 700;
  }
  .content {
    margin-top: 10px;
    font-size: 12px;
    line-height: 1.5; //1.5*12
    color: #666;
  }
}
</style>
