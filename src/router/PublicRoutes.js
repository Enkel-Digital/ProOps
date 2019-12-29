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
    path: "/",
    name: "welcome",
    component: () => import("@/views/Welcome.vue"),
    meta: { Auth_requirements: AuthType.public_only }
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),
    meta: { Auth_requirements: AuthType.public }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
    meta: { Auth_requirements: AuthType.public_only }
  }
];

export default routes;
