import { createRouter, createWebHistory } from "vue-router";
import SignInComponent from "../management/pages/sign-in.component.vue";
import SignUpComponent from "../management/pages/sign-up.component.vue";
import Home from "../management/pages/home-view.component.vue";
import Machines from "../management/pages/machine-list.component.vue";
import Finances from "../management/pages/finance-list.component.vue";
import Inventory from "../management/pages/inventory-list.component.vue";
import Contacts from "../management/pages/contact-list.component.vue";
import Profile from "../management/pages/profile-view.component.vue";
import Notification from "../management/pages/notification-list.component.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/sign-up",
      component: SignUpComponent,
      name: "sign-up",
    },
    {
      path: "/sign-in",
      component: SignInComponent,
      name: "sign-in",
    },
    {
      path: "/home",
      component: Home,
      name: "home",
    },
    {
      path: "/",
      redirect: "sign-up",
    },
    {
      path: "/machines",
      component: Machines,
      name: "machines",
    },
    {
      path: "/finances",
      component: Finances,
      name: "finances",
    },
    {
      path: "/inventory",
      component: Inventory,
      name: "inventory",
    },
    {
      path: "/profile",
      component: Profile,
      name: "profile",
    },
    {
      path: "/contacts",
      component: Contacts,
      name: "contacts",
    },
    {
      path: "/notifications",
      component: Notification,
      name: "notifications",
    },
  ],
});

export default router;
