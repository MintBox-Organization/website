import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("../views/Create.vue"),
  },
  {
    path: "/upload",
    name: "Upload",
    component: () => import("../views/Upload.vue"),
  },
  {
    path: "/success",
    name: "Success",
    component: () => import("../views/Success.vue"),
  },
  {
    path: "/explore",
    name: "Explore",
    component: () => import("../views/Explore.vue"),
  },
  {
    path: "/explore/:id",
    name: "exploreDetail",
    component: () => import("../views/Item.vue"),
  },
  {
    path: "/mynfts",
    name: "MyNfts",
    component: () => import("../views/MyNfts.vue"),
  },
  {
    path: "/mynfts/:id",
    name: "mynftsDetail",
    component: () => import("../views/Item.vue"),
  },
  {
    path: "/nftDetail/:id",
    name: "NftDetail",
    component: () => import("../views/NftDetail.vue"),
  },
  {
    path: "/terms",
    name: "Terms",
    component: () => import("../views/Terms.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
