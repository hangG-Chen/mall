/*
 * @Author: your name
 * @Date: 2020-02-26 18:19:02
 * @LastEditTime: 2020-03-17 13:33:21
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
