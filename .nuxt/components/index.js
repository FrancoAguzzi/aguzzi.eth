export { default as LunarPage } from '../../components/LunarPage.vue'
export { default as ProjectsList } from '../../components/ProjectsList.vue'
export { default as SolarPage } from '../../components/SolarPage.vue'
export { default as SplashScreen } from '../../components/SplashScreen.vue'
export { default as TheHeader } from '../../components/TheHeader.vue'

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
