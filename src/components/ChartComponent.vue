<template>
  <div>
    <DoughnutChart :chart-data="chartData" />
  </div>
</template>

<script>
import { DoughnutChart } from 'vue-chart-3'

export default {
  components: { DoughnutChart },
  props: ['currencyPrice'],
  data() {
    return {
      chartData: {
        labels: this.currencyPrice,
        datasets: [
          {
            data: this.currencyPrice,
            backgroundColor: ['#faa', '#afa', '#aaf'],
            zIndex: 0
          }
        ]
      }
    }
  }
}
</script>
