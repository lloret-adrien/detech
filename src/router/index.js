import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/conseil",
    name: "Conseil",
    component: () =>
      import("@/views/Conseil.vue"),
  },
  {
    path: "/temoignages",
    name: "Temoignages",
    component: () => import("@/views/Temoignages.vue"),
  },
  {
    path: "/tuto",
    name: "Tutoriels",
    component: () => import("@/views/Tutoriels.vue"),
  },
  {
    path: "/live",
    name: "Direct",
    component: () => import("@/views/Direct.vue"),
  },
  {
    path: "/leaderboard",
    name: "Classement",
    component: () => import("@/views/Classement.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/Profile.vue"),
  },
]

const router = new VueRouter({
  routes,
})

export default router;
