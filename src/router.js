import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/categories',
			name: 'categories',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "categories" */ './views/Categories.vue')
		},
		{
			path: '/reports',
			name: 'reports',
			component: () => import(/* webpackChunkName: "reports" */ './views/Reports.vue')
		},
	]
})
