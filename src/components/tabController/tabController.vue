<template>
  <div class="controller">
    <div
      class="item"
      v-for="(item, index) in names"
      :key="index"
      @click="clickItem(index)"
    >
      <span :class="index === active ? 'text' : ''">{{ item }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  names: {
    type: Array,
    default: () => [],
  },
});
const active = ref(0);
const emits = defineEmits(["clickTab"]);

const clickItem = (index) => {
  console.log(index, "????");
  active.value = index;
  emits("clickTab", index);
};
</script>

<style lang="less" scoped>
.controller {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  .item {
    flex: 1;
    .text {
      box-sizing: border-box;
      padding: 8px;
      border-bottom: 3px solid #ff9854;
    }
  }
}
</style>
