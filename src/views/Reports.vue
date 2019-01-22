<template>
	<div>
		<v-btn @click="updateChart" class="primary">Randomize</v-btn>
		<v-layout row wrap>
			<v-flex>
				<apexcharts type="bar" :options="options.bar" :series="series.bar"></apexcharts>
			</v-flex>

			<v-flex>
				<apexcharts type="line" :options="options.bar" :series="series.bar"></apexcharts>
			</v-flex>

			<v-flex>
				<apexcharts width="400" type="donut" :options="options.pie" :series="series.pie"></apexcharts>
			</v-flex>

		</v-layout>
	</div>

</template>

<script>
	import VueApexCharts from 'vue-apexcharts'

	export default {
		props: {},
		components: {
			apexcharts: VueApexCharts
		},
		data: () => ({
			options: {
				bar: {
					annotations: {},
					theme: {
						// palette: 'palette2'
					},
					chart: {
						width: '100%',
						height: 380,
						type: 'bar',
						// id: 'bar'
					},
					plotOptions: {
						bar: {
							horizontal: true,
						}
					},
					dataLabels: {
						enabled: true,
						style: {
							// colors: ['red']
						},
						textAnchor: 'start',
						formatter: (val) => '$' + val,
						offsetX: 0
						// position: 'bottom'
					},
					stroke: {
						width: 1,
						// colors: ['#fff']
					},
					legend: {
						show: true,
						position: 'right',
						verticalAlign: 'top',
						containerMargin: {
							left: 35,
							right: 60,
						}
					},
					responsive: [{
						breakpoint: 1000,
						options: {
							plotOptions: {
								bar: {
									horizontal: false
								}
							},
							legend: {
								position: 'bottom'
							}
						}
					}]
				},
				pie: {}
			},
			series: {
				bar: [{
					name: '',
					data: [30, 40, 45, 50, 49, 60, 70, 81]
				}],
				pie: [30, 40, 45, 50, 49, 60, 70, 81]
			}
		}),
		computed: {
			wastes() {
				return this.$store.getters.totalWastes;
			},
		},
		mounted() {
			const labels = Object.keys(this.wastes);
			const series = labels.map((k) => this.wastes[k]);

			this.options = {
				...this.options,
				...{
					bar: {
						xaxis: {
							categories: labels
						}
					},
					pie: {
						labels: labels
					}
				}
			}

			this.series = {
				bar: [{
					name: 'Total',
					data: series,
				}],
				pie: series
			}
		},
		methods: {
			updateChart() {
				const max = 90;
				const min = 20;
				const newData = this.series.bar[0].data.map(() => {
					return Math.floor(Math.random() * (max - min + 1)) + min
				})
				// In the same way, update the series option
				this.series.bar = [{
					data: newData
				}]
			}
		},

	}
</script>
<style lang="scss" scoped>
	svg {
		margin: 25px;
		path {
			fill: none;
			stroke: #76BF8A;
			stroke-width: 3px;
		}
	}


</style>