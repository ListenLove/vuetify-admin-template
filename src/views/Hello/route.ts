export default {
  path: '/hello',
  value: 'hello',
  component: () => import('@/views/Home/test.vue'),
  props: {
    title: 'hello',
  },
}
