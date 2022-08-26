import { onMounted, onUnmounted, ref } from "vue";
import { debounce } from "underscore";
const useScroll = () => {
  const clientHeight = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  const attachBottom = ref(false);
  // 做节流处理，防止多次触发
  const scrollHandler = debounce(() => {
    clientHeight.value = document.documentElement.clientHeight;
    scrollTop.value = document.documentElement.scrollTop;
    scrollHeight.value = document.documentElement.scrollHeight;
    console.log(clientHeight.value + scrollTop.value, scrollHeight.value);
    if (
      Math.round(clientHeight.value + scrollTop.value) >= scrollHeight.value
    ) {
      attachBottom.value = true;
    }
  }, 300);
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
    attachBottom,
  };
};

export default useScroll;
