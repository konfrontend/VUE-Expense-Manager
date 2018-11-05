<template>
	<v-navigation-drawer app dark :value="open" mobile-break-point="1024" class="">

		<v-layout column justify-space-between fill-height>
			<div>
				<!--AVATAR-->
				<v-layout class="pa-3">
					<v-avatar>
						<img
								v-if="userStatus"
								src="https://avatars0.githubusercontent.com/u/906406"
								alt="Avatar"
						>
						<v-icon v-else>{{$vuetify.icons.user}}</v-icon>

					</v-avatar>
					<v-subheader>{{username}}</v-subheader>
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
							<span class="headline">{{total}}</span>
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

						<v-list-tile v-for="(scale, name) in budget" :key="name" avatar>
							<v-list-tile-content>
								<v-list-tile-title>{{name}} - {{scale.value}} / {{scale.limit}}</v-list-tile-title>
								<v-progress-linear :value="scale.value / scale.limit * 100" :color="scale.color"></v-progress-linear>
							</v-list-tile-content>
						</v-list-tile>


					</v-list-group>

				</v-list>

			</div>
			<v-list>

				<v-list-tile
						avatar
				>
					<v-avatar>
						<v-icon>{{$vuetify.icons.login}}</v-icon>
					</v-avatar>
					<v-list-tile-content>
						<v-list-tile-title>Login</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>

				<v-list-tile
						avatar
						small
				>
					<v-avatar>
						<v-icon>{{$vuetify.icons.settings}}</v-icon>
					</v-avatar>
					<v-list-tile-content>
						<v-list-tile-title>Settings</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>

			</v-list>
		</v-layout>



	</v-navigation-drawer>

</template>

<script>
	import { mapState } from 'vuex'

	export default {
		props: {
			open: Boolean
		},
		data: () => ({
			loader: null,
			loading3: false,
		}),
		computed: mapState([
			'total',
			'userStatus',
			'username',
			'budget'
		]),
		watch: {
			loader () {
				const l = this.loader
				this[l] = !this[l]

				setTimeout(() => (this[l] = false), 3000)

				this.loader = null
			}
		}
	}
</script>