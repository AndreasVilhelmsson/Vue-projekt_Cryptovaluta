<template>
  <div class="container">
    <UserComponent :age="age" @age-change="updateAge" />
  </div>
</template>
<script>
import UserComponent from '../components/UserComponent.vue'
export default {
  name: 'AboutView',
  components: {
    UserComponent
  },

  data: () => {
    return { age: 20 }
  },
  methods: {
    updateAge(num) {
      this.age += num
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  margin-top: 8rem;
  height: 100vh;
  color: black;
  background-color: antiquewhite;
}
</style>
