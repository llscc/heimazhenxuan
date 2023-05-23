import { createApp } from 'vue'

import App from '@/App.vue'
// 引入element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置element国际化
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg
import 'virtual:svg-icons-register'

// 引入自定义插件对象
import gloablComponent from './components/index'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})

app.use(gloablComponent)
// 引入全局样式
import '@/styles/index.scss'

app.mount('#app')
