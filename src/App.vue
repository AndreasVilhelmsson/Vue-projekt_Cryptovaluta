<script>
import NavbarComponent from './components/NavbarComponent.vue'
import './assets/main.scss'
import store2 from './store'
import { provide } from 'vue'

export default {
  setup() {
    provide('store2', store2)
  },
  name: 'App',
  components: {
    NavbarComponent
  }
}
</script>

<template>
  <NavbarComponent />
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped></style>
