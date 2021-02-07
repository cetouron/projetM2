import Vue from 'vue'

import App from './App.vue'
import store from './store'
import router from './router'
import './registerServiceWorker'

// plugins
import vuetify from './plugins/vuetify'

// styles
import './styles/index.scss'

Vue.config.productionTip = false
Vue.prototype.$jambon = 'test'


new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
