<template>
  <div class="home_search">
    <!-- 位置信息 -->
    <div class="loaction">
      <div class="city" @click="changeCityPage">
        {{ useCityStore.currentCity }}
      </div>
      <div class="position" @click="getPosition">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <!-- 日期范围 -->
    <div class="date_range" @click="show = true">
      <div class="start">
        <span>入住</span><span>{{ startTime }}</span>
      </div>
      <div class="count">共{{ stayCount }}晚</div>
      <div class="end">
        <span>离店</span><span>{{ endTime }}</span>
      </div>
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
import useCity from "@/store/useCity";
import { getFormatterDate } from "@/utils/getFormatterDate";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const useHomeStore = useHome();
const useCityStore = useCity();
const show = ref(false);
const { startTime, endTime, stayCount } = storeToRefs(useHomeStore);
useHomeStore.fetchHotSuggestData();

const onConfirm = (values) => {
  console.log(values[0]);
  show.value = !show.value;
  startTime.value = getFormatterDate(values[0], "MM月dd日");
  endTime.value = getFormatterDate(values[1], "MM月dd日");
  stayCount.value = getStayCount(values[0], values[1]);
};

const getStayCount = (start, end) => {
  const during =
    (new Date(end).getTime() - new Date(start).getTime()) / (3600 * 24 * 1000);
  return during;
};

const changeCityPage = () => {
  router.push("/city");
};

const getPosition = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log("获取位置：" + JSON.stringify(res));
    },
    (error) => {
      console.log(error);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    }
  );
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
