<template>
  <section>
    <div class="d-none d-md-block">
      <div class="mb-3">
        <span class="h4">
          <FaIcon type="book" />

          <span>帮助文档 <sup><small>Helps</small></sup></span>
        </span>
      </div>

      <div>
        <ul class="list-unstyled">
          <li
            v-for="help in $helps"
            :key="help.name"
            class="list-item px-1"
            :class="{ 'active': $page === help }"
          >
            <RouterLink :to="help.path">
              {{ help.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="dropdown d-block d-md-none">
      <button
        class="btn btn-light dropdown-toggle text-left"
        type="button"
        @click="showMenu = !showMenu"
      >
        <FaIcon type="book" />

        <span>选择帮助文档</span>
      </button>

      <div
        v-show="showMenu"
        class="dropdown-menu show"
      >
        <RouterLink
          v-for="help in $helps"
          :key="help.name"
          :to="help.path"
          class="dropdown-item"
          :class="{ 'active': $page === help }"
        >
          {{ help.name }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
import FaIcon from './FaIcon'

export default {
  name: 'ListHelps',

  components: {
    FaIcon,
  },

  data () {
    return {
      showMenu: false,
    }
  },

  created () {
    this.$router.afterEach(() => {
      this.showMenu = false
    })
  },
}
</script>

<style lang="scss" scoped>
@import '~@theme/assets/sass/variables';

.list-item {
  &:hover {
    background-color: $gray-100;
  }
  &.active {
    background-color: $gray-200;
  }
}
</style>
