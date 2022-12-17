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
import { mapActions } from "vuex"
export default {
  components: {
    Nav
  },
  mounted() {
    this.checkWidth()

    // Watch for window size change
    window.addEventListener("resize", this.checkWidth);
  },
  unmounted() {
    window.removeEventListener("resize", this.checkWidth);
  },
  methods: {
    ...mapActions({
      checkWidth: 'mobile/checkWidth',
    }),
  },
}
</script>

<style>

</style>
