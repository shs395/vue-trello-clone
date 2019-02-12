import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/views/Board.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/vue-trello-clone/',
  routes: [
    {
      path: '/',
      name: 'Board',
      component: Board
    },
  ]
})
