<template>
	<v-app id="app">
		<AppNav :open="isNavOpen"></AppNav>
		<v-toolbar dark app id="nav" class="primary">
			<v-icon @click="isNavOpen = !isNavOpen">fas fa-list</v-icon>
			<v-toolbar-title>Manager</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-btn flat to="/">Timeline</v-btn>
				<v-btn flat to="/regular">Regular</v-btn>
				<v-btn flat to="/reports">Reports</v-btn>
				<v-btn flat :ripple="false" to="/categories">Categories</v-btn>
			</v-toolbar-items>
		</v-toolbar>

		<v-content>
			<v-container fluid grid-list-md>
				<router-view></router-view>
			</v-container>
		</v-content>
		<v-footer app inset class="justify-center">
			&copy;{{new Date().getFullYear()}}
		</v-footer>
	</v-app>
</template>

<script>
	import AppNav from '@/components/AppNav';

	export default {
		components: { AppNav },
		data: () => ({
			isNavOpen: true,
		}),

	}
</script>

<style lang="scss">
</style>
