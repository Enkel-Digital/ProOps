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
      state.ipads[id].available = !state.ipads[id].available;
    },
    update_walkie_data: function(state, data) {
      state.walkies = data;
    },
    toggle_walkie_status: function(state, id) {
      state.walkies[id].available = !state.walkies[id].available;
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
