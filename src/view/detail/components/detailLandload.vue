<template>
  <div class="landload">
    <detail-section title="房东介绍" footer="查看房东主页">
      <div class="landlord_inner">
        <div class="header">
          <img :src="landlord?.topScroll" alt="" />
        </div>
        <div class="middle">
          <div class="left">
            <img :src="landlord?.hotelLogo" alt="" />
            <div class="info">
              <div class="name">{{ landlord?.hotelName }}</div>
              <div class="tags">
                <div
                  v-for="(item, index) in landlord.hotelTags"
                  :key="index"
                  :style="{ color: item?.tagText?.color }"
                >
                  <span>{{ item?.tagText?.text }}</span
                  ><span
                    v-if="index != landlord.hotelTags.length - 1"
                    class="dive"
                    >|</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="right">联系房东</div>
        </div>
        <div class="footer"></div>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from "@/components/detailSection/detailSection.vue";

const props = defineProps({
  landlord: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.landload {
  .landlord_inner {
    .header {
      img {
        width: 100%;
        border-radius: 6px;
      }
    }
    .middle {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        display: flex;
        img {
          width: 54px;
          height: 54px;
        }
        .info {
          .name {
            font-size: 16px;
            color: #000;
            margin-top: 8px;
            font-weight: 600;
          }
          .tags {
            display: flex;
            margin-top: 5px;
            font-size: 12px;
            .dive {
              margin: 0 5px;
            }
          }
        }
      }
      .right {
        padding: 0 12px;
        background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
        height: 24px;
        line-height: 24px;
        border-radius: 5px;
        font-size: 12px;
        color: #fff;
      }
    }
  }
  .clearFix {
    &::after {
      content: "";
      display: block;
      clear: both;
      visibility: hidden;
      height: 0;
    }
  }
}
</style>
