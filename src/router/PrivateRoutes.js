// Import AuthType Enum
import AuthType from "./AuthType";

/** @notice Pre-Load all components for frequently used routes */
import HomeComponent from "@/views/Home.vue";
import IpadComponent from "@/views/Ipad.vue";
import WalkieComponent from "@/views/Walkie.vue";
import TeamComponent from "@/views/Team.vue";

/**
 * @notice Some of these lesser used routes uses lazy loading for the components
 *
 * route level code-splitting
 * this generates a separate chunk (about.[hash].js) for this route
 * which is lazy-loaded when the route is visited.
 */
const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeComponent,
    meta: { Auth_requirements: AuthType.private }
  },
  {
    path: "/ipad",
    name: "ipad",
    component: IpadComponent,
    meta: { Auth_requirements: AuthType.private }
  },
  {
    path: "/walkie",
    name: "walkie",
    component: WalkieComponent,
    meta: { Auth_requirements: AuthType.private }
  },
  {
    path: "/team",
    name: "team",
    component: TeamComponent,
    meta: { Auth_requirements: AuthType.private }
  },
  {
    path: "/faulty",
    name: "faulty",
    component: () => import("@/views/Faulty.vue"),
    meta: { Auth_requirements: AuthType.private }
  },
  {
    path: "/faulty/add/walkie",
    name: "faulty-walkie",
    component: () => import("@/views/Faulty-walkie.vue"),
    meta: { Auth_requirements: AuthType.private }
  },
  {
    path: "/faulty/add/ipad",
    name: "faulty-ipad",
    component: () => import("@/views/Faulty-ipad.vue"),
    meta: { Auth_requirements: AuthType.private }
  },
  {
    path: "/faulty/list",
    name: "faulty-list",
    component: () => import("@/views/Faulty-list.vue"),
    meta: { Auth_requirements: AuthType.private }
  }
];

export default routes;
