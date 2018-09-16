<template>
  <tr
    :class="trClass"
    :title="`镜像名称：${mirror.name}\n最近同步时间：${updatedAt}\n同步状态：${mirror.status}`">
    <td>
      <a
        :href="`//mirrors.xjtu.edu.cn/${mirror.name}/`"
        target="_blank">
        {{ mirror.name }}
      </a>
    </td>

    <td class="d-none d-md-table-cell">
      {{ updatedDistance }}
    </td>

    <td class="mirror-info">
      <FaIcon
        :type="statusIcon.type"
        :spin="statusIcon.spin"
        fixed-width/>

      <router-link
        v-if="help"
        :to="help.path"
        title="点击查看帮助">
        <FaIcon
          type="book"
          fixed-width/>
      </router-link>
    </td>
  </tr>
</template>

<script>
import FaIcon from './FaIcon'

export default {
  name: 'ListMirrorsItem',

  components: {
    FaIcon,
  },

  props: {
    mirror: {
      type: Object,
      required: true,
    },

    help: {
      type: Object,
      required: false,
      default: null,
    },
  },

  computed: {
    trClass () {
      return {
        'table-warning': this.mirror.status === 'syncing',
        'table-danger': this.mirror.status === 'failed',
      }
    },

    statusIcon () {
      return this.mirror.status === 'success'
        ? { type: 'check', spin: false }
        : this.mirror.status === 'syncing'
          ? { type: 'spinner', spin: true }
          : this.mirror.status === 'failed'
            ? { icon: 'exclamation-triangle', spin: false }
            : null
    },

    updatedAt () {
      return this.$utils.format(this.mirror.last_update, 'YYYY-MM-DD HH:mm:ss')
    },

    updatedDistance () {
      return this.$utils.distanceInWordsToNow(this.mirror.last_update)
    },
  },
}
</script>

<style type="text/css" lang="scss" scoped>
td {
  border-width: 0;
  &.mirror-info {
    a {
      color: black;
    }
    i {
      cursor: pointer
    }
  }
}
</style>
