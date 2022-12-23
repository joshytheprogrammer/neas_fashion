<template>
  <div class="list">
    <section v-for="item in categories" :key="item.id">
      <Headers>
        <template #title> Some {{item.name}} </template>
      </Headers>
      {{item.name}}
    </section>
  </div>
</template>

<script>
import Headers from "../Global/Headers.vue"
export default {
  components: {
    Headers
  },
  data() {
    return {
      categories: []
    }
  },
  async fetch() {
    try {
      await this.$fire.firestore.collection('categories').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.categories.push({id: doc.id, name: doc.data().name})
        })
      })
    } catch (error) {
      this.error = error.message
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: block;
}
</style>
