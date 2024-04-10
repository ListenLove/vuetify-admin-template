import nProgress from 'nprogress'
import 'nprogress/nprogress.css'  // 引入样式
import { Router } from 'vue-router'

nProgress.configure({
  minimum: 0.1,
  showSpinner: true,
})
export default function setupRouterProgressGuard(router: Router) {
  router.beforeEach(() => {
    nProgress.start()
  })

  router.afterEach(() => {
    setTimeout(() => {
      nProgress.done()
    }, 200)
  })
}
