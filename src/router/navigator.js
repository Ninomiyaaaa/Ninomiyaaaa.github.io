/**
 * Created by wentao.z
 * NSNTC
 * on 2020-04-03
 */
export default ([
  {
    path: '/Posts',
    name: 'Posts',
    component: () => import('@/views/Posts.vue'),
    meta: {
      name: 'Posts',
      title: 'Posts',
    },
  },
  {
    path: '/Coffee',
    name: 'Coffee',
    component: () => import('@/views/Coffee.vue'),
    meta: {
      name: 'Coffee',
      title: 'Coffee',
    },
  },
])
