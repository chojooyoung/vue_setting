import router from "~/routes"

export default {
  namespaced: true,
  state() {
    return {
      Search: [],
      currentResult: {},
      totalResults: 0,
      Response: false,
      isLoading: false,
    }
  },
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key]
      })
    },
    isLoading(state, newLoadingStatus) {
      return (state.isLoading = newLoadingStatus)
    },
  },
  getters: {
    isLoading(state) {
      return state.isLoading
    },
  },
  actions: {
    async updateSearchResults({ state, commit }, payload) {
      let { keyword = "", page = 1 } = payload
      commit("isLoading", true)
      const searchResults = await _request(`s=${keyword}&page=${page}`)
      if (searchResults.Response === "True") {
        if (page > 1) {
          searchResults.Search = [...state.Search, ...searchResults.Search]
        }
        commit("assignState", searchResults)
      } else {
        await router.push("error") // FIXME: await를 안붙이면 url 업데이트가 안됨
      }
      commit("isLoading", false)
    },

    async getCurrentResult({ commit }, payload) {
      const { id, plot = "full" } = payload
      commit("isLoading", true)
      const currentResult = await _request(`i=${id}&plot=${plot}`)
      if (currentResult.Response === "True") {
        await commit("assignState", {
          currentResult,
        })
      } else {
        await router.push("/error")
      }
      commit("isLoading", false)
    },
  },
}
async function _request(params) {
  try {
    const res = await fetch("/.netlify/functions/api", {
      method: "POST",
      body: JSON.stringify(params),
    })
    if (res.ok) {
      return res.json()
    }
  } catch (e) {
    console.log(e.message)
  }
}
