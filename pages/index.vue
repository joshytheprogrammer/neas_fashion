<template>
  <div class="home">
    <Jumbotron />
    <Headers>
      <template #title>Popular Categories</template>
    </Headers>
  </div>
</template>

<script>
import Jumbotron from "../components/Home/Jumbotron.vue"
import Headers from "../components/Global/Headers.vue"
export default {
  components: {
    Jumbotron,
    Headers
  }
}
</script>
