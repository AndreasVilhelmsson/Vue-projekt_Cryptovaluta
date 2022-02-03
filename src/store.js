import { createStore } from 'vuex'
import axios from 'axios'
import { reactive } from 'vue'

const options = {
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'f6ea47c7admsh65f66fa8c4dd642p1d236fjsnfe62087ef002'
  }
}

//to handle state
const state = reactive({
  singleCryptoCurrency: '',
  cryptoCurrency: {},
  isLoading: false
})

//to handle getters
const getters = {
  getCurrencyById: (state) => (id) => {
    return state.currency.filter((current) => current.id === id)
  },

  getAllCryptoCurrency: (state) => state.cryptoCurrency,
  getSingleCryptoCurrency: (state) => state.singleCryptoCurrency.data
  /*  changeRoute(route) {
    // `route` is either a string or object
    this.router.push(route)
  } */
}

//to handle mutations
const mutations = {
  setCurrencyToState(state, currency) {
    state.cryptoCurrency = currency
  },
  setLoading(state, loading) {
    state.isLoading = loading
  },
  setCurrentCoin(state, currency) {
    state.singleCryptoCurrency = currency
  }
}

//to handle actions
const actions = {
  async getData({ commit }) {
    commit('setLoading', true)

    await axios
      .get('https://coinranking1.p.rapidapi.com/coins', options)
      .then((response) => {
        commit('setCurrencyToState', response.data.data.coins)
        commit('setLoading', false)
      })
  },

  async getSingleCoin({ commit }, id) {
    commit('setLoading', true)

    axios
      .get(`https://coinranking1.p.rapidapi.com/coin/${id}`, options)
      .then(function (response) {
        commit('setCurrentCoin', response.data)
        commit('setLoading', false)
      })
      .catch(function (error) {
        console.error(error)
      })
  }
}

/** we have just created a boiler plate for our vuex store module**/
export default createStore({
  /*  state2, */
  state,
  actions,
  mutations,
  getters,
  strict: true
})
