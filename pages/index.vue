<template>
  <div class="home">
    <Jumbotron />
    <Categories />
  </div>
</template>

<script>
import Jumbotron from "../components/Home/Jumbotron.vue"
import Categories from "../components/Home/Categories.vue"
export default {
  components: {
    Jumbotron,
    Categories
  }
}
</script>
