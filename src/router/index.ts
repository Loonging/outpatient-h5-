import { createRouter, createWebHistory } from 'vue-router'
import { basicRoutes } from './routerList'

const router = createRouter({
  history: createWebHistory(),
  routes: basicRoutes
})

/* 
router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    // 获取userToken，根据业务场景可由localStorage也可由cookie中获取
    const user = localStorage.getItem('user')
    // 路由守卫判断
    if (to.meta.type === 'login' && user) {
      next({ name: 'home' })
      return
    }

    if (to.meta.type === 'home' && !user) {
      next({ name: 'login' })
      return
    }

    next()
  }
)
*/

export default router
