<template>
  <div class="home">
    <Jumbotron />
    <Categories />
    <Recently />

    <List />
  </div>
</template>

<script>
import Jumbotron from "../components/Home/Jumbotron.vue"
import Categories from "../components/Home/Categories.vue"
import Recently from "../components/Home/Recently.vue"

import List from "../components/App/List.vue"
export default {
  components: {
    Jumbotron,
    Categories,
    Recently,
    List
  }
}
</script>
