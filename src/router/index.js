import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "NFTs For everyone",
    },
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("../views/Create.vue"),
    meta: {
      title: "Choose your type",
    },
  },
  {
    path: "/upload",
    name: "Upload",
    component: () => import("../views/Upload.vue"),
    meta: {
      title: "NFTs For everyone",
    },
  },
  {
    path: "/success",
    name: "Success",
    component: () => import("../views/Success.vue"),
    meta: {
      title: "create successfully",
    },
  },
  {
    path: "/explore",
    name: "Explore",
    component: () => import("../views/Explore.vue"),
    meta: {
      title: "Explorer collections",
    },
  },
  {
    path: "/explore/:id",
    name: "exploreDetail",
    component: () => import("../views/Item.vue"),
    meta: {
      title: "NFTs Info",
    },
  },
  {
    path: "/mynfts",
    name: "MyNfts",
    component: () => import("../views/MyNfts.vue"),
    meta: {
      title: "Discover my NFTs",
    },
  },
  {
    path: "/mynfts/:id",
    name: "mynftsDetail",
    component: () => import("../views/Item.vue"),
    meta: {
      title: "My NFTs Info",
    },
  },
  {
    path: "/nftDetail/:id",
    name: "NftDetail",
    component: () => import("../views/NftDetail.vue"),
    meta: {
      title: "NFTs Info",
    },
  },
  {
    path: "/terms",
    name: "Terms",
    component: () => import("../views/Terms.vue"),
    meta: {
      title: "Terms & Condition",
    },
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../views/Account.vue"),
    meta: {
      title: "My Account",
    },
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = "MintBox-" + to.meta.title;
  next();
});
export default router;
