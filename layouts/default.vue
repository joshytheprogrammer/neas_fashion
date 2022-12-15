<template>
  <div class="app">
    <Nav />
    <div class="body">
      <Nuxt keep-alive :keep-alive-props="{ max: 120 }" />
    </div>
  </div>
</template>

<script>
import Nav from "../components/App/Nav.vue"
export default {
  components: {
    Nav
  }
}
</script>

<style>

</style>
