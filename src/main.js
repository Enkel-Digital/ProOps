import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import firebase from "firebase";
import autofocus from "./directives/autofocus";

Vue.config.productionTip = false;

// Register global custom directive called `v-autofocus`
Vue.directive("autofocus", autofocus);

// firebaseConfig auto generated in project settings
firebase.initializeApp({
  apiKey: "AIzaSyCuJg1Qkmhg2LnYUzvRKJLQrHKiYXkEVnA",
  authDomain: "proops-mobile.firebaseapp.com",
  databaseURL: "https://proops-mobile.firebaseio.com",
  projectId: "proops-mobile",
  storageBucket: "proops-mobile.appspot.com",
  messagingSenderId: "939804252839",
  appId: "1:939804252839:web:cee2a99765052347a75982"
});

// Wait for firebase to finish initialization before creating the app.
// So that the router navigation wont break due to invalid auth
firebase.auth().onAuthStateChanged(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
});
