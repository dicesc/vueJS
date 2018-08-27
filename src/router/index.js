import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import TodoItem from '@/pages/test/TodoItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'TodoItem',
      component: TodoItem
    }
  ]
})
