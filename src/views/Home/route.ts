import { RouteItem } from '~/types/router'

export default {
  path: '/',
  value: 'Home',
  component: () => import('@/layouts/index.vue'),
  children: [
    {
      path: '',
      value: 'Home',
      component: () => import('@/views/Home/index.vue'),
      props: {
        title: 'home',
      },
    },
    {
      path: 'test',
      value: 'test',
      component: () => import('@/views/Home/test.vue'),
      props: {
        title: 'test',
      },
    },
  ],
  props: {
    order: 1,
    title: '主页',
    prependIcon: 'mdi-home',
  },
} as RouteItem
