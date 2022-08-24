<template>
  <div class="top">
    <div><slot name="left"></slot></div>
    <div><slot name="middle"></slot></div>
    <div><slot name="right"></slot></div>   
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
.top{
  display: flex;
}
</style>