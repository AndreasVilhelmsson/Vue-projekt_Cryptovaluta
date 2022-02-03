<template>
  <div class="container">
    <ul v-for="currency in getSingleCryptoCurrency" :key="currency.uuid">
      <li>
        <h3>currency {{ currency.name }}</h3>
      </li>
      <li>
        <div class="text-container">
          <img :src="currency.iconUrl" alt="" srcset="" class="icon-image" />
          <p v-html="currency.description" />
        </div>
      </li>
      <li>
        <ChartComponent
          :currency-price="currency.sparkline"
          style="z-index: -1"
        />
      </li>
    </ul>
    <div>
      <input type="button" value="oki lets play" class="btn btn-primary" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ChartComponent from '../components/ChartComponent.vue'
export default {
  components: { ChartComponent },
  name: 'DetailsPage',
  methods: {
    ...mapActions(['getSingleCoin'])
  },
  computed: {
    ...mapGetters(['getSingleCryptoCurrency'])
  },
  mounted() {
    this.getSingleCoin(this.$route.params.id)
  }
}
</script>
<style lang="scss" scoped>
.container {
  color: black;
  display: flex;
}
div {
  margin-top: 7rem;
  padding: 1rem;
  display: block;
}
ul {
  display: flex;
  flex-direction: column;
  width: 50%;

  li {
    list-style-type: none;
  }
}
.icon-image {
  width: 32px;
  height: 32px;
}
</style>
