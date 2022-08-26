<template>
  <div class="hotlistitem">
    <div class="inner">
      <img :src="props.item.data.image.url" alt="" />
      <div class="info" v-if="props.item.discoveryContentType === 9">
        <div class="summaryText wrap">{{ props.item.data.summaryText }}</div>
        <div class="houseName">{{ props.item.data.houseName }}</div>
        <div class="dot">
          <van-rate v-model="commentScore" readonly allow-half size="16px" />
          <div>{{ finalPrice }}</div>
        </div>
      </div>
      <div v-else class="info1">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="" />
          <span>{{ props.item.data.location }}</span>
        </div>
        <div class="houseName">{{ props.item.data.houseName }}</div>
        <div class="summaryText wrap">{{ props.item.data.summaryText }}</div>
        <div class="price">
          <div class="finalPrice">{{ finalPrice }}</div>
          <div class="productPrice">{{ productPrice }}</div>
          <div class="priceTipBadge">
            {{ props.item.data?.priceTipBadge?.text || "" }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});

const commentScore = computed(() => {
  return Number(props.item.data.commentScore);
});

const finalPrice = computed(() => {
  return "￥" + props.item.data.finalPrice;
});

const productPrice = computed(() => {
  return "￥" + props.item.data.productPrice;
});
</script>

<style lang="less" scoped>
.hotlistitem {
  width: 50%;

  .inner {
    position: relative;
    margin: 5px;
    overflow: hidden;
    background-color: #fff;
    border-radius: 6px;

    img {
      width: 100%;
    }
    .info {
      position: absolute;
      bottom: 0px;
      left: 0px;
      right: 0px;
      color: #fff;
      padding: 8px 10px;
      .summaryText {
        font-size: 12px;
      }
      .houseName {
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .dot {
        display: flex;
        justify-content: space-between;
      }
    }
    .info1 {
      padding: 8px 10px;

      .location {
        font-size: 12px;
        color: #666;
        img {
          height: 12px;
          width: 12px;
        }
      }
      .summaryText {
        font-size: 12px;
        color: #666;
      }
      .houseName {
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        font-size: 14px;
        -webkit-box-orient: vertical;
      }
      .price {
        display: flex;
        margin: 8px 0;
        align-items: center;
        .finalPrice {
          color: #ff9645;
        }
        .productPrice {
          margin: 0 3px;
          color: #999;
          font-size: 12px;
          text-decoration: line-through;
        }
        .priceTipBadge {
          background-image: linear-gradient(270deg, #f66, #ff9f9f);
          color: #fff;
          padding: 0 6px;
          border-radius: 8px;
          font-size: 12px;
        }
      }
    }
  }
  .wrap {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
