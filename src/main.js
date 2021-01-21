import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import requests from "./apis/requests";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";

Vue.config.productionTip = false;
Vue.prototype.$requests = requests;
Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
