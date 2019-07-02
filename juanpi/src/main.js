import Vue from 'vue'
import App from './App.vue'

import router from './router/'
// 引入重置样式
import './assets/styles/reset.styl'
import './assets/styles/swiper.styl'

// 是否显示vue的提示信息
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
