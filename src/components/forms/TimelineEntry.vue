<template>
	<v-card>
		<v-card-title
				class="headline"
				primary-title
		>
			Add {{type === 0 ? 'Income' : 'Outcome'}}
		</v-card-title>

		<v-card-text>


			<v-input
					prepend-icon="$vuetify.icons.total"
					:messages="['Amount']"
					class="display-1"
			>
				<input ref="amountInput" type="number" placeholder="100" v-model="amount">
			</v-input>

			<v-select
					v-if="type === 1"
					v-model="category"
					:items="categories"
					:placeholder="'Category'"
					:prepend-icon="category.icon"
			>
				<template slot="selection" slot-scope="data">
					{{data.item.name}}
				</template>
				<template slot="item" slot-scope="data">
					{{data.item.name}}
				</template>

			</v-select>

			<v-text-field
					v-model="description"
					placeholder="Description"
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
					:disabled="!amount"
					@click="addEntry"
			>
				Add
			</v-btn>

		</v-card-actions>


	</v-card>
</template>

<script>
	import moment from 'moment'

	export default {
		props: {
			type: Number,
			visible: Boolean,
			date: String
		},
		data: () => ({
			amount: '',
			description: '',
			time: null,
			category: {},
			dialog: {
				manualTime: false,
				description: false
			}
		}),
		computed: {
			categories() {
				return this.$store.getters.categoriesArray;
			}
		},
		methods: {
			addEntry() {
				let time = this.time;
				let today = new Date();

				if(time) {
					const d = moment(time, 'HH:mm');
					const target = moment(this.date);

					d.month(target.month());
					d.year(target.year());

					time = d._d;

				}
				let data = {
					amount: this.amount,
					description: this.description,
					time: time ? time : today,
					category: this.category.name ? this.category.name : null,
					date: this.date,
					type: this.type
				};

				this.$store.commit('addEntry', data);
				this.$emit('dismiss');
			}
		},
		watch: {
			visible() {
				this.$refs.amountInput.focus();
			}
		}

	}
</script>