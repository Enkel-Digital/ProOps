import Vue from "vue";
import Vuex from "vuex";

// Mock server data
import ipads from "./mock_data/ipad";
import walkies from "./mock_data/walkie";

// Import server communication modules
import users from "./users";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: "",
    name: "",
    ipads: {},
    walkies: {}
  },
  mutations: {
    // Update email function, updates the user's name too
    update_email: function(state, new_email) {
      state.email = new_email;

      // Get the user's name from server data.
      state.name = users.getUsername(state.email);
    },
    update_ipad_data: function(state, data) {
      state.ipads = data;
    },
    toggle_ipad_status: function(state, id) {
      const ipad = state.ipads[id];

      // Toggle availability of the ipad
      ipad.available = !ipad.available;

      // When the ipad status is set to "In use/Not Available" save the user's email
      // Else set to empty string
      if (!ipad.available) ipad.user = state.email;
      else delete ipad.user;
    },
    update_walkie_data: function(state, data) {
      state.walkies = data;
    },
    toggle_walkie_status: function(state, id) {
      const walkie = state.walkies[id];

      // Toggle availability of the ipad
      walkie.available = !walkie.available;

      // When the walkie status is set to "In use/Not Available" save the user's email
      // Else set to empty string
      if (!walkie.available) walkie.user = state.email;
      else delete walkie.user;
    }
  },
  actions: {
    load_ipad_data: function({ commit }) {
      commit("update_ipad_data", ipads);
    },
    load_walkie_data: function({ commit }) {
      commit("update_walkie_data", walkies);
    }
  },
  modules: {}
});
