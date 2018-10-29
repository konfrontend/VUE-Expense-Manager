<template>
	<v-navigation-drawer app dark v-model="open" mobile-break-point="1024" class="blue lighten-3">

		<!--AVATAR-->
		<v-layout class="pa-3">
			<v-avatar>
				<img
						v-if="$store.state.userStatus"
						src="https://avatars0.githubusercontent.com/u/906406"
						alt="Avatar"
				>
				<v-icon v-else>{{$vuetify.icons.user}}</v-icon>

			</v-avatar>
			<v-subheader>{{$store.state.username}}</v-subheader>
		</v-layout>
		<!--END OF AVATAR-->


		<v-divider></v-divider>


		<v-list>

			<v-list-tile
					avatar
			>
				<v-avatar>
					<v-icon>{{$vuetify.icons.total}}</v-icon>
				</v-avatar>
				<v-list-tile-content>
					<v-list-tile-title>Total</v-list-tile-title>
					<v-list-tile-sub-title>balance</v-list-tile-sub-title>
				</v-list-tile-content>
				<v-list-tile-action>
					<span class="headline">{{$store.state.total}}</span>
				</v-list-tile-action>
			</v-list-tile>


			<v-list-group value="true">
				<v-list-tile slot="activator">
					<v-avatar>
						<v-icon>{{$vuetify.icons.budget}}</v-icon>
					</v-avatar>
					<v-list-tile-content>
						<v-list-tile-title>Budgets</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>


				<v-layout row  pa-4>
					<strong >Food</strong>
					<v-progress-linear value="75" color="success"></v-progress-linear>
					<strong >Gadgets</strong>
					<v-progress-linear value="15" color="warning"></v-progress-linear>
					<strong >Cafe</strong>
					<v-progress-linear value="45" color="error"></v-progress-linear>
				</v-layout>



			</v-list-group>

		</v-list>

	</v-navigation-drawer>

</template>

<script>
	export default {
		props: {
			open: Boolean
		},
		data: () => ({
			items: [{
				title: 'Menu Category 1',
				icon: '$vuetify.icons.cancel'
			}, {
				title: 'Menu Category 2',
				icon: '$vuetify.icons.cancel'
			}]
		})
	}
</script>