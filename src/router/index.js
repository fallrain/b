import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
//const Test = () => import(/* webpackChunkName: "Test" */ '@/components/Test')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {requiresAuth: '天'}
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
