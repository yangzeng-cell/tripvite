<template>
  <div class="swiper">
    <van-swipe lazy-render :autoplay="3000">
      <template v-for="item in swiperData" :key="item.orderIndex">
        <van-swipe-item>
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <template v-for="(item, key, index) in swiperGroup" :key="key">
            <div
              class="item"
              :class="
                swiperData[active]?.enumPictureCategory == key ? 'active' : ''
              "
            >
              <div class="text">{{ getName(item[0].title) }}</div>
              <div
                class="count"
                v-if="swiperData[active]?.enumPictureCategory == key"
              >
                {{ getIndex(swiperData[active]) }}/{{ item.length }}
              </div>
            </div>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  swiperData: {
    type: Array,
    default: () => [],
  },
});

const swiperGroup = {};
console.log(props.swiperData);
for (const item of props.swiperData) {
  const enumPictureCategory = item.enumPictureCategory;
  if (!swiperGroup[enumPictureCategory]) {
    swiperGroup[enumPictureCategory] = [];
  }
  swiperGroup[enumPictureCategory].push(item);
}

const getName = (name) => {
  const reg = /【(.*?)】/i;
  const results = reg.exec(name);
  return results[1];
};

const getIndex = (data) => {
  console.log(data);
  const valueArr = swiperGroup[data?.enumPictureCategory];
  return valueArr?.findIndex((item) => item === data) + 1;
};
</script>

<style lang="less" scoped>
img {
  width: 100%;
}
.custom-indicator {
  color: #fff;
  display: flex;
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.9);
  .item {
    display: flex;
    margin: 0 3px;
  }
}

.active {
  padding: 0 3px;
  border-radius: 5px;
  background: #fff;
  color: #333;
}
</style>
