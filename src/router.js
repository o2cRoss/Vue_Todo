import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Account from './main/account.vue'
import Login from './main/login.vue'
import Register from './main/register.vue'
import GoodsList from './main/goodslist.vue'

let router = new VueRouter({
  routes: [
    {
      path: '/account',
      component: Account,
      children: [
        { path: 'login', component: Login },
        { path: 'register', component: Register }
      ]
    },
    { path: '/goodslist', component: GoodsList }
  ]
});

export default router;