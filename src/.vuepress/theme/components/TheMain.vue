<template>
  <main
    class="container animated fadeIn pt-3 pb-4"
    style="animation-delay: .8s;"
  >
    <TransitionFadeSlide>
      <Component
        :is="layout"
        :key="$page.path.replace(/^(\/.*)\/.*$/, '$1')"
      />
    </TransitionFadeSlide>
  </main>
</template>

<script>
import TransitionFadeSlide from '@theme/components/transitions/TransitionFadeSlide'
import About from '@theme/layouts/About'
import Home from '@theme/layouts/Home'
import Help from '@theme/layouts/Help'
import News from '@theme/layouts/News'
import NewsIndex from '@theme/layouts/NewsIndex'

export default {
  name: 'TheMain',

  components: {
    About,
    Help,
    Home,
    News,
    NewsIndex,
    TransitionFadeSlide,
  },

  props: {
    layout: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="stylus" scoped>
.container
  min-height 640px
</style>
