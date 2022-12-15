<template>
  <div class="trending" id="categories">
    <Headers>
      <template #title>Trending Categories</template>
    </Headers>
    <div class="categories">
      <Card v-for="item in categories" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import Headers from "../Global/Headers.vue"
import Card from "../Global/Cards/Category.vue"
export default {
  components: {
    Headers,
    Card
  },
  data() {
    return {
      categories: []
    }
  },
  async fetch() {
    await this.$fire.firestore.collection('categories').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.categories.push({id: doc.id, image: doc.data().image, name: doc.data().name})
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.trending {

  .categories {
    margin: 2rem 3rem;
    display: flex;

    overflow: auto;
  }

  @media screen and (max-width: $medium) {
    .categories {
      margin: 2rem 1rem;
    }
  }
}
</style>
