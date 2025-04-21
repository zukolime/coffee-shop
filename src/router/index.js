import Vue from "vue";
import VueRouter from "vue-router";

import HeroView from "../views/HeroView";
import OurCoffeeView from "../views/OurCoffeeView";
import ForPleasureView from "../views/ForPleasureView";
import ContactUsView from "../views/ContactUsView";
import ThanksView from "../views/ThanksView";
import GoodsItemView from "../views/GoodsItemView";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HeroView },
  { path: "/our-coffee", component: OurCoffeeView },
  { path: "/for-your-pleasure", component: ForPleasureView },
  { path: "/contact-us", component: ContactUsView },
  { path: "/thank-you", component: ThanksView },
  { name: "coffee", path: "/our-coffee/:id", component: GoodsItemView },
  { name: "goods", path: "/for-your-pleasure/:id", component: GoodsItemView },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
