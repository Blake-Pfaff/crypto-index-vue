import Vue from "vue";
import Router from "vue-router";

// Views
import CoinList from "../views/CoinList.vue";

// Register plugin
Vue.use(Router);

// Routes
const routes = [
  {
    name: "coinList",
    path: "/",
    component: CoinList,
  },
];

const router = new Router({ routes });

export default router;
