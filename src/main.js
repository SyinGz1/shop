// 引入vue
import Vue from 'vue'
// 引入App组件，
import App from './App.vue'
// 引入路由器
import router from './router'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 
new Vue({
  render: h => h(App),
  router,
  
}).$mount('#app')

// http://localhost:8080/#/ 如果路径中出现了 /#/ , 那么就意为这 你的 路由 配置成功！路由器介入工作！
// 如果在路径中没有出现  /#/ ，那么就意为这 你的 路由 没有配置成功！就是你的路由器还没有介入工作！
