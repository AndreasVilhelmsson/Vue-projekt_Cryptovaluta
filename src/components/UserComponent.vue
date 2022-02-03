<template lang="">
  <div>
    <p v-if="age > 25">{{ msg }}</p>
    <p v-else>are you older then me? to see this message</p>
  </div>
  <button type="button" @click="onClickAge" class="btn btn-primary">
    update age {{ age }}
  </button>
  <p>{{ ageDoubled }}</p>
</template>
<script>
export default {
  name: 'UserComponent',
  emits: ['age-change'],
  props: {
    age: {
      type: Number,
      default: 1
    }
  },
  data: () => {
    return { msg: 'Användning av $emit knappen ligger i childkomponent' }
  },
  computed: {
    ageDoubled() {
      return this.age * 2
    }
  },
  methods: {
    onClickAge() {
      this.$emit('age-change', 3)
    }
  }
}
</script>
<style lang=""></style>
