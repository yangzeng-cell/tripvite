<template>
  <div class="search_bar">
    <div class="select_time">
      <div class="start">
        <div class="name">住</div>
        <div class="date">08.27</div>
      </div>
      <div class="end">
        <div class="name">离</div>
        <div class="date">08.28</div>
      </div>
    </div>
    <div class="content">
      <div class="keyword">关键字/位置/民宿</div>
    </div>
    <div class="right">
      <i class="icon"></i>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.search_bar {
  display: flex;
  background: #f2f4f6;
  height: 45px;
  line-height: 45px;
  border-radius: 6px;
  padding: 0 10px;
  .select_time {
    display: flex;
    flex-direction: column;

    .start {
      display: flex;
      line-height: normal;
      font-size: 10px;
      align-items: center;
      flex: 1;
      .date {
        font-size: 12px;
        color: #333333;
        margin: 0 10px 0 3px;
        font-weight: 500;
      }
    }
    .end {
      display: flex;
      line-height: normal;
      font-size: 10px;
      align-items: center;
      flex: 1;
      .date {
        position: relative;
        font-size: 12px;
        color: #333333;
        margin: 0 10px 0 3px;
        font-weight: 500;
        &::after {
          position: absolute;
          content: "";
          border: 4px solid #999;
          border-color: transparent transparent transparent #999;
          transform: rotate(45deg);
          bottom: -1px;
          right: -12px;
        }
      }
    }
  }
  .content {
    flex: 1;
    padding: 0 6px;
    text-align: left;
    border-left: 1px solid #fff;

    .keyword {
      max-width: 155px;
      font-size: 12px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      width: 24px;
      height: 24px;
      display: block;
      background: url(../../assets/img/home/home-sprite.png) -29px -151px;
      background-size: 207px 192px;
    }
  }
}
</style>
