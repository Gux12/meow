import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/SidebarScroll/SidebarScroll.vue'
import GroupIntroduction from "./components/GroupIntroduction/GroupIntroduction.vue"
import GroupNotice from "./components/GroupNotice/GroupNotice.vue"
import GroupDocumentExchange from "./components/GroupDocumentExchange/GroupDocumentExchange.vue"
import GroupDaily from "./components/GroupDaily/GroupDaily.vue"
import GroupStudy from "./components/GroupStudy/GroupStudy.vue"

//安装路由器
Vue.use(VueRouter);

//声明路由表
const routes = [
  { path: '', component: GroupIntroduction },
  { path: '/introduction', component: GroupIntroduction },
  { path: '/notice', component: GroupNotice },
  { path: '/document', component: GroupDocumentExchange},
  { path: '/study', component: GroupStudy},
  { path: '/daily', component: GroupDaily}
]

//声明路由器实例
const router = new VueRouter({
  routes
})

//创建并且绑定实例
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')