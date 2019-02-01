import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test2 from '@/components/Test2.vue'
import Test3 from '@/components/Test3.vue'
import Test4 from '@/components/Test4.vue'
import Test5 from '@/components/Test5.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test2',
      name: 'Test2',
      component: Test2
    },
    {
      path: '/test3',
      name: 'Test3',
      component: Test3
    },
    {
      path: '/test4',
      name: 'Test4',
      component: Test4
    },
    {
      path: '/test5',
      name: 'Test5',
      component: Test5
    }
  ]
})
