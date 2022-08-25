import { defineStore } from "pinia";

const useCity = defineStore("city", {
  state: () => {
    return {
      currentCity: "广州",
    };
  },
});

export default useCity;
