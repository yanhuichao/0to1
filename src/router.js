import Home from './components/Home.vue'

const routers = [
  {
    path:'/home',
    name:'home',
    component: Home
  },
  {
    path:'/',
    name:'home',
    component: Home
  }
]

export default routers;