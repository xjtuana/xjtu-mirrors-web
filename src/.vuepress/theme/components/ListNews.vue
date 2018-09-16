<template>
  <section>
    <div :class="responsiveClass">
      <div class="mb-3">
        <span class="h4">
          <FaIcon type="bullhorn"/>

          <span>新闻通知 <sup><small>News</small></sup></span>
        </span>
      </div>

      <TransitionFadeSlide direction="x">
        <ul :class="{ 'list-unstyled': responsive }">
          <li
            v-for="news in displayNews"
            :key="news.title"
            class="list-item px-1"
            :class="{ 'active': $page === news }">
            <router-link :to="news.path">
              {{ news.title }}
            </router-link>

            <br>

            <sup class="text-muted">{{ news.createdAt }}</sup>
          </li>
        </ul>
      </TransitionFadeSlide>
    </div>

    <div
      v-if="responsive"
      class="dropdown d-block d-md-none">
      <button
        class="btn btn-light dropdown-toggle text-left"
        type="button"
        @click="showMenu = !showMenu">
        <FaIcon type="bullhorn"/>

        <span>选择新闻通知</span>
      </button>

      <div 
        v-show="showMenu"
        class="dropdown-menu show">
        <router-link
          v-for="news in displayNews"
          :key="news.title"
          :to="news.path"
          class="dropdown-item"
          :class="{ 'active': $page === news }">
          <span class="date">{{ news.createdAt }}</span> - {{ news.title }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import FaIcon from './FaIcon'
import TransitionFadeSlide from './transitions/TransitionFadeSlide'

export default {
  name: 'ListNews',

  components: {
    FaIcon,
    TransitionFadeSlide,
  },

  props: {
    limit: {
      type: Number,
      default: 0,
    },
    responsive: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      showMenu: false,
    }
  },

  computed: {
    responsiveClass () {
      return {
        'd-none d-md-block': this.responsive,
      }
    },

    displayNews () {
      let displayNews = this.limit > 0 ? this.$news.slice(0, this.limit) : this.$news
      return displayNews
    },
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

.dropdown-item {
  .date {
    color: $secondary;
  }
  &.active {
    .date {
      color: $light;
    }
  }
}
</style>
