import { createRouter, createWebHistory } from "vue-router";
import Shop from "../entities/Shop/Shop.vue";

const routes = [
  {
    path: "/",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../entities/ShoppingCart/Cart.vue"),
  },
  {
    path: '/history',
    name: "History",
    component: () => import("../entities/OrderHistory/History.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
