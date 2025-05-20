import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './style.css'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
