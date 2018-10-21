<template>
	<v-app id="app">
		<v-navigation-drawer app dark v-model="drawer" mobile-break-point="1024" class="blue lighten-3">
			<v-list>
				<v-list-tile
					v-for="item in items"
					:key="item.title"
					@click=""
				>
					<v-list-tile-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>

					<v-list-tile-content>
						<v-list-tile-title>{{ item.title }}</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
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
	export default {
		props: {
			icon: {
				type: String,
				default: '$vuetify.icons.cancel'
			}
		},
		data: () => ({
			drawer: true,
			items: [{
				title: 'Menu Category 1',
				icon: '$vuetify.icons.cancel'
			},{
				title: 'Menu Category 2',
				icon: '$vuetify.icons.cancel'
			}]
		})
	}
</script>

<style lang="scss">
</style>
