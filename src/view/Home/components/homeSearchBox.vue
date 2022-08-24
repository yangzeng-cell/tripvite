<template>
  <div class="home_search">
    <!-- 位置信息 -->
    <div class="loaction">
      <div class="city">广州</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <!-- 日期范围 -->
    <div class="date_range">
      <div class="start"><span>入住</span><span>09月15日</span></div>
      <div class="count">共1晚</div>
      <div class="end"><span>离店</span><span>09月16日</span></div>
    </div>
    <!-- 价格/人数选择 -->
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.home_search {
  padding: 0 20px;
  .loaction {
    display: flex;
    justify-content: space-between;
    height: 44px;
    line-height: 44px;
    .city {
      font-size: 15px;
    }
    .position {
      width: 74px;
      display: flex;
      align-items: center;
      img {
        width: 18px;
        height: 18px;
        margin-left: 5px;
      }
      .text {
        font-size: 12px;
      }
    }
  }
  .date_range {
    display: flex;
    height: 44px;
    justify-content: space-between;
    align-items: center;
    .start {
      span {
        display: block;
        &:first-child {
          font-size: 12px;
          color: #999;
        }
      }
    }
    .count {
      font-size: 12px;
      color: #666;
    }
    .end {
      span {
        display: block;
        &:first-child {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}
</style>
