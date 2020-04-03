import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import navigator from './navigator.js'
import blog from './blog.js'

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: () => import('@/views/MainPage.vue'),
      meta:{
        title:'嘘'
      }
    },
    ...navigator,
    ...blog,
  ],
})
