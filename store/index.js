import Vuex from 'vuex'
import axios from 'axios'


const store = () => new Vuex.Store({
  state: {
    isMenuActive: false,
    categories: [],
  },
  getters: {
    categories: (state) => state.cateogries
  },
  mutations: {
    toggleMenu(state) {
      state.isMenuActive = !state.isMenuActive
    },
    resetMenu(state) {
      state.isMenuActive = false
    },
    setCategories(state, categories) {
      state.categories = categories
    }
  },
  actions: {
    async fetchCategories({ commit }) {
      await axios.get(process.env.API_URL + `category/`,
        {
          headers: { "X-API-KEY": process.env.API_KEY }
        }).then((res) => {
          commit('setCategories', { categories: res.contents })
        })
    }
  }

})

export default store
