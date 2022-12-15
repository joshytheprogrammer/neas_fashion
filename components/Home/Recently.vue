<template>
  <section class="recently" id="recently">
    <Headers>
      <template #title>Fresh Entries</template>
    </Headers>
    <Loader v-if="$fetchState.pending" type="clip" />
    <NetworkError v-else-if="$fetchState.error || error" :message="error" />
    <div v-else class="products">
      <!-- <Card v-for="item in recently" :key="item.id" :item="item" /> -->
      {{recently}}
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
      recently: [],
      error: '',
    }
  },
  async fetch() {
    try {
      await this.$fire.firestore.collection('products').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.recently.push({id: doc.id, image: doc.data().image, name: doc.data().name, price: doc.data().price, slug: doc.data().slug})
        })
      })
    } catch (error) {
      this.error = error.message
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
