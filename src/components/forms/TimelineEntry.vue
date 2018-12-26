<template>
	<v-card>
		<v-card-title
				class="headline"
				primary-title
		>
			Add {{title}}
		</v-card-title>

		<v-card-text>
			<v-text-field
					v-model="description"
					label="Description"
			></v-text-field>
			<v-text-field
					v-model="amount"
					type="number"
					label="Amount"
			></v-text-field>

			<v-menu
					ref="manualTime"
					v-model="dialog.manualTime"
					transition="scale-transition"
					:return-value.sync="time"
					:close-on-content-click="false"
					origin="center"
					top
			>
				<v-btn
						slot="activator"
						v-show="!time"
						color="primary"
						@click="dialog.manualTime = true"
				>
					Manual Time
				</v-btn>

				<v-text-field
						slot="activator"
						v-model="time"
						v-show="time"
						label="Time"
						prepend-icon="$vuetify.icons.time"
						readonly
				></v-text-field>

				<v-time-picker
						v-model="time"
						@change="$refs.manualTime.save(time)"
						landscape
				></v-time-picker>
			</v-menu>

		</v-card-text>


		<v-divider></v-divider>

		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn
					color="secondary"
					@click="$emit('dismiss')"
			>
				Cancel
			</v-btn>

			<v-btn
					color="primary"
					@click=""
			>
				Add
			</v-btn>

		</v-card-actions>


	</v-card>
</template>

<script>
	export default {
		props: {
			title: {
				type: String
			},
		},
		data: () => ({
			amount: '',
			description: '',
			time: null,
			dialog: {
				manualTime: false
			}
		})
	}
</script>