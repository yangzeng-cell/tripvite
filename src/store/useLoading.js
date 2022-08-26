import { defineStore } from "pinia";

const useLoading = defineStore("loading", {
  state: () => {
    return {
      changeLoading: false,
    };
  },
});

export default useLoading;
