import { onMounted, onUnmounted, ref } from "vue";
const useScroll = () => {
  const clientHeight = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  const scrollHandler = () => {
    clientHeight.value = document.documentElement.clientHeight;
    scrollTop.value = document.documentElement.scrollTop;
    scrollHeight.value = document.documentElement.scrollHeight;
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log(clientHeight.value, scrollTop.value, scrollHeight.value);
    }
  };
  onMounted(() => {
    window.addEventListener("scroll", scrollHandler);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", scrollHandler);
  });

  return {
    scrollHeight,
    clientHeight,
    scrollTop,
  };
};

export default useScroll;
