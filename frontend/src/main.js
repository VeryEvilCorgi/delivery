import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./routing";
import App from "./App.vue";

const initApp = () => {
  const app = createApp(App);

  app.use(router);
  app.use(createPinia());
  app.mount("#app");
};

initApp();
