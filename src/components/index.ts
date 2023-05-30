import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
import type { App, Component } from 'vue'

const allGlobalComponent = [SvgIcon, Pagination]
//引入element全局图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//const components: { [name: string]: Component } = { SvgIcon }
export default {
  install(app: App) {
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key])
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
