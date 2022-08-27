<template>
  <div class="facility">
    <detail-section title="房屋设施" footer="查看全部设施">
      <div class="facility-inner">
        <template v-for="(item, index) in facility.houseFacilitys" :key="index">
          <div class="item" v-if="facility?.facilitySort?.includes(index)">
            <div class="head">
              <img class="icon" :src="item.icon" alt="" />
              <div class="text">{{ item.groupName }}</div>
            </div>
            <div class="list">
              <div
                class="cell"
                v-for="(val, index) in item.facilitys"
                :key="index"
              >
                <i></i>
                <span>{{ val.name }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from "@/components/detailSection/detailSection.vue";
const props = defineProps({
  facility: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.facility {
  .facility-inner {
    padding: 5px 0;
    border-radius: 6px;
    font-size: 12px;
    background-color: #f7f9fb;
    .item {
      display: flex;
      margin: 25px 0;
      .head {
        width: 90px;
        text-align: center;
        .text {
          margin-top: 5px;
          color: #000;
        }
      }
      .list {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        align-items: center;
        .cell {
        }
      }
    }
  }
  .icon {
    width: 20px;
    height: 20px;
  }
}
</style>
