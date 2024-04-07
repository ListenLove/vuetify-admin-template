/* 全局路由 */
import { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/layout/index.vue')
const BasicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home/index.vue'),
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/NotFound.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: BasicRoutes,
})

// export default router

export function setupRouter(app: App) {
  app.use(router)
}
