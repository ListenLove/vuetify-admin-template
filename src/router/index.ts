import { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { asyncRoutes, basicRoutes } from './routes'


const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export async function setupRouter(app: App) {
  await generateDynamicRoute()
  app.use(router)
}

// 生成动态路由
async function generateDynamicRoute() {
  // 一般是请求后端接口获取路由，这里不做演示
  // 拿到全部路由后，添加到路由表中
  asyncRoutes.concat(...basicRoutes).forEach((route) => {
    // route中还要设置一下 route.name = route.value
    route.name = route.value
    route.children?.forEach((childRoute) => {
      childRoute.name = childRoute.value
    })
    router.hasRoute(route.value) || router.addRoute(route) // 避免重复添加
  })
}

