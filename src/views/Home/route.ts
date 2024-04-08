import { RouteItem } from '~/types/router'

export default {
  path: '/',
  value: 'Home',
  component: () => import('@/layouts/index.vue'),
  redirect: '/home',
  children: [
    {
      path: 'home',
      value: 'Home:home',
      component: () => import('@/views/Home/index.vue'),
      props: {
        title: 'home',
      },
    },
    {
      path: 'test',
      value: 'Home:test',
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
