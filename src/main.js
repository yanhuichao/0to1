import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './router'
import App from './App.vue'

Vue.use(VueRouter);
Vue.config.debug = true;

import blogHeader from './components/Header.vue'
import blogSideBar from './components/SideBar.vue'
import blogContent from './components/Content.vue'
import blogFooter from './components/Footer.vue'

// const routes = [
//   { path: '/', component: blogSideBar },
//   { path: 'foo', component: blogSideBar }
// ]

// const router = new VueRouter({
//   //routes // （缩写）相当于 routes: routes
// })

// const app = new Vue({
//   //router
// }).$mount('#app')

// const routes = [
//   { path: '/', component: blogSideBar },
// ]
const router = new VueRouter({
  mode: 'history',
  routes: routers
})

new Vue({
  el: '#app',
  routes: router,
  render: h => h(App)
})
