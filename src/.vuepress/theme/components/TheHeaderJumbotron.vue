<template>
  <div class="jumbotron jumbotron-fluid bg-transparent pt-2 pt-sm-0 pb-4 pb-md-5 m-0">
    <div class="container px-3 animated fadeIn">
      <h1 class="my-3 d-none d-sm-block display-4 title animated fadeIn">
        XJTU Mirrors
      </h1>

      <h2 class="subtitle">
        <span class="d-none d-sm-block">
          西安交通大学软件镜像站
        </span>

        <span class="d-block d-sm-none">
          西交镜像
        </span>
      </h2>

      <p class="lead desc mt-3">
        Welcome to XJTU software mirror site
      </p>

      <TheHeaderAnimation class="logo d-none d-md-block" />
    </div>
  </div>
</template>

<script>
import TheHeaderAnimation from './TheHeaderAnimation'
export default {
  name: 'TheHeaderJumbotron',
  components: {
    TheHeaderAnimation,
  },
}
</script>

<style lang="stylus" scoped>
.jumbotron
  cursor default
  .container
    position relative
    .title
      font-family 'Quicksand', sans-serif
    .logo
      position absolute
      top 0
      right 0
</style>
