<template>
  <div class="notice">
    <detail-section title="预定须知">
      <div class="notice_inner">
        <div class="item" v-for="(item, index) of notice" :key="index">
          <div class="title">{{ item.title }}</div>
          <div class="introduction">{{ item.introduction }}</div>
          <div class="tips" v-if="item?.tips?.length > 0">查看说明</div>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from "@/components/detailSection/detailSection.vue";

const props = defineProps({
  notice: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.notice {
  .notice_inner {
    .item {
      display: flex;
      margin: 10px 0 20px;
      font-size: 12px;
      .title {
        width: 64px;
        color: #666;
      }
      .introduction {
        flex: 1;
      }
    }
  }
}
</style>
