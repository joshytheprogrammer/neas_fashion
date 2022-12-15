<template>
  <section class="hero">
    <img :src="bannerImage" alt="Neas Fashion Banner AD" id="banner_ad_image">
  </section>
</template>

<script>
export default {
  data() {
    return {
      bannerImage: 'https://firebasestorage.googleapis.com/v0/b/neas-fashion.appspot.com/o/Banner%2FNeas%20Fashion%20AD%20Banner%202.png?alt=media&token=43f146e7-45b4-4f19-a390-581f67ddc6a7'
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  margin: 1rem 3rem;

  #banner_ad_image {
    width: 100%;
    height: 300px;
    object-fit: fill;
    border-radius: $none;
  }

  @media screen and (max-width: $medium) {
    margin: 12px 14px;
  }
}
</style>
