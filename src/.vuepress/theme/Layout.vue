<template>
  <div id="app">
    <TheHeader/>

    <TheMain :layout="layout"/>

    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheMain from './components/TheMain'
import TheFooter from './components/TheFooter'

export default {
  name: 'Layout',

  components: {
    TheHeader,
    TheMain,
    TheFooter,
  },

  computed: {
    layout () {
      const defaultLayout = 'home'
      const layout = this.$page.frontmatter.layout || defaultLayout
      return layout.toLowerCase()
    },
  },
}
</script>

<style src="./assets/sass/bootstrap.scss"></style>
<style src="./assets/sass/fonts.scss"></style>
<style src="github-markdown-css/github-markdown.css"></style>
<style src="animate.css/animate.css"></style>
