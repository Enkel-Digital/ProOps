import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";

// Import AuthType Enum
import AuthType from "./AuthType";

Vue.use(VueRouter);

/**
 * The route uses lazy loading for the components
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
    path: "/home",
    name: "home",
    component: () => import("@/views/Home.vue"),
    meta: { Auth_requirements: AuthType.private }
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),
    meta: { Auth_requirements: AuthType.public }
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
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
    meta: { Auth_requirements: AuthType.public_only }
  }
];

const router = new VueRouter({
  routes
});

// Function that returns an object with bool values of auth status.
function auth(route) {
  // Get auth requirements from first route object that matches with route navigated to
  const { Auth_requirements } = route.matched[0].meta;

  return {
    public: Auth_requirements === AuthType.public,
    public_only: Auth_requirements === AuthType.public_only,
    private: Auth_requirements === AuthType.private
  };
}

// Checks if user's current auth status matches required auth status for the route being accessed
function AuthChecker(to, from, next) {
  // Get current user from firebase
  const currentUser = firebase.auth().currentUser;

  // Get AuthStatus required for accessing the route.
  const AuthType_required_is = auth(to);

  /**
   * @notice Call the next middleware provided by vue router with a route to go to.
   * @notice Hard coded routes based on authentication status or proceed to route user requested for.
   */
  // If route is auth protected and user not logged in, redirect to welcome page
  if (AuthType_required_is.private && !currentUser) next({ name: "welcome" });
  // If route is public only and user is logged in, redirect to default private route of home
  else if (AuthType_required_is.public_only && currentUser)
    next({ name: "home" });
  // Else, just continue navigation as per user request.
  else next();
}

// Attach AuthChecker Middleware to run when navigation is made but before actual navigation.
router.beforeEach(AuthChecker);

export default router;
