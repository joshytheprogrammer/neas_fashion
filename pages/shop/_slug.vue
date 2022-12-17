<template>
  <div class="product">
    <Loader v-if="$fetchState.pending" type="clip" />
    <NetworkError v-else-if="$fetchState.error || error" :message="error" />
    <Item :item="product" v-else />
  </div>
</template>

<script>
import Loader from "../../components/Global/Loader.vue"
import NetworkError from "../../components/Global/Error.vue"
import Item from "../../components/Shop/Item.vue"

export default {
  components: {
    Loader,
    NetworkError,
    Item
  },
  data() {
    return {
      product: '',
      error: '',
    }
  },
  head(){
    return {
      title: this.product.name + " neas fashion product " + this.product.id,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.name + " you can purchase this product from this site or call us using product id - "+ this.product.id
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.product.name + " neas fashion product " + this.product.id
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.product.name + " - you can purchase this product for " + this.product.price + " from this site or reach out using product id - " + this.product.id
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.product.image
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://neasfashion.demo.joshytheprogrammer.com/shop/'+this.product.slug
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.product.name + " neas fashion product " + this.product.id
        },
        { hid: 'twitter:description',
          name: "twitter:description",
          content: this.product.name + " - you can purchase this product for " + this.product.price + " from this site or call us using product id - " + this.product.id
        },
        {
          hid: 'twitter:image',
          name: "twitter:image",
          content: this.product.image
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
      ]
    }
  },
  mounted(){
    this.$fetch()
  },
  async fetch() {
    await this.$fire.firestore.collection('products')
    .where("slug", "==", this.$route.params.slug)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.product = {id: doc.id, image: doc.data().image, name: doc.data().name, price: doc.data().price, slug: doc.data().slug}
      });
    })
    .catch((error) => {
      this.error = "Error getting documents: " + error
    });
  }
}
</script>

<style lang="scss" scoped>

</style>
