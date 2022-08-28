<template>
  <div class="comment">
    <detail-section title="热门评论" :footer="totalCount">
      <div class="comment_inner">
        <div class="header">
          <div class="left">
            <div class="overall">
              <div>{{ comment.overall }}</div>
              <div class="line"></div>
            </div>
            <div class="list">
              <div class="scoreTitle">
                {{ comment.scoreTitle }}
              </div>
              <div class="totalCount">{{ comment.totalCount }}条评论</div>
              <div class="stars">
                <van-rate
                  size="12px"
                  color="#ffd21e"
                  v-model="comment.overall"
                  readonly
                  allow-half
                />
              </div>
            </div>
          </div>
          <div class="subScores">
            <span
              class="item"
              v-for="(item, index) of comment.subScores"
              :key="index"
              >{{ item }}</span
            >
          </div>
        </div>
        <div class="tags">
          <span
            class="item"
            v-for="(item, index) of comment.commentTagVo"
            :key="index"
            :style="{ background: item.backgroundColor, color: item.color }"
            >{{ item.text }}</span
          >
        </div>
        <div class="content">
          <div class="user"></div>
          <div class="text"></div>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from "@/components/detailSection/detailSection.vue";
import { computed } from "vue";

const props = defineProps({
  comment: {
    type: Object,
    default: () => ({}),
  },
});

const totalCount = computed(() => {
  return `查看全部${props.comment.totalCount}条评论`;
});
</script>

<style lang="less" scoped>
.comment {
  .comment_inner {
    .header {
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        .overall {
          font-size: 48px;
          position: relative;
          .line {
            width: 66px;
            height: 6px;
            background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
            border-radius: 3px;
            position: absolute;
            bottom: 6px;
          }
        }
        .list {
          margin-left: 19px;
          font-size: 12px;
          color: #333;
          .totalCount {
            margin: 3px 0;
            color: #999;
          }
        }
      }
      .subScores {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
        justify-content: flex-end;
        .item {
          font-size: 12px;
          color: #666;
          margin-left: 5px;
        }
      }
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      .item {
        padding: 3px 5px;
        margin-right: 8px;
        margin-top: 8px;
        border-radius: 8px;
        font-size: 12px;
      }
    }
    .content {
      padding: 10px;
      .user {
      }
      .text {
      }
    }
  }
}
</style>
