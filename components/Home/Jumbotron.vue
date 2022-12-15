<template>
  <section class="hero">
    <img :src="bannerImage" alt="Neas Fashion Banner AD" id="banner_image">
  </section>
</template>

<script>
export default {
  data() {
    return {
      bannerImage: 'https://firebasestorage.googleapis.com/v0/b/neas-fashion.appspot.com/o/Neas%20fashion%20banner%20ad.png?alt=media&token=5374a527-0324-4d5b-adf7-3cdf14ae83a6'
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  margin: 2rem 3rem;

  display: flex;
  justify-content: flex-start;

  #banner_image {
    max-width: 90%;
    height: 450px;
    object-fit: contain;
    border-radius: $standard-r;
  }
}
</style>
