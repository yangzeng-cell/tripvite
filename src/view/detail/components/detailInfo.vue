<template>
  <div class="info">
    <div class="houseName">{{ info.houseName }}</div>
    <div class="tags">
      <template v-for="item in info.houseTags" :key="item.tagCode">
        <span
          class="item"
          v-if="item.tagText"
          :style="{
            background: item?.tagText?.background.color,
            color: item?.tagText?.color,
          }"
          >{{ item?.tagText?.text }}</span
        >
      </template>
    </div>
    <div class="extras comment">
      <div class="left">
        <span class="overall">{{ info?.commentBrief?.overall }}</span>
        <span class="scoreTitle">{{ info?.commentBrief?.scoreTitle }}</span>
        <span class="commentBrief">{{ info?.commentBrief?.commentBrief }}</span>
      </div>
      <div class="right">
        <span>{{ info?.commentBrief?.totalCount }}条评论</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="extras position">
      <div class="left">{{ info?.nearByPosition?.address }}</div>
      <div class="right">
        <span> 地图·周边 </span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Detail from "../detail.vue";
const props = defineProps({
  info: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.info {
  background: #fff;
  padding: 16px;
  .houseName {
    font-weight: 700;
    font-size: 20px;
    color: #333;
    text-align: justify;
    line-height: 24px;
    overflow: hidden;
    margin-bottom: 6px;
  }
  .tags {
    margin: 10px 0;
    .item {
      display: inline-block;
      font-size: 12px;
      margin: 0 2px;
      padding: 1px 3px;
    }
  }
  .extras {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin: 12px 0;
    border-radius: 5px;
    font-size: 12px;
    background-color: #f5f7fa;
  }
  .comment {
    .overall {
      font-weight: 700;
      font-size: 18px;
      color: #333;
    }
    .scoreTitle {
      color: #333;
      margin: 0 3px;
      font-weight: 700;
    }
    .commentBrief {
      color: #666;
    }
    .right {
      color: #ff9645;
    }
  }
  .position {
    .right {
      color: #ff9645;
    }
    .left {
      font-weight: 700;
      font-size: 14px;
      color: #333;
    }
  }
}
</style>
