<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-transparent">
    <div class="container">
      <router-link
        to="/"
        class="navbar-brand d-inline d-sm-none">
        <span class="animated fadeIn">XJTU Mirrors</span>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        @click="toggleNavbarLinks">
        <span class="navbar-toggler-icon"/>
      </button>

      <div
        class="navbar-collapse"
        :class="navbarClass">
        <ul class="navbar-nav ml-auto text-center">
          <router-link
            v-for="(nav, i) of $site.themeConfig.nav"
            :key="nav.text"
            :to="nav.link"
            :exact="nav.exact"
            tag="li"
            class="nav-item animated fadeInLeft"
            :style="{ 'animation-delay': `${0.2 * i}s` }">
            <a class="nav-link">{{ nav.text }}</a>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeaderNavbar',

  data () {
    return {
      navbarLinksExpanded: false,
    }
  },

  computed: {
    navbarClass () {
      return {
        'expanded': this.navbarLinksExpanded,
      }
    },
  },

  mounted () {
    this.$router.afterEach(() => {
      this.navbarLinksExpanded = false
    })
  },

  methods: {
    toggleNavbarLinks () {
      this.navbarLinksExpanded = !this.navbarLinksExpanded
    },
  },
}
</script>

<style lang="stylus" scoped>
.navbar
  font-family 'Raleway', sans-serif
  .navbar-collapse
    transition height 0.3s ease
    @media (max-width 576px)
      overflow hidden
      height 0
      .navbar-nav
        display none
      &.expanded
        height 160px
        .navbar-nav
          display flex
</style>
