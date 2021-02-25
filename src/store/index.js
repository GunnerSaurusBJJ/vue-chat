import Vue from 'vue'
import Vuex from 'vuex'
import authGuard from '@/guards/auth.guards'
import firebase from '@/plugins/firebase'
import auth from './modules/auth'
import notify from './modules/notify'
import user from './modules/user'
import router from '@/router'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    notify,
    user
  }
})

firebase.auth().onAuthStateChanged((userData) => {
  store.dispatch('setIsLoggedInState', Boolean(userData))
  store.dispatch('setUserState', userData)
  if (userData) {
    router.push('/')
  }
})

authGuard(store)

export default store
