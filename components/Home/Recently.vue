<template>
  <section class="recently" id="recently">
    <Headers>
      <template #title>New Arrivals</template>
    </Headers>
    <Loader v-if="loading" type="clip" />
    <NetworkError v-else-if="error" :message="error" />
    <div v-else class="products">
      <Card v-for="item in recently" :key="item.id" :item="item" />
    </div>
  </section>
</template>

<script>
import Headers from "../Global/Headers.vue"
import Loader from "../Global/Loader.vue"
import NetworkError from "../Global/Error.vue"

import Card from "../Global/Cards/Product.vue"
export default {
  components: {
    Headers,
    Loader,
    NetworkError,
    Card,
  },
  data() {
    return {
      recently: [],
      error: '',
      loading: false
    }
  },
  async mounted() {
    this.loading = true

    try {
      await this.$fire.firestore.collection('products').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.recently.push({id: doc.id, image: doc.data().image, name: doc.data().name, price: doc.data().price, slug: doc.data().slug})
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
.recently {

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

    @media screen and (max-width: $medium) {
      margin: 2rem 1rem 0 1rem;
      grid-template-columns: repeat(2, 1fr);
    }


    @media screen and (max-width: $small) {
      margin: 0 auto;
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
