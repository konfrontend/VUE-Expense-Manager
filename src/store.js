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
		},
		categories: {
			rent: {
				color: 'orange',
				icon: 'fas fa-home'
			},
			food: {
				color: 'green',
				icon: 'fas fa-utensils'
			},
			bills: {
				color: 'red',
				icon: 'fas fa-file-invoice-dollar'
			},
			fun: {
				color: 'purple',
				icon: 'fas fa-cocktail'
			},
			health: {
				color: 'blue',
				icon: 'fas fa-heartbeat'
			},
			gifts: {
				color: 'brown',
				icon: 'fas fa-gift'
			},
			clothes: {
				color: 'grey',
				icon: 'fas fa-tshirt'
			},
		}
	},
	mutations: {
		addCategory(state, payload) {
			state.categories[payload.name] = {
				color: payload.color,
				icon: payload.icon.code
			}
		}
	},
	actions: {

	}
})
