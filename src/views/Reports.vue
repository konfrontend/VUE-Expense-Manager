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
					annotations: {

					},
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
						formatter: function(val, opt) {
							return '..' + ":  " + val
						},
						offsetX: 0
						// position: 'bottom'
					},
					stroke: {
						width: 1,
						// colors: ['#fff']
					},
					xaxis: {
						categories: ['Korea', 'Canada', 'Poland', 'Italy', 'France', 'Japan', 'China'],
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
				pie: {
					labels: ["Apple", "Mango", "Banana", "Papaya", "Orange"],

				}
			},
			series: {
				bar: [{
					name: 'series-1',
					// data: [30, 40, 45, 50, 49, 60, 70, 91],
					data: [{ x: '05/06/2014', y: 54 }, { x: '05/08/2014', y: 17 }, { x: '05/28/2014', y: 26 }]
					// data: [{
					// 	x: 'Apple',
					// 	y: 54
					// }, {
					// 	x: 'Orange',
					// 	y: 66
					// }],
					// data: [[1324508400000, 34], [1324594800000, 54], [1326236400000, 43]]

				}],
				pie: [30, 40, 45, 50, 49, 60, 70, 91]
			}
		}),
		mounted() {

		}
		,
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
		}
		,

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