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
			},
			'Fun': {
				limit: 1000,
				value: 900,
				color: 'red'
			},
			'Food': {
				limit: 1000,
				value: 600,
				color: 'yellow'
			},
		},
		categories: {
			work: {
				color: 'green',
				icon: 'fas fa-wallet'
			},
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
			[new Date()]: [],
			[new Date('December 24, 2018')]: [
				{
					type: 1,
					category: 'bills',
					date: new Date('December 24, 2018 03:24:00'),
					value: 100,
					description: 'Description goes here'
				},
				{
					type: 1,
					category: 'bills',
					date: new Date('December 24, 2018 04:24:00'),
					value: 100,
					description: 'Description goes here'
				},
				{
					type: 1,
					category: 'fun',
					date: new Date('December 24, 2018 05:24:00'),
					value: 100,
					description: ''
				},
				{
					type: 0,
					date: new Date('December 24, 2018 14:24:00'),
					value: 100,
					description: ''
				}
			],
			[new Date('December 19, 2018')]: [
				{
					type: 1,
					category: 'food',
					date: new Date('December 19, 2018 12:24:00'),
					value: 100,
					description: 'Description goes here'
				},
				{
					type: 0,
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
		},
		addEntry(state, payload) {

			console.log(payload.time);
			const entryData = {
				type: payload.type,
				category: payload.category ? payload.category : (payload.type === 1 ? 'bills' : 'work'),
				value: payload.amount,
				description: payload.description,
				date: payload.time,
			};

			if(state.timeline[payload.date]) {
				state.timeline[payload.date].push(entryData)
			}
			else {
				state.timeline = Object.assign(state.timeline,  {
					[payload.date]: [entryData]
				})
			}

			state.total = state.total + (payload.amount * (payload.type == 1 ? -1 : 1));
		}
	},
	actions: {},
	getters: {
		categoriesArray: (state) => {
			const cats = state.categories;

			return Object.keys(cats).map(key => {
				const entry = Object.assign(cats[key], {
					name: key
				});
				return entry;
			});
		},
		totalWastes: (state) => {
			const buffer = {};

			for(let key in state.timeline) {
				const wastes = state.timeline[key].filter(x => x.type === 1);
				wastes.map(x => {
					buffer[x.category] = (buffer[x.category] || 0) + Math.abs(x.value)
				});
			}


			return buffer;
		}
	}
})
