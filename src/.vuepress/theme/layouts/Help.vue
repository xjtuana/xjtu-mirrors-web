<template>
  <div class="row">
    <div class="col-md-4 col-lg-3 mb-3 mb-md-0">
      <ListHelps/>
    </div>

    <div class="col-md-8 col-lg-9">
      <TransitionFadeSlide>
        <Content class="markdown-body"/>
      </TransitionFadeSlide>
    </div>
  </div>
</template>

<script>
import ListHelps from '@theme/components/ListHelps'
import TransitionFadeSlide from '@theme/components/transitions/TransitionFadeSlide'

export default {
  name: 'Help',

  components: {
    ListHelps,
    TransitionFadeSlide,
  },
}
</script>
