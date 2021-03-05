import mutations from '@/store/mutations'
import { fireBaseLogin, fireBaseSignOut, fireBaseSignUp, fireBaseResetPassword } from '@/services/auth.service'
const { IS_LOGGED_IN, IS_LOGIN_IN_PROGRESS, IS_FIRST_LOGIN } = mutations

const authStore = {
  namespaced: true,
  state: {
    isLoggedIn: Boolean(localStorage.getItem(process.env.VUE_APP_TOKEN_KEY)),
    isFirstLogin: false,
    loginInProgress: false
  },
  getters: {
    isLoggedIn: ({ isLoggedIn }) => isLoggedIn,
    loginInProgress: ({ loginInProgress }) => loginInProgress,
    isFirstLogin: ({ isFirstLogin }) => isFirstLogin
  },
  mutations: {
    [IS_LOGGED_IN] (state, bool) {
      state.isLoggedIn = bool
    },
    [IS_LOGIN_IN_PROGRESS] (state, bool) {
      state.loginInProgress = bool
    },
    [IS_FIRST_LOGIN] (state, bool) {
      state.isFirstLogin = bool
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
        const data = await fireBaseSignUp(email, password)
        commit('IS_FIRST_LOGIN', data.additionalUserInfo.isNewUser)
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
