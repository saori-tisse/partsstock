import Vuex from 'vuex'
import axios from 'axios'


const store = () => new Vuex.Store({
  state: {
    isMenuActive: false,
    items: Array
  },
  mutations: {
    toggleMenu(state) {
      state.isMenuActive = !state.isMenuActive
    },
    resetMenu(state) {
      state.isMenuActive = false
    },
    setItems(state, { items }) {
      state.items = items
    }
  },
  actions: {
    async fetchItems({ commit }) {
      await axios.get(process.env.API_URL + "category/", {
        headers: { "X-API-KEY": process.env.API_KEY }
      }).then((response) => {
        console.log({ response })
        commit('setItems', { items: response.data })
      })
    }
  }
})

export default store
