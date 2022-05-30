import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import request from './utils/request'
import storage from './utils/storage'
import api from './api'
import store from './store'

console.log("环境变量=>", import.meta.env)
const app = createApp(App);

// 自定义指令
app.directive('has', {
    beforeMount: function (el, binding) {
        let actionList = storage.getItem('actionList');
        let value = binding.value;
        let hasPermission = actionList.includes(value)
        if (!hasPermission) {
            el.style = 'display:none';
            setTimeout(() => {
                el.parentNode.removeChild(el);
            }, 0)
        }
    }
})

// 可以在组件用通过 getCurrentInstance() 来获取全局 globalProperties 中配置的信息，getCurrentInstance 方法获取当前组件的实例，然后通过 ctx 属性获得当前上下文，这样我们就能在 setup 中使用 router 和 vuex,  通过这个属性我们就可以操作变量、全局属性、组件属性等等

app.config.globalProperties.$request = request;
app.config.globalProperties.$api = api;
app.config.globalProperties.$storage = storage;
app.use(router).use(store).use(ElementPlus, { size: 'small' }).mount('#app')
