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
    <div class="date_range" @click="show = true">
      <div class="start"><span>入住</span><span>09月15日</span></div>
      <div class="count">共1晚</div>
      <div class="end"><span>离店</span><span>09月16日</span></div>
    </div>
    <!-- 价格/人数选择 -->
    <div class="price_counter">
      <div class="price">价格不限</div>
      <div class="counter">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="keyword">关键字/位置/民宿名</div>
    <!-- 热门建议 -->
    <ul class="hot_suggest">
      <li
        v-for="(item, index) of useHomeStore.hotSuggest"
        :key="index"
        :style="{
          color: item.tagText.color,
          background: item.tagText.background.color,
        }"
      >
        {{ item.tagText.text }}
      </li>
    </ul>
    <!-- 弹出日历 -->
    <van-calendar v-model:show="show" type="range" @confirm="onConfirm" />
  </div>
</template>

<script setup>
import useHome from "@/store/useHome";
import { ref } from "vue";
const useHomeStore = useHome();
const show = ref(false);
useHomeStore.fetchHotSuggestData();
const onConfirm = (values) => {
  console.log(values);
  show.value = !show.value;
};
</script>

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
  .price_counter {
    display: flex;
    justify-content: space-between;
    height: 44px;
    align-items: center;
    font-size: 14px;
    color: #999999;
  }
  .keyword {
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    color: #999999;
  }
  .hot_suggest {
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    li {
      padding: 4px 8px;
      margin: 4px;
      border-radius: 14px;
    }
  }
}
</style>
