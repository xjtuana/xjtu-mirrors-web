import dataMixin from './mixins/dataMixin'
import utils from './utils'

export default ({ Vue }) => {
  Vue.mixin(dataMixin)

  Vue.prototype.$utils = { ...utils }
}
