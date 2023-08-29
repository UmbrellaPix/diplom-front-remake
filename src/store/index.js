import { createStore } from 'vuex'

export default createStore({
  state: {
    auth: false,
    drawer: false,
    pageName:"",
  },
  getters: {
    getAuth(state) {
      return state.auth;
    },
    getDrawer(state) {
      return state.drawer;
    },
    getPageName(state) {
      return state.pageName;
    }
  },
  mutations: {
    setAuth(state, auth) {
      state.auth = auth;
    },
    setDrawer(state, drawer) {
      state.drawer = drawer;
    },
    setPageName(state, pageName) {
      state.pageName = pageName;
    }
  },
  actions: {
  },
  modules: {
  }
})
