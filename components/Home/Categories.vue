<template>
  <div class="trending">
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
      categories: [
        {
          id: 'C0BeMn3u5Iko2hXQMEIq',
          image: 'https://firebasestorage.googleapis.com/v0/b/neas-fashion.appspot.com/o/category_shoes_for_men.jpg?alt=media&token=14324eff-00ad-4c89-8dec-fe055cbd4739',
          name: "Men's Shoes"
        },
        {
          id: 'C0BeMn3u5Iko2hXQMdIq',
          image: 'https://firebasestorage.googleapis.com/v0/b/neas-fashion.appspot.com/o/category_shoes_for_men.jpg?alt=media&token=14324eff-00ad-4c89-8dec-fe055cbd4739',
          name: "Men's Shoes"
        },
        {
          id: 'C0BeMn3u5Iko2hXQMEIf',
          image: 'https://firebasestorage.googleapis.com/v0/b/neas-fashion.appspot.com/o/category_shoes_for_men.jpg?alt=media&token=14324eff-00ad-4c89-8dec-fe055cbd4739',
          name: "Men's Shoes"
        },
        {
          id: 'C0BeMn3u5Ikr2hXQMEIq',
          image: 'https://firebasestorage.googleapis.com/v0/b/neas-fashion.appspot.com/o/category_shoes_for_men.jpg?alt=media&token=14324eff-00ad-4c89-8dec-fe055cbd4739',
          name: "Men's Shoes"
        },
        {
          id: 'C0BeMn3udIko2hXQMEIq',
          image: 'https://firebasestorage.googleapis.com/v0/b/neas-fashion.appspot.com/o/category_shoes_for_men.jpg?alt=media&token=14324eff-00ad-4c89-8dec-fe055cbd4739',
          name: "Men's Shoes"
        },
        {
          id: 'C0BeMn3u5Ikw2hXQMEIq',
          image: 'https://firebasestorage.googleapis.com/v0/b/neas-fashion.appspot.com/o/category_shoes_for_men.jpg?alt=media&token=14324eff-00ad-4c89-8dec-fe055cbd4739',
          name: "Men's Shoes"
        },
        {
          id: 'C0BdMn3u5Iko2hXQMEIq',
          image: 'https://firebasestorage.googleapis.com/v0/b/neas-fashion.appspot.com/o/category_shoes_for_men.jpg?alt=media&token=14324eff-00ad-4c89-8dec-fe055cbd4739',
          name: "Men's Shoes"
        },

      ]
    }
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
