import { RouteItem } from '~/types/typed-router'

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
      meta: {
        title: 'home',
      },
    },
    {
      path: 'test',
      value: 'Home:test',
      component: () => import('@/views/Home/test.vue'),
      meta: {
        title: 'test',
      },
    },
  ],
  meta: {
    order: 1,
    title: '主页',
    prependIcon: 'mdi-home',
  },
} as RouteItem
