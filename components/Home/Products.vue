<template>
  <div class="products-list">
    <Loader v-if="$fetchState.pending" type="clip" />
    <NetworkError v-else-if="$fetchState.error || error" :message="error" />
    <div v-else class="products">
      <Card v-for="item in products" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import Loader from "../Global/Loading.vue"
import NetworkError from "../Global/Error.vue"

import Card from "../Global/Cards/Product.vue"
export default {
  props: ["id"],
  components: {
    Loader,
    NetworkError,
    Card,
  },
  data() {
    return {
      products: [],
      error: ''
    }
  },
  async fetch() {
    try {
      await this.$fire.firestore.collection('products')
      .where("categories", "array-contains", this.id)
      .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.products.push({id: doc.id, image: doc.data().image, name: doc.data().name, price: doc.data().price, slug: doc.data().slug})
        })
      })
    } catch (error) {
      this.error = error.message
    }
  }
}
</script>

<style lang="scss" scoped>
.products-list {
  .products {
    margin: 2rem 3rem 0 3rem;

    display: grid;
    gap: 1rem;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);

    @media screen and (max-width: $m-large) {
      grid-template-columns: repeat(3,1fr);
    }

    @media screen and (max-width: $medium) {
      margin: 2rem 1rem 0 1rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
