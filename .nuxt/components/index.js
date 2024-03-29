export const LunarPage = () => import('../../components/LunarPage.vue' /* webpackChunkName: "components/lunar-page" */).then(c => wrapFunctional(c.default || c))
export const ProjectsList = () => import('../../components/ProjectsList.vue' /* webpackChunkName: "components/projects-list" */).then(c => wrapFunctional(c.default || c))
export const SolarPage = () => import('../../components/SolarPage.vue' /* webpackChunkName: "components/solar-page" */).then(c => wrapFunctional(c.default || c))
export const SplashScreen = () => import('../../components/SplashScreen.vue' /* webpackChunkName: "components/splash-screen" */).then(c => wrapFunctional(c.default || c))
export const TheHeader = () => import('../../components/TheHeader.vue' /* webpackChunkName: "components/the-header" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
