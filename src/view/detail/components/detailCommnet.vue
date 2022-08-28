<template>
  <div class="comment">
    <detail-section title="热门评论" :footer="totalCount"></detail-section>
  </div>
</template>

<script setup>
import detailSection from "@/components/detailSection/detailSection.vue";
import { computed } from "vue";

const props = defineProps({
  comment: {
    type: Object,
    default: () => ({}),
  },
});

const totalCount = computed(() => {
  return `查看全部${props.comment.totalCount}条评论`;
});
</script>

<style lang="less" scoped>
.comment {
}
</style>
