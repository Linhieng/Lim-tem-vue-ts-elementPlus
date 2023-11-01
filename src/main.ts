import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ElMessage } from 'element-plus'

import 'element-plus/theme-chalk/src/message.scss'

const app = createApp(App)

app.use(router)

app.config.globalProperties.ElMessage = ElMessage

app.mount('#app')
