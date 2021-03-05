import mutations from '@/store/mutations'
import axios from '@/plugins/axios'
const { USER } = mutations

const userStore = {
  namespaced: true,
  state: {
    user: null
  },
  getters: {
    user: ({ user }) => user
  },
  mutations: {
    [USER] (state, obg) {
      state.user = obg
    }
  },
  actions: {
    setUserState: {
      handler ({ commit }, user) {
        commit(USER, user)
      },
      root: true
    },
    async createUserInfo ({ commit }, data) {
      try {
        const user = await axios.post('/users', data)
        console.log(user)
        commit(USER, user)
      } catch (error) {
        console.error(error)
      }
    }
  }
}

export default userStore
