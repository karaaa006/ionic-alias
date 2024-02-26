import AboutPageVue from "@/views/AboutPage.vue";
import MainManuPageVue from "@/views/MainManuPage.vue";
import NewGamePageVue from "@/views/NewGamePage.vue";
import SettingsPageVue from "@/views/SettingsPage.vue";
import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    name: "main",
    component: MainManuPageVue,
  },
  {
    path: "/new-game",
    name: "new-game",
    component: NewGamePageVue,
  },
  {
    path: "/settings",
    name: "settings",
    component: SettingsPageVue,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPageVue,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
