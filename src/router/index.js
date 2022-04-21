import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// const login=() => import('views/Login.vue');
// const home=() => import('views/Home.vue');
// const flow=() => import('components/option detail/Flow');
// const notice=() => import('components/option detail/Notice')
// const sendMail=() => import('components/option detail/SendMail')
import Login from "../views/Login";
import Home from "../views/Home";
import Flow from "../components/flow/Flow";
import Notice from "../components/notice/Notice";
import SendMail from "../components/mail/SendMail";
import Mall from "../components/mall/Mall";
const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'flow'
      },
      {
        name: 'flow',
        path: 'flow',
        component: Flow
      },
      {
        name: 'notice',
        path: 'notice',
        component: Notice
      },
      {
        name: 'sendMail',
        path: 'sendMail',
        component: SendMail
      },      {
        name: 'mall',
        path: 'mall',
        component: Mall
      },
    ]
  },
]

const router = new VueRouter({
  routes,
  mode: 'hash',
  linkActiveClass: 'active'
})

export default router
