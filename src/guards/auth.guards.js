import router from '@/router'
export default function authGuard (store) {
  const routes = ['Login', 'SignUp', 'ForgotPassword']
  router.beforeEach((to, from, next) => {
    if (routes.includes(to.name) && store.state.auth.isLoggedIn) {
      next({ name: 'Home' })
    }
    if (!routes.includes(to.name) && !store.state.auth.isLoggedIn) {
      next({ name: 'Login' })
    }
    next()
  })
}
