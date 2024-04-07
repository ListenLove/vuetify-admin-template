import { RouteModule, RoutesType} from '~/types/router'
const basicRoutes: RoutesType = [
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/NotFound.vue'),
    isHidden: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'EmptyRoute',
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
