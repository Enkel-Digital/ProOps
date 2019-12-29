// Import AuthType Enum
import AuthType from "./AuthType";

/**
 * @notice These routes uses lazy loading for the components
 *
 * route level code-splitting
 * this generates a separate chunk (about.[hash].js) for this route
 * which is lazy-loaded when the route is visited.
 */
const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/Home.vue"),
    meta: { Auth_requirements: AuthType.private }
  },
  {
    path: "/ipad",
    name: "ipad",
    component: () => import("@/views/ipad.vue"),
    meta: { Auth_requirements: AuthType.private }
  },
  {
    path: "/walkie",
    name: "walkie",
    component: () => import("@/views/Walkie.vue"),
    meta: { Auth_requirements: AuthType.private }
  },
  {
    path: "/team",
    name: "team",
    component: () => import("@/views/Team.vue"),
    meta: { Auth_requirements: AuthType.private }
  },
  {
    path: "/faulty",
    name: "faulty",
    component: () => import("@/views/Faulty.vue"),
    meta: { Auth_requirements: AuthType.private }
  }
];

export default routes;
