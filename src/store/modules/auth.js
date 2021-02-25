import mutations from '@/store/mutations'
import { fireBaseLogin, fireBaseSignOut, fireBaseSignUp, fireBaseResetPassword } from '@/services/auth.service'
const { IS_LOGGED_IN, IS_LOGIN_IN_PROGRESS } = mutations

const authStore = {
  namespaced: true,
  state: {
    isLoggedIn: false,
    loginInProgress: false
  },
  getters: {
    isLoggedIn: ({ isLoggedIn }) => isLoggedIn,
    loginInProgress: ({ loginInProgress }) => loginInProgress
  },
  mutations: {
    [IS_LOGGED_IN] (state, bool) {
      state.isLoggedIn = bool
    },
    [IS_LOGIN_IN_PROGRESS] (state, bool) {
      state.loginInProgress = bool
    }
  },
  actions: {
    setIsLoggedInState: {
      handler ({ commit }, bool) {
        commit(IS_LOGGED_IN, bool)
      },
      root: true
    },
    async login ({ commit }, { email, password }) {
      try {
        commit(IS_LOGIN_IN_PROGRESS, true)
        await fireBaseLogin(email, password)
      } catch (err) {
        return err
      } finally {
        commit(IS_LOGIN_IN_PROGRESS, false)
      }
    },
    async logOut () {
      try {
        await fireBaseSignOut()
      } catch (err) {
        console.log(err)
      }
    },
    async SignUp ({ commit }, { email, password }) {
      try {
        await fireBaseSignUp(email, password)
      } catch (error) {
        console.log(error)
      }
    },
    async ResetPassword ({ commit }, email) {
      try {
        await fireBaseResetPassword(email)
      } catch (error) {
        console.error(error)
      }
    }
  }
}

export default authStore
