import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    apUser: null
  },
  getters: {
    user: state => state.user,
    apUser: state => state.apUser
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setApUser (state, apUser) {
      state.apUser = apUser
    }
  },
  actions: {
    setUser ({ commit }, dataUser) {
      commit('setUser', dataUser)
    },
    setApUser ({ commit }, dataApUser) {
      commit('setApUser', dataApUser)
    }
  }
})
