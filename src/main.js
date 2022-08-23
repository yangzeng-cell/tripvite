import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "normalize.css";
import "./assets/css/index.css";
import pinia from "./store";
import router from "./router";

createApp(App).use(router).use(pinia).mount("#app");
