---
layout: news
---

<div
  v-for="news in $news"
  class="news-item">
  <div
    class="markdown-body"
    v-html="news.excerpt"/>

  <p>......</p>

  <router-link :to="news.path">Read more</router-link>

  <hr class="line"/>
</div>

<style lang="stylus" scoped>
.news-item
  &:not(:last-child)
    .line
      display block
  &:last-child
    .line
      display none
</style>
