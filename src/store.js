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
		},
		timeline: {
			[new Date('December 24, 2018')]: [
				{
					color: 'pink',
					type: 1,
					category: 'category name',
					date: new Date('December 24, 2018 03:24:00'),
					value: 100,
					description: 'Description goes here'
				},
				{
					color: 'amber',
					type: 1,
					category: '1990',
					date: new Date('December 24, 2018 05:24:00'),
					value: 100,
					description: ''
				},
				{
					color: 'orange',
					type: 0,
					category: '2000',
					date: new Date('December 24, 2018 14:24:00'),
					value: 100,
					description: ''
				}
			],
			[new Date('December 19, 2018')]: [
				{
					color: 'cyan',
					type: 1,
					category: 'lorem ipsum',
					date: new Date('December 19, 2018 12:24:00'),
					value: 100,
					description: 'Description goes here'
				},
				{
					color: 'green',
					type: 0,
					category: 'lorem ipsum dolor',
					date: new Date('December 19, 2018 14:24:00'),
					value: 100,
					description: ''
				},
			],
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
