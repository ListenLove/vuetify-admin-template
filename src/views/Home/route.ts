export default {
  path: '/',
  name: 'Home',
  component: () => import('@/layouts/index.vue'),
  children: [
    {
      path: '',
      name: 'Home',
      component: () => import('@/views/Home/index.vue'),
    },
  ],
  meta: {
    order: 1,
    title: '主页',
  },
}
