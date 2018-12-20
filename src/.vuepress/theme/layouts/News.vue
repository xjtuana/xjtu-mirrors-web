<template>
  <div class="row">
    <div class="col-md-4 col-lg-3 mb-3 mb-md-0">
      <ListNews :responsive="true" />
    </div>

    <div class="col-md-8 col-lg-9">
      <TransitionFadeSlide>
        <Content class="markdown-body" />
      </TransitionFadeSlide>
    </div>
  </div>
</template>

<script>
import ListNews from '@theme/components/ListNews'
import TransitionFadeSlide from '@theme/components/transitions/TransitionFadeSlide'

export default {
  name: 'News',

  components: {
    ListNews,
    TransitionFadeSlide,
  },
}
</script>
