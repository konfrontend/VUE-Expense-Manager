<template>
	<v-layout row wrap justify-center>
		<v-container>

			<v-layout align-center class="mb-4">
				<strong class="display-1 font-weight-regular mr-4">9</strong>
				<v-layout column justify-end>
					<div class="title font-weight-light">Tuesday</div>
					<div class="text-uppercase font-weight-light">February 2015</div>
				</v-layout>
			</v-layout>

			<v-layout row justify-space-around>
				<v-btn fab class="primary"><v-icon>{{$vuetify.icons.add}}</v-icon></v-btn>
				<v-btn fab class="secondary"><v-icon>{{$vuetify.icons.remove}}</v-icon></v-btn>
			</v-layout>

			<v-timeline >
				<v-timeline-item
						v-for="(entry, i) in items"
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
					>{{entry.date}}</div>

				</v-timeline-item>

			</v-timeline>
		</v-container>


		<v-container>
			<v-layout align-center>
				<strong class="display-1 font-weight-regular mr-4">9</strong>
				<v-layout column justify-end>
					<div class="title font-weight-light">Tuesday</div>
					<div class="text-uppercase font-weight-light">February 2015</div>
				</v-layout>
			</v-layout>
		</v-container>

	</v-layout>
</template>

<script>
	// @ is an alias to /src
	import { Service } from '@/HttpService';

	export default {
		name: 'home',
		data() {
			return {
				posts: [],
				show: false,
				items: [
					{
						color: 'cyan',
						type: 1,
						category: 'lorem ipsum',
						date: new Date(),
						value: 100
					},
					{
						color: 'green',
						type: 0,
						category: 'lorem ipsum dolor',
						date: new Date(),
						value: 100
					},
					{
						color: 'pink',
						type: 1,
						category: 'category name',
						date: new Date(),
						value: 100
					},
					{
						color: 'amber',
						type: 1,
						category: '1990',
						date: new Date(),
						value: 100
					},
					{
						color: 'orange',
						type: 0,
						category: '2000',
						date: new Date(),
						value: 100
					}
				].reverse()
			}
		},
		components: {},
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

		}
	}
</script>
