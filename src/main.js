import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//配置全局文件
import './assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(router);
Vue.use(axios);

Vue.prototype.$http=axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
