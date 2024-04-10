import { RouteModule, RoutesType} from '~/types/typed-router'
const basicRoutes: RoutesType = [
  {
    path: '/404',
    value: '404',
    component: () => import('@/views/NotFound.vue'),
    isHidden: true,
  },
  {
    path: '/:pathMatch(.*)*',
    value: 'EmptyRoute',
    redirect: '/404',
    isHidden: true,
  },
]

const modules = import.meta.glob('@/views/**/route.ts', { eager: true }) as RouteModule
const asyncRoutes: RoutesType = []
Object.keys(modules).forEach((key) => {
  asyncRoutes.push(modules[key].default)
})

export {
  asyncRoutes,
  basicRoutes,
}
