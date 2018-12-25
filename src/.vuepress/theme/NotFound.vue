<template>
  <div id="app">
    <TheHeader />

    <main
      class="markdown-body container text-center animated fadeIn pt-3 pb-4"
      style="animation-delay: .8s;"
    >
      <h1>404 Not Found</h1>

      <p class="text-secondary">
        {{ getMsg() }}
      </p>

      <RouterLink to="/">
        返回首页
      </RouterLink>
    </main>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'

const msgs = [
  `这里什么都没有~`,
  `你怎么跑这来了？`,
  `链接并不存在噢~`,
]

export default {
  name: 'NotFound',

  components: {
    TheHeader,
    TheFooter,
  },

  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    },
  },
}
</script>

<style src="./assets/sass/bootstrap.scss" lang="scss"></style>
<style src="./assets/sass/fonts.scss" lang="scss"></style>
<style src="github-markdown-css/github-markdown.css"></style>
<style src="animate.css/animate.css"></style>

<style lang="stylus" scoped>
main.container
  @media screen and (min-width: 576px)
    min-height 640px

  @media screen and (max-width 576px)
    min-height 500px
</style>
