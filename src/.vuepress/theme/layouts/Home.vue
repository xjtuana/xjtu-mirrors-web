<template>
  <div class="row">
    <div class="col-md-8">
      <ListMirrors />
    </div>

    <div class="col-md-4 mt-4 mt-md-0">
      <ListNews :limit="5" />

      <hr>

      <ListDownloads />

      <hr>

      <ListLinks />
    </div>
  </div>
</template>

<script>
import ListDownloads from '@theme/components/ListDownloads'
import ListMirrors from '@theme/components/ListMirrors'
import ListNews from '@theme/components/ListNews'
import ListLinks from '@theme/components/ListLinks'

export default {
  name: 'Home',

  components: {
    ListDownloads,
    ListLinks,
    ListMirrors,
    ListNews,
  },
}
</script>
