import Vue from "vue";
import Vuex from "vuex";

// Mock server data
import ipads from "./mock_data/ipad";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ipads: {}
  },
  mutations: {
    update_ipad_data: function(state, data) {
      state.ipads = data;
    },
    toggle_ipad_status: function(state, id) {
      state.ipads[id].available = !state.ipads[id].available;
    }
  },
  actions: {
    load_ipad_data: function({ commit }) {
      commit("update_ipad_data", ipads);
    }
  },
  modules: {}
});
