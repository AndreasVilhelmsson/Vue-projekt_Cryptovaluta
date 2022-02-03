<template>
  <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand">Addes Crypto</a>
      <ul>
        <li><RouterLink to="/">Hem</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
      </ul>
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>
<script>
import '../assets/main.scss'
export default {}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 1.8rem 5%;
  background-color: var(--night);
  z-index: 1000;

  ul {
    display: flex;
  }
  li {
    list-style: none;
    font-size: 1.5em;
    padding-left: 1rem;
    color: var(--white);
  }
}
</style>
