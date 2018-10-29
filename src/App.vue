<template>
	<v-app id="app">
		<AppNav :open="drawer"></AppNav>

		<v-toolbar app id="nav">
			<v-icon @click="drawer = !drawer">fas fa-list</v-icon>
			<v-toolbar-title>App Title</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-btn flat to="/">Overall</v-btn>
				<v-btn flat to="/regular">Regular</v-btn>
				<v-btn flat to="/reports">Reports</v-btn>
				<v-btn flat :ripple="false" to="/budget">Budget</v-btn>
			</v-toolbar-items>
		</v-toolbar>

		<v-content>
			<v-container fluid grid-list-md>
				<router-view></router-view>
				<!--<v-icon>$vuetify.icons.menu</v-icon>-->
				<!--<v-icon v-text="'$vuetify.icons.cancel'"></v-icon>-->
				<!--<v-icon v-text="icon"></v-icon>-->
			</v-container>
		</v-content>
		<v-footer app inset class="justify-center">
			&copy; {{new Date().getFullYear()}}
		</v-footer>

	</v-app>
</template>

<script>
	import AppNav from '@/components/AppNav';

	export default {
		components: { AppNav },
		data: () => ({
			drawer: true,
		}),
		props: {
			icon: {
				type: String,
				default: '$vuetify.icons.cancel'
			}
		},

	}
</script>

<style lang="scss">
</style>
