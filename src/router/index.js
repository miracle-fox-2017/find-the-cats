import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Post from '@/components/Post'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Post
        },
        {
          path: '/detail/:id',
          props: true,
          name: 'Detail',
          component: Detail
        }
      ]
    }
  ]
})
