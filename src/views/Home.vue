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
				<v-btn fab class="primary" @click="dialogIncome">
					<v-icon>{{$vuetify.icons.add}}</v-icon>
				</v-btn>
				<v-btn fab class="secondary" @click="dialogOutcome">
					<v-icon>{{$vuetify.icons.remove}}</v-icon>
				</v-btn>
			</v-layout>

			<v-timeline>
				<v-timeline-item
						v-for="(entry, i) in [...entries].reverse()"
						:color="entry.color"
						:key="i"
						:left="Boolean(entry.type)"
						:right="Boolean(!entry.type)"
						class="`text-sm-${entry.type ? 'left' : 'right'}`"
				>

					<div
							slot="opposite"
							:class="`headline ${!entry.type ? 'success' : 'warning'}--text py-3 `"
					>${{entry.value}}
					</div>
					<div
							slot="opposite"
					>{{getEntryTime(entry.date)}}
						{{entry.description}}
					</div>

				</v-timeline-item>

			</v-timeline>
		</v-container>
		<v-dialog v-model="isDialog.income" width="500" persistent>
			<timeline-entry :title="'Income'" @dismiss="isDialog.income = false"></timeline-entry>
		</v-dialog>
		<v-dialog v-model="isDialog.outcome" width="500" >
			<timeline-entry :title="'Outcome'" @dismiss="isDialog.outcome = false"></timeline-entry>
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
			dialogIncome() {
				this.isDialog.income = true;
			},
			dialogOutcome() {
				this.isDialog.outcome = true;
			}
		}
	}
</script>
