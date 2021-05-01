import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//menu contectuel de base (click droit) désactivé
/*window.oncontextmenu = function() {
  return false;
};*/

new Vue({
  router,
  store,
  render: (h) => h(App),
  // mounted() {
  //   debugger;
  // },
}).$mount("#app");
