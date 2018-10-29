<template>
	<v-layout row wrap >
		<v-flex xs6 >
			<img alt="Vue logo" src="../assets/logo.png">
		</v-flex>
		<v-flex xs6>
			<div v-for="(post, index) in posts" :item="post" :index="index" :key="post._id">
				{{post.text}}
			</div>
		</v-flex>

	</v-layout>
</template>

<script>
	// @ is an alias to /src
	import { Service } from '@/HttpService';

	export default {
		name: 'home',
		data() {
			return {
				posts: []
			}
		},
		components: {
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
		}
	}
</script>
