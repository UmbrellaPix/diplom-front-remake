import { createStore } from 'vuex'

export default createStore({
  state: {
    auth: false
  },
  getters: {
    getAuth(state) {
      return state.auth;
    }
  },
  mutations: {
    setAuth(state, auth) {
      state.auth = auth;
    }
  },
  actions: {
  },
  modules: {
  }
})
