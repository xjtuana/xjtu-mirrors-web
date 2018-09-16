<template>
  <FontAwesomeIcon
    :icon="icon"
    :size="size"
    :spin="spin"
    :fixed-width="fixedWidth"/>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBook,
  faBullhorn,
  faCheck,
  faCoffee,
  faDownload,
  faExclamationTriangle,
  faLink,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'

const typeIconMap = {
  'book': faBook,
  'bullhorn': faBullhorn,
  'check': faCheck,
  'coffee': faCoffee,
  'download': faDownload,
  'exclamation-triangle': faExclamationTriangle,
  'link': faLink,
  'spinner': faSpinner,
}

export default {
  name: 'FaIcon',

  components: {
    FontAwesomeIcon,
  },

  props: {
    fixedWidth: {
      type: Boolean,
      required: false,
      default: true,
    },

    size: {
      type: String,
      required: false,
      default: '1x',
    },

    spin: {
      type: Boolean,
      required: false,
      default: false,
    },

    type: {
      type: String,
      required: true,
      validator: val => Object.keys(typeIconMap).includes(val),
    },
  },

  computed: {
    icon () {
      return typeIconMap[this.type]
    },
  },
}
</script>
