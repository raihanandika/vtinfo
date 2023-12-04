import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import BandaAcehView from "../views/BandaacehView.vue";
import MedanView from "../views/MedanView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/bandaaceh",
    name: "BandaAceh",
    component: BandaAcehView,
  },
  {
    path: "/",
    name: "MedanView",
    component: MedanView,
  },
  {
    path: "/medan",
    name: "MedanView",
    component: MedanView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
