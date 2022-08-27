import { getDetailAPI } from "@/service/modules/detail";
import { defineStore } from "pinia";

const useDetail = defineStore("detail", {
  state: () => {
    return {
      houseDetail: {},
    };
  },
  actions: {
    async fetchhouseDetailData(houseId) {
      const res = await getDetailAPI(houseId);
      this.houseDetail = res.data.data;
    },
  },
});

export default useDetail;
