import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		userStatus: 1,
		username: 'Username',
		total: 1000,
		budget: {
			'Gadgets': {
				limit: 1000,
				value: 400,
				color: 'success'
			}
		}
	},
	mutations: {},
	actions: {}
})
