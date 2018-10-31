import { format } from '../utils'

export const dataMixin = {
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

      const news = pages.filter(pageFilter).map(pageMap).reverse()
      return news
    },
  },
}

export default dataMixin
