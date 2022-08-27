<template>
  <div class="detail_section">
    <div class="header">{{ title }}</div>
    <div class="content">
      <slot><h3>我是默认内容</h3></slot>
    </div>
    <div class="footer">
      <span>{{ footer }}</span>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  footer: {
    type: String,
  },
  title: String,
});
</script>

<style lang="less" scoped>
.detail_section {
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
  }
  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    line-height: 46px;
    height: 46px;
    color: #ff9645;
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
