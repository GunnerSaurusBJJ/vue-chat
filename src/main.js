import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import authGuard from '@/guards/auth.guards'
Vue.config.productionTip = false

authGuard()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
