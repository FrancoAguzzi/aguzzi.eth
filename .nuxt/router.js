import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _03806226 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _7439f598 = () => interopDefault(import('../pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _e5e397b8 = () => interopDefault(import('../pages/portfolio/projects.vue' /* webpackChunkName: "pages/portfolio/projects" */))
const _2d4cb3df = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _03806226,
    name: "contact"
  }, {
    path: "/portfolio",
    component: _7439f598,
    name: "portfolio"
  }, {
    path: "/portfolio/projects",
    component: _e5e397b8,
    name: "portfolio-projects"
  }, {
    path: "/",
    component: _2d4cb3df,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
