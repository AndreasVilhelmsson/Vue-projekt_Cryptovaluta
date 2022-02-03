<template>
  <div class="container-view">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="row">
        <div class="col header-text">Name</div>
        <div class="col header-text">Last Price</div>
        <div class="col header-text">24h change</div>
        <div class="col header-text">Rank</div>
      </div>

      <div
        v-for="currency in getAllCryptoCurrency"
        :key="currency.uuid"
        class="row"
      >
        <div class="col">
          <RouterLink
            :to="`/currency/${currency.uuid}`"
            @click="scrollToTop()"
            class="firstWiew"
          >
            <div class="firstWiew-item">
              <img class="icon-image" :src="currency.iconUrl" alt="" />
            </div>
            <div class="firstWiew-item">{{ currency.symbol }}</div>
            <div class="firstWiew-items">
              {{ currency.name }}
            </div>
          </RouterLink>
        </div>
        <div class="col firstWiew-price">${{ roundOff(currency.price) }}</div>

        <div class="col">
          <span class="last-price">+{{ currency.change }}</span>
        </div>
        <div class="col firstWiew-price">{{ currency.rank }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MyHomeview',
  data() {
    return {
      msg: 'Market trend'
    }
  },
  methods: {
    ...mapActions(['getData']),

    roundOff: (num) => {
      const num2 = Number(num)

      return num2.toFixed(2)
    },

    scrollToTop: () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  },
  computed: {
    ...mapGetters(['getAllCryptoCurrency', 'changeRoute'])
  },
  created() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.firstWiew {
  display: flex;
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  .firstWiew-item {
    padding: 0.5rem;
    color: #1e2329;
  }
  .firstWiew-items {
    color: #707a8a;
    padding: 0.5rem;
  }
}

.firstWiew-price {
  display: flex;
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
}
.firstWiew:hover {
  text-decoration: underline;
  text-decoration-color: black;
  transform: scale(1.2, 1.2);
}
.last-price {
  color: #03a66d;
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
}
.header-text {
  font-size: 2rem;
  margin-bottom: 1rem;
}
h1 {
  padding: 0.5em;
}
.icon-image {
  width: 32px;
  height: 32px;
}
.container-view {
  margin-top: 7rem;
  /* background-color: --ultra-white; */
  color: black;
}

.crypto-container {
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
</style>
