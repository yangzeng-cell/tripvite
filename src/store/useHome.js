import { defineStore } from "pinia";
import { hotSuggestAPI } from "@/service/modules/home";
const useHome = defineStore("home", {
  state: () => {
    return {
      hotSuggest: [],
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
