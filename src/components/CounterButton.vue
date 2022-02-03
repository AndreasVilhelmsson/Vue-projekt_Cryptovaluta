<script>
export default {
  data: () => ({
    counter: 0
  }),
  methods: {
    increase() {
      this.counter++
    }
  },
  props: {
    status: {
      type: String,
      required: false
    }
  }
}
</script>

<template>
  <input type="text" />
  <input type="button" @click="increase" :value="counter" />
</template>
