import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    suggestions: [],
    loading: true
  },
  mutations: {
    SET_SUGGESTIONS(state, payload) {
      state.suggestions = [...payload];
    }
  },
  actions: {
    async searchSuggestions({ commit }, payload) {
      this.state.loading = true;
      const call = await axios.get(payload.url);
      const response = await call;
      let arr = await [...response.data.results, ...payload.arr];
      if (response.data.next !== null) {
        const next = response.data.next;
        this.dispatch("searchSuggestions", { url: next, arr: arr });
        commit("SET_SUGGESTIONS", arr);
      } else {
        this.state.loading = false;
        commit("SET_SUGGESTIONS", arr);
      }
    }
  }
});
