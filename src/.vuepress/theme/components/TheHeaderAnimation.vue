<template>
  <div class="XjtuMirrorsLogo">
    <div
      class="Triangle Triangle--one animated zoomIn"
      style="animation-delay: 1s;"
    />

    <div
      class="Triangle Triangle--two animated zoomIn"
      style="animation-delay: 1s;"
    />

    <div
      class="Triangle Triangle--three animated zoomIn"
      style="animation-delay: 1s;"
    />
  </div>
</template>

<script>
export default {
  name: 'TheHeaderAnimation',
}
</script>

<style lang="stylus" scoped>
$blue-base = #177cb0
$blue-light = #278cc0
$blue-dark = #076ca0

.XjtuMirrorsLogo
  display inline-block
  animation turn 5s linear infinite 1s
  position relative
  overflow hidden
  height 180px
  width 210px

.Triangle
  position: absolute
  top 0
  left 0
  width 0
  height 0

.Triangle--one
  border-left 105px solid transparent
  border-right 105px solid transparent
  border-bottom 180px solid $blue-light

.Triangle--two
  top 40px
  left 35px
  border-left 70px solid transparent
  border-right 70px solid transparent
  border-bottom 120px solid $blue-dark

.Triangle--three
  top 80px
  left 70px
  border-left 35px solid transparent
  border-right 35px solid transparent
  border-bottom 60px solid $blue-base

@keyframes turn
  0%
    transform rotateY(0deg)
  50%
    transform rotateY(180deg)
  100%
    transform rotateY(360deg)
</style>
