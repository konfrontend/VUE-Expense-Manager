<template>
	<div>
		<div>
			<h1 class="display-2">Categories</h1>
			<br>
			<v-btn
					@click="addCategory"
					color="primary"
					:disabled="isFetching"
					:loading="isFetching"
			>
				ADD NEW
			</v-btn>

		</div>
		<br>

		<v-item-group>
			<v-layout grid-list-md wrap>
				<v-flex
						v-for="(n, key) in categories"
						:key="key"
						xs12
						md4
				>
					<transition name="scroll-y-transition" appear>
						<v-item>
							<v-card
									slot-scope="{ active, toggle }"
									:color="active ? 'primary' : n.color"
									class="d-flex align-center"
									dark
									height="200"
									@click.native="toggle"
							>
								<v-container>
									<v-layout align-center align-content-center>
										<v-icon x-large>{{n.icon}}</v-icon>
										<v-card-title>
											<span class="headline text-capitalize" v-text="key"></span>

										</v-card-title>
									</v-layout>
								</v-container>
							</v-card>
						</v-item>
					</transition>
				</v-flex>
			</v-layout>
		</v-item-group>

		<v-dialog
				v-model="isDialog"
				width="500"
		>
			<v-card>
				<v-card-title
						class="headline"
						primary-title
				>
					Create Cateory
				</v-card-title>

				<v-card-text>
					<v-text-field
							v-model="create.name"
							:rules="nameRules"
							label="Name"
							required
					></v-text-field>
					<v-text-field
							v-model="create.color"
							label="Color"
					></v-text-field>
					<v-select
							v-model="create.icon.code"
							:items="icons"
							:rules="[v => !!v || 'Item is required']"
							label="Icon"
					>

						<template slot="item" slot-scope="data">
							<v-layout>
								<v-icon>{{data.item.code}}</v-icon>
							</v-layout>
						</template>
						<template slot="selection" slot-scope="data">
							<v-icon>{{data.item.code}}</v-icon>
						</template>


					</v-select>
				</v-card-text>


				<v-divider></v-divider>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
							color="secondary"
							@click="isDialog = false"
					>
						Cancel
					</v-btn>

					<v-btn
							color="primary"
							@click="submitCategory"
					>
						Add
					</v-btn>

				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
	// @ is an alias to /src
	// import { Service } from '@/HttpService'
	import { mapState } from 'vuex'


	export default {
		name: 'home',
		data() {
			return {
				icons: [],
				isDialog: false,
				isFetching: false,
				create: {
					color: '',
					name: '',
					icon: { code: null }
				},
			}
		},
		computed: {
			...mapState([
				'categories',
			]),
			nameRules() {
				return [
					v => !!v || 'Name is required',
					v => {
						const c = this.categories;
						const upper = v.replace(/^\w/, c => c.toUpperCase());
						return !(c.hasOwnProperty(v) || c.hasOwnProperty(upper)) || 'Category exists';
					}
				]
			}
		},
		components: {},
		async created() {
		},
		mounted() {
		},
		methods: {
			submitCategory() {
				this.isDialog = false;
				this.$store.commit('addCategory', this.create);
			},
			addCategory() {
				if (this.icons.length) {
					this.isDialog = true;
				}
				else {
					this.isFetching = true;

					Promise.all([
						import(`@fortawesome/fontawesome-svg-core`),
						import(`@fortawesome/free-solid-svg-icons`)
					]).then(([core, icons]) => {
						core.library.add(icons.fas);

						const fasArray = Object.keys(core.library.definitions.fas);

						fasArray.map(item => {
							this.icons.push({ code: `fas fa-${item}` });
						});

						setTimeout(() => {
							this.isDialog = true;
							this.isFetching = false;
						}, 500)
					})
				}
			}
		},
		watch: {}
	}
</script>

