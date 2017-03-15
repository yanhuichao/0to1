import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import Nav from './Nav.vue'
import Resouces from './Resources.vue'
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
new Vue({
  el: '#nav',
  render: h => h(Nav)
})
new Vue({
      el: '#resources',
      render: h => h(Resouces)
})
