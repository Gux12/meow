import Vue from 'vue'
import VueRouter from 'vue-router'
// const  App = resolve => require(['./components/SidebarScroll/SidebarScroll.vue'], resolve)
// const  GroupIntroduction = resolve => require(['./components/GroupIntroduction/GroupIntroduction.vue'], resolve)
// const  GroupNotice = resolve => require(['./components/GroupNotice/GroupNotice.vue'], resolve)
// const  GroupDocumentExchange = resolve => require(['./components/GroupDocumentExchange/GroupDocumentExchange.vue'], resolve)
// const  GroupDaily = resolve => require(['./components/GroupDaily/GroupDaily.vue'], resolve)
// const  GroupStudy = resolve => require(['./components/GroupStudy/GroupStudy.vue'], resolve)
// const  GroupManagement = resolve => require(['./components/GroupManagement/GroupManagement.vue'], resolve)

import App from './components/SidebarScroll/SidebarScroll.vue'
import GroupIntroduction from "./components/GroupIntroduction/GroupIntroduction.vue"
import GroupNotice from "./components/GroupNotice/GroupNotice.vue"
import GroupDocumentExchange from "./components/GroupDocumentExchange/GroupDocumentExchange.vue"
import GroupDaily from "./components/GroupDaily/GroupDaily.vue"
import GroupStudy from "./components/GroupStudy/GroupStudy.vue"
import GroupManagement from "./components/GroupManagement/GroupManagement.vue"

//安装路由器
Vue.use(VueRouter);

//声明路由表
const routes = [
  { path: '', component: GroupIntroduction },
  { path: '/introduction', component: GroupIntroduction },
  { path: '/notice', component: GroupNotice },
  { path: '/document', component: GroupDocumentExchange},
  { path: '/study', component: GroupStudy},
  { path: '/daily', component: GroupDaily},
  { path: '/management', component: GroupManagement}
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