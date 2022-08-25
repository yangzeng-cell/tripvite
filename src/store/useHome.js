import { defineStore } from "pinia";
import { hotSuggestAPI } from "@/service/modules/home";
import { getFormatterDate } from "@/utils/getFormatterDate";
const useHome = defineStore("home", {
  state: () => {
    return {
      hotSuggest: [],
      startTime: getFormatterDate(new Date(), "MM月dd日"),
      endTime: getFormatterDate(Date.now() + 24 * 60 * 60 * 1000, "MM月dd日"),
      stayCount: 1,
    };
  },
  actions: {
    async fetchHotSuggestData() {
      const res = await hotSuggestAPI();
      this.hotSuggest = res.data.data;
    },
  },
});

export default useHome;
