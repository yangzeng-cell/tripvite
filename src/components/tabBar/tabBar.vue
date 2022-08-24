<template>
    <div class="tab_bar">
      <router-link class="linkitem" :to="item.path" @click="getItem(item)" v-for="item of barlist" :key="item.id">
      <img v-if="activeIndex===item.id" :src="getAssetURL(item.activeIcon)" />
      <img v-else :src="getAssetURL(item.icon)" />
      <span :style="activeIndex===item.id?{color:'#ff9854'}:''">{{item.title}}</span>
      </router-link>
    </div>
</template>

<script setup>
import barlist from "@/data/tabBar"
import {getAssetURL} from "@/utils/getAssetURL"
import { ref } from "vue";
let activeIndex=ref(1)

const getItem=(item)=>{
  activeIndex.value=item.id
}
</script>

<style lang="less" scoped>
.tab_bar{
  display: flex;
  height: 50px;
  .linkitem{
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      height: 26px;
      width: 33px;
    }
  }
 
}
</style>