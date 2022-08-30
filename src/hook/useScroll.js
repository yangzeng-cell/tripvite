import { onMounted, onUnmounted, ref } from "vue";
import { debounce } from "underscore";
const useScroll = (elRef) => {
  const clientHeight = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  const attachBottom = ref(false);
  let el = window;
  // 做节流处理，防止多次触发
  const scrollHandler = debounce(() => {
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight;
      scrollTop.value = document.documentElement.scrollTop;
      scrollHeight.value = document.documentElement.scrollHeight;
    } else {
      clientHeight.value = el.clientHeight;
      scrollTop.value = el.scrollTop;
      scrollHeight.value = el.scrollHeight;
    }
    if (
      Math.round(clientHeight.value + scrollTop.value) >= scrollHeight.value
    ) {
      attachBottom.value = true;
    }
  }, 300);
  onMounted(() => {
    if (elRef) el = elRef.value;
    el.addEventListener("scroll", scrollHandler);
  });

  onUnmounted(() => {
    el.removeEventListener("scroll", scrollHandler);
  });

  return {
    scrollHeight,
    clientHeight,
    scrollTop,
    attachBottom,
  };
};

export default useScroll;
