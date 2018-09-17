<template>
  <div>
    <div class="mb-3 row">
      <span class="h4 col-sm-6">
        <FaIcon
          class="mr-2"
          type="coffee"/>

        <span>镜像列表 <sup><small>Mirrors</small></sup></span>
      </span>

      <div class="text-right col-sm-6">
        <input
          v-show="!isLoading && !isFailed"
          v-model="condition"
          type="text"
          class="form-control"
          placeholder="Filter Mirrors">
      </div>
    </div>

    <div>
      <TransitionFadeSlide
        direction="x"
        :appear="false">
        <p v-if="isLoading">
          正在获取镜像列表……
        </p>

        <p v-else-if="isFailed">
          获取镜像列表失败
        </p>

        <p v-else-if="filteredMirrors.length === 0">
          暂无相关镜像
        </p>

        <table
          v-else
          class="table table-hover table-sm m-0">
          <thead>
            <tr>
              <th>名称</th>

              <th class="d-none d-md-table-cell">最近同步时间</th>

              <th>说明</th>
            </tr>
          </thead>

          <TransitionFadeSlide
            direction="x"
            :group="true"
            tag="tbody">
            <ListMirrorsItem
              v-for="mirror in filteredMirrors"
              :key="mirror.name"
              :mirror="mirror"
              :help="$helps.find(obj => obj.name === mirror.name) || null"/>
          </TransitionFadeSlide>
        </table>
      </TransitionFadeSlide>
    </div>
  </div>
</template>

<script>
import ListMirrorsItem from './ListMirrorsItem'
import TransitionFadeSlide from './transitions/TransitionFadeSlide'
import FaIcon from './FaIcon'

export default {
  name: 'ListMirrors',

  components: {
    ListMirrorsItem,
    TransitionFadeSlide,
    FaIcon,
  },

  data () {
    return {
      mirrors: null,
      condition: '',

      isFetching: true,
      isFetchFailed: false,
    }
  },

  computed: {
    isLoading () {
      return this.mirrors === null && this.isFetching
    },

    isFailed () {
      return this.mirrors === null && this.isFetchFailed
    },

    filteredMirrors () {
      if (this.mirrors === null) return null
      let filteredMirrors = this.mirrors.filter(item => item.name.toLowerCase().includes(this.condition.toLowerCase()))
      return filteredMirrors
    },
  },

  mounted () {
    this.fetchMirrors()
    setInterval(this.fetchMirrors, 30000)
  },

  methods: {
    async fetchMirrors () {
      try {
        this.isFetchFailed = false
        this.isFetching = true

        const response = await fetch('https://mirrors.xjtu.edu.cn/api/status.json')
        this.mirrors = await response.json()
      } catch (e) {
        console.error(e)
        this.isFetchFailed = true
      } finally {
        this.isFetching = false
      }
    },
  },
}
</script>
