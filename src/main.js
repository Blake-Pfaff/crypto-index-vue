import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "vue-router";

Vue.config.productionTip = false;

Vue.use(Router);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
