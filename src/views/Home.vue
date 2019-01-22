<template>
	<v-layout row wrap justify-center>
		<v-container v-for="(entries, date) in dates" :key="date">
			<v-layout align-center class="mb-4">
				<strong class="display-1 font-weight-regular mr-4">{{ getDay(date) }}</strong>
				<v-layout column justify-end>
					<div class="title font-weight-light">{{getDayName(date)}}</div>
					<div class="text-uppercase font-weight-light">{{getMonthName(date)}} {{getYear(date)}}</div>
				</v-layout>
			</v-layout>

			<v-layout row justify-space-around>
				<v-btn fab class="primary" @click="dialogIncome(date)">
					<v-icon>{{$vuetify.icons.add}}</v-icon>
				</v-btn>
				<v-btn fab class="secondary" @click="dialogOutcome(date)">
					<v-icon>{{$vuetify.icons.remove}}</v-icon>
				</v-btn>
			</v-layout>

			<v-timeline>
				<v-timeline-item
						v-for="(entry, i) in [...entries].reverse()"
						:color="getColor(entry)"
						:icon="getCategoryIcon(entry)"
						:key="i"
						:left="Boolean(entry.type)"
						:right="Boolean(!entry.type)"
						fill-dot
						class="`text-sm-${entry.type ? 'left' : 'right'}`"
				>

					<div
							slot="opposite"
							:class="`headline ${!entry.type ? 'success' : 'warning'}--text py-3 `">
						${{entry.value}}
					</div>

					<div
							slot="opposite">
						{{getEntryTime(entry.date)}}

						{{entry.description}}
					</div>

				</v-timeline-item>

			</v-timeline>
		</v-container>
		<v-dialog v-model="isDialog.income" width="500" persistent>
			<timeline-entry
					:date="activeDate"
					:type="0"
					@dismiss="isDialog.income = false"
					:visible="isDialog.income"></timeline-entry>
		</v-dialog>
		<v-dialog v-model="isDialog.outcome" width="500" >
			<timeline-entry
					:date="activeDate"
					:type="1"
					@dismiss="isDialog.outcome = false"
					:visible="isDialog.outcome"></timeline-entry>
		</v-dialog>

	</v-layout>
</template>

<script>
	// @ is an alias to /src
	import { Service } from '@/HttpService';
	import TimelineEntry from "../components/forms/TimelineEntry";

	export default {
		name: 'home',
		data() {
			return {
				posts: [],
				show: false,
				isDialog: {
					income: false,
					outcome: false
				},
				activeDate: null
			}
		},
		components: { TimelineEntry },
		computed: {
			dates() {
				return this.$store.state.timeline;
			}
		},
		async created() {
			// Service.createPost({
			// 	"text": Math.random() + ''
			// });

			// Service.deletePost('5bc37d5d55d4091961133334');

			// Service.getPosts().then( res => {
			// 	console.log(res);
			// });

			try {
				this.posts = await Service.getPosts();
			} catch (err) {
				console.log(err);
			}


		},
		mounted() {

		},
		methods: {
			getDay(dateStr) {
				return new Date(dateStr).getDate();
			},

			getYear: (dateStr) => new Date(dateStr).getFullYear(),

			getDayName(dateStr) {
				return new Date(dateStr).toLocaleDateString('en-us', { weekday: 'long' });
			},

			getMonthName(dateStr) {
				return new Date(dateStr).toLocaleDateString('en-us', { month: 'long' });
			},

			getEntryTime: (dateStr) => new Date(dateStr).toLocaleTimeString('en-us', {}),

			dialogIncome(date) {
				this.activeDate = date;
				this.isDialog.income = true;
			},

			dialogOutcome(date) {
				this.activeDate = date;
				this.isDialog.outcome = true;
			},
			
			getColor(entry) {
				if(entry.category) {
					const key = entry.category;
					const selected = this.$store.state.categories[key];
					return selected ? selected.color : (entry.type === 1 ? 'red' : 'green');
				}
				else {
					return entry.type === 1 ? 'red' : 'green';
				}
			},
			getCategoryIcon(entry) {
				if(entry.category) {
					const selected = this.$store.state.categories[entry.category];
					return selected.icon ? selected.icon : this.$vuetify.icons.budget;
				}
				else {
					return this.$vuetify.icons.budget
				}
			}
		},
		watch: {
			'isDialog.income': function() {

				// this.$nextTick(this.$refs.amountInput.focus())
			}
		}
	}
</script>
