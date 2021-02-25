import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import vuetify from './plugins/vuetify'
import Toasted from 'vue-toasted'; Vue.config.productionTip = false
Vue.use(Toasted)
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
