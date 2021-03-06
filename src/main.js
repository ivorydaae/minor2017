import Vue from 'vue'

import store from './vuex.js'
import router from './router.js'

import Vuetify from 'vuetify'
import App from './App.vue'

Vue.config.debug = true
Vue.use(Vuetify)

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
