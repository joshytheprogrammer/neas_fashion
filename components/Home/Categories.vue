<template>
  <div class="trending">
    <Headers>
      <template #title>Trending Categories</template>
    </Headers>
    <div class="categories">

    </div>
  </div>
</template>

<script>
import Headers from "../Global/Headers.vue"
export default {
  components: {
    Headers
  }
}
</script>

<style lang="scss" scoped>
.trending {

  .categories {
    margin: 1rem 3rem 0 3rem;
    display: flex;

    overflow: auto;
  }
}
</style>
