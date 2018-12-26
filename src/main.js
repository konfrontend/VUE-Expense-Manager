import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App.vue'
import router from './router'
import store from './store'

import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'


Vue.use(Vuetify, {
	iconfont: 'fa',
	icons: {
		'add': 'fas fa-plus',
		'remove': 'fas fa-minus',
		'cancel': 'fas fa-ban',

		'budget': 'fas fa-wallet',
		'bank': 'fas fa-piggy-bank',
		'login': 'fas fa-key',
		'menu': 'fas fa-ellipsis-v',
		'settings': 'fas fa-cogs',
		'total': 'fas fa-coins',
		'user': 'fas fa-user',
		'time': 'far fa-clock'

	},
	theme: {
		primary: {
			base: '#2A8C85',
			darken1: '#003F3B'
		},
		secondary: {
			base: '#FFA172',
			darken1: '#D97A4A',
		},
		accent: '#A2E5E5',
		error: colors.red.accent3,
		info: '#2196F3',
		success: '#4CAF50',
		warning: '#FFC107'
	},
	options: {
		//will also generate a css variable for each theme color, which you can then use in your component's <style> blocks.
		customProperties: true,
		minifyTheme: function (css) {
			return process.env.NODE_ENV === 'production'
				? css.replace(/[\s|\r\n|\r|\n]/g, '')
				: css
		}
	}
})

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
