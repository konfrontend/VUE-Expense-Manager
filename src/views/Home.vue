<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'

	import axios from 'axios';
	export default {
		name: 'home',
		components: {
			HelloWorld
		},
		mounted() {
			axios.get('http://localhost:5000/api/posts', {
				headers: {
					'Access-Control-Allow-Origin': '*'
				}
			}).then(res => {
				console.log(res);
			});
			
		}
	}
</script>
