import router from '@/router'

export default function authGuard () {
  const isAuth = false
  const routes = ['Login']
  router.beforeEach((to, from, next) => {
    if (routes.includes(to.name) && isAuth) {
      next({ name: 'Home' })
    }
    if (!routes.includes(to.name) && !isAuth) {
      next({ name: 'Login' })
    }
    next()
  })
}
