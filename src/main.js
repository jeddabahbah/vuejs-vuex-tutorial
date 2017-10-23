import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import store from './vuex/store.js'

new Vue({
  el: '#app',
  render: h => h(App),
  store: store
})
