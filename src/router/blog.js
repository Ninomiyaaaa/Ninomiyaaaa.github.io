/**
 * Created by wentao.z
 * NSNTC
 * on 2020-04-03
 */

export default ([
  {
    path: '/Posts/blog200403',
    name: 'blog200403',
    component: () => import('@/views/posts/blog200403.vue'),
    meta: {
      name: 'Hello Blog',
      title: 'Hello Blog',
      time: '2020-04-03',
    },
  },
  {
    path: '/Posts/blog200408',
    name: 'blog200408',
    component: () => import('@/views/posts/blog200408.vue'),
    meta: {
      name: 'Flutter第一天',
      title: 'Flutter第一天',
      time: '2020-04-08',
    },
  },
])

