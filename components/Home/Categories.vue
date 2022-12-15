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
  margin-bottom: 2rem;
  
  .categories {
    padding: 2rem 12px;
    display: flex;

    overflow: auto;
  }
}
</style>
