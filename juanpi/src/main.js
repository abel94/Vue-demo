import Vue from 'vue'

import App from './App.vue'

import router from './router/'
import store from './store/'
import './mixins/scroll'
// 引入重置样式
import './assets/styles/reset.styl'
import './assets/styles/swiper.styl'
import './assets/styles/border.styl'




// 是否显示vue的提示信息
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
