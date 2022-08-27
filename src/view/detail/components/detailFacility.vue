<template>
  <div class="facility">
    <div class="section">
      <div class="header">房屋设施</div>
      <div class="content">
        <div class="facility-inner"></div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  facility: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.facility {
  .section {
    padding: 0 15px;
    margin-top: 12px;
    border-top: 5px solid #f2f3f4;
    background-color: #fff;
    .header {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #eee;
      font-size: 20px;
      color: #333;
      font-weight: 600;
    }
    .content {
      padding: 8px 0;
      .facility-inner {
        padding: 5px 0;
        border-radius: 6px;
        font-size: 12px;
        background-color: #f7f9fb;
      }
    }
  }
}
</style>
