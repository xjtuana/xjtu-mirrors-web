<template>
  <div class="row">
    <div class="col-md-4 col-lg-3 mb-3 mb-md-0">
      <ListNews :responsive="true"/>
    </div>

    <div class="col-md-8 col-lg-9">
      <div
        class="news-item"
        v-for="news in $news"
        :key="news.path">
        <div
          class="markdown-body"
          v-html="news.excerpt"/>

        <p>......</p>

        <p>
          <span class="news-item-date">
            <FaIcon type="calendar-alt"/>
            {{ news.createdAt }}
          </span>

          <router-link
            class="news-item-read-more"
            :to="news.path">
            Read more
          </router-link>
        </p>

        <hr class="line mb-5">
      </div>
    </div>
  </div>
</template>

<script>
import FaIcon from '@theme/components/FaIcon'
import ListNews from '@theme/components/ListNews'
import TransitionFadeSlide from '@theme/components/transitions/TransitionFadeSlide'

export default {
  name: 'NewsIndex',

  components: {
    FaIcon,
    ListNews,
    TransitionFadeSlide,
  },
}
</script>

<style lang="scss" scoped>
@import '~@theme/assets/sass/variables';

.news-item {
  &:not(:last-child) {
    .line {
      display: block;
    }
  }
  &:last-child {
    .line {
      display: none;
    }
  }
  .news-item-date {
    color: $gray-500;
  }
  .news-item-read-more {
    float: right;
  }
}
</style>
