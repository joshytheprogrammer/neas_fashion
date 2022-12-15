export default {
  namespaced: true,
  state : () => ({
    isMobile: true,
  }),
  mutations: {
    CHECK_WIDTH(state) {
      let w = window.innerWidth

      // If statement to check width
      w > 768 ? state.isMobile = false : state.isMobile = true

      return
    },
  },
  actions: {
    checkWidth({commit}) {
      commit("CHECK_WIDTH")
    }
  },
  getters: {
    getDevice(state) {
      return state.isMobile
    },
  }
}
