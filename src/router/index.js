import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import Home from '@/views/Home'
import Privacy from '@/views/Privacy'
import { trackPageView } from '@/utils/analytics'

// import { isNil } from 'lodash'
// import store from '@/store'

Vue.use(Router)

/* If you don't know about VueHead, please refer to https://github.com/ktquez/vue-head */

Vue.use(Head, {
  complement: process.env.VUE_APP_TITLE
})

/* If you don't know about VueRouter, please refer to https://router.vuejs.org/ */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    },
    {
      path: '/*',
      name: 'home',
      component: Home
    }
  ]
})

/**
 * Handle user redirections
 */
// eslint-disable-next-line consistent-return
// router.beforeEach((to, from, next) => {
//   if (
//     !(to.meta && to.meta.authNotRequired) &&
//     isNil(store.state.authentication.user)
//   ) {
//     const path =
//       store.state.authentication.user === null ? '/login' : '/check-login'
//     return next(`${path}?redirectUrl=${to.path}`)
//   }
//   next()
// })

/**
 * Track page views for Google Analytics
 */
router.afterEach(to => {
  trackPageView(to)
})

export default router
