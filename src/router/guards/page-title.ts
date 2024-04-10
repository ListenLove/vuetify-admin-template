import type { Router } from 'vue-router'

const baseTitle: string = import.meta.env.VITE_APP_TITLE

export function createPageTitleGuard(router: Router) {
  router.afterEach((to) => {
    const pageTitle = to.meta?.title || to.name
    if (pageTitle)
      document.title = `${pageTitle} | ${baseTitle}`
    else
      document.title = baseTitle
  })
}
