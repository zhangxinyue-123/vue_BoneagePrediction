import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Register from '../components/Register.vue'
import memberdoc from '../components/memberdoc.vue'
import memberuser from '../components/memberuser.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    { path:'/', redirect: '/login' },
    { path:'/login', name:'Login',component:Login },
    {path:'/home', name:'Home',component:Home,
    children:[
      { path:'/memberdoc', name:'memberuser',component:memberdoc},
      { path:'/memberuser', name:'memberuser',component:memberuser }
    ] },
    {path:'/register', name:'Register',component:Register}
],
ProxyTable:{
  "/apis":{
    target:"http://utf8.api.smschinese.cn/",
    changeOrigin:true,
    pathRewriter:"/apis"
  }
}
});

