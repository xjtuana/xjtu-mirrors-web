<template>
  <header class="bg-primary text-white">
    <TheHeaderNavbar />

    <TheHeaderJumbotron />
  </header>
</template>

<script>
import TheHeaderNavbar from './TheHeaderNavbar'
import TheHeaderJumbotron from './TheHeaderJumbotron'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderNavbar,
    TheHeaderJumbotron,
  },
}
</script>
