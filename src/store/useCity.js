import { getCityAll } from "@/service/modules/city";
import { defineStore } from "pinia";

const useCity = defineStore("city", {
  state: () => {
    return {
      currentCity: "广州",
      cityDate: {},
    };
  },
  actions: {
    async getCityDate() {
      const res = await getCityAll();
      this.cityDate = res.data.data;
    },
  },
});

export default useCity;
