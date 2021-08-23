// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/components/ef/index.css'
import axios from 'axios'


const requests = axios.create({
    baseURL: process.env.VUE_APP_API,
    timeout: 6000 // 请求超时时间
})
Vue.prototype.$axios = requests
Vue.use(ElementUI, {size: 'small'})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: {App},
    template: '<App/>'
})
