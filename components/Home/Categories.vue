<template>
  <section class="trending" id="categories">
    <Headers>
      <template #title>Trending Categories</template>
    </Headers>
    <!-- <Loader v-if="$fetchState.pending" type="clip" /> -->
    <Loader v-if="loading" type="clip" />
    <NetworkError v-else-if="error" :message="error" />
    <div v-else class="categories">
      <Card v-for="item in categories" :key="item.id" :item="item" />
    </div>
  </section>
</template>

<script>
import Headers from "../Global/Headers.vue"
import Loader from "../Global/Loader.vue"
import NetworkError from "../Global/Error.vue"

import Card from "../Global/Cards/Category.vue"
export default {
  components: {
    Headers,
    Loader,
    NetworkError,
    Card,
  },
  data() {
    return {
      categories: [],
      error: '',
      loading: false
    }
  },
  async mounted() {
    this.loading = true
    try {
      await this.$fire.firestore.collection('categories').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.categories.push({id: doc.id, image: doc.data().image, name: doc.data().name})
        })
      })

      this.loading = false
    } catch (error) {
      this.error = error.message

      this.loading = false
    }
  },
}
</script>

<style lang="scss" scoped>
.trending {

  .categories {
    margin: 2rem 3rem 0 3rem;
    display: flex;

    overflow: auto;
  }

  @media screen and (max-width: $medium) {
    .categories {
      margin: 2rem 1rem 0 1rem;
    }
  }
}
</style>
