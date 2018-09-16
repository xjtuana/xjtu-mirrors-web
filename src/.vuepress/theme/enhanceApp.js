// import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import format from 'date-fns/format'
import locale from 'date-fns/locale/zh_cn'

const dataMixin = {
  computed: {
    $helps () {
      // 获取所有 layout 为 help 的页面
      const pages = this.$site.pages

      const pageFilter = p => {
        return p.frontmatter.layout === 'help' && p.path.endsWith('.html')
      }

      // 将 frontmatter 里的内容格式化
      const pageMap = p => {
        p.name = p.frontmatter.name || p.path.replace(/^.*\/(.*)\.html$/, '$1') || null
        p.createdAt = p.frontmatter.date ? format(p.frontmatter.date, 'YYYY-MM-DD') : null
        p.updatedAt = p.lastUpdated ? format(p.lastUpdated, 'YYYY-MM-DD') : null
        return p
      }

      const helps = pages.filter(pageFilter).map(pageMap)
      return helps
    },

    $news () {
      // 获取所有 layout 为 news 的页面
      const pages = this.$site.pages

      const pageFilter = p => {
        return p.frontmatter.layout === 'news' && p.path.endsWith('.html')
      }

      // 将 frontmatter 里的内容格式化
      const pageMap = p => {
        p.createdAt = p.frontmatter.date ? format(p.frontmatter.date, 'YYYY-MM-DD') : null
        p.updatedAt = p.lastUpdated ? format(p.lastUpdated, 'YYYY-MM-DD') : null
        return p
      }

      const news = pages.filter(pageFilter).map(pageMap)
      return news
    },
  },
}

export default ({ Vue, options }) => {
  Vue.mixin(dataMixin)

  Vue.prototype.$utils = {
    format (date, formatStr) {
      return format(date, formatStr, { locale })
    },

    distanceInWordsToNow (date) {
      return distanceInWordsToNow(date, { addSuffix: true, locale })
    },
  }

  // Vue.component('FontAwesomeIcon', {
  //   functional: true,
  //   props: FontAwesomeIcon.props,
  //   render (h, context) {
  //     if (context.parent._isMounted) {
  //       return h(FontAwesomeIcon, context)
  //     } else {
  //       context.parent.$once('hook:mounted', () => {
  //         context.parent.$forceUpdate()
  //       })
  //     }
  //   }
  // })
}
