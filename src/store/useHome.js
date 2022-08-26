import { defineStore } from "pinia";
import {
  getCatagoryAPI,
  getHotListAPI,
  hotSuggestAPI,
} from "@/service/modules/home";
import { getFormatterDate } from "@/utils/getFormatterDate";
const useHome = defineStore("home", {
  state: () => {
    return {
      hotSuggest: [],
      startTime: getFormatterDate(new Date(), "MM月dd日"),
      endTime: getFormatterDate(Date.now() + 24 * 60 * 60 * 1000, "MM月dd日"),
      stayCount: 1,
      catagoryList: [],
      hotList: [],
    };
  },
  actions: {
    async fetchHotSuggestData() {
      const res = await hotSuggestAPI();
      this.hotSuggest = res.data.data;
    },

    async fetchHomeCatagoryData() {
      const res = await getCatagoryAPI();
      this.catagoryList = res.data.data;
    },

    async fetchHotListData(idx) {
      const res = await getHotListAPI(idx);
      this.hotList = [...this.hotList, ...res.data.data];
    },
  },
});

export default useHome;
