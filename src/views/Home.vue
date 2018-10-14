<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/>
		<div v-for="(post, index) in posts" :item="post" :index="index" :key="post._id">
			{{post.text}}
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'

	import { Service } from '@/HttpService';

	export default {
		name: 'home',
		data() {
			return {
				posts: []
			}
		},
		components: {
			HelloWorld,
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
