import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App.vue'
import router from './router'
import store from './store'

import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/dist/vuetify.min.css'
// import colors from 'vuetify/es5/util/colors'


Vue.use(Vuetify, {
	iconfont: 'fa',
	icons: {
		'cancel': 'fas fa-ban',

		'budget': 'fas fa-wallet',
		'bank': 'fas fa-piggy-bank',
		'login': 'fas fa-key',
		'menu': 'fas fa-ellipsis-v',
		'settings': 'fas fa-cogs',
		'total': 'fas fa-coins',
		'user': 'fas fa-user',
	},
	theme: {
		// primary: colors.orange,
		// secondary: colors.grey.darken1,
		// accent: colors.shades.black,
		// error: colors.red.accent3,
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
