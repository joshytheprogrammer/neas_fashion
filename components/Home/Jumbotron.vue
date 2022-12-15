<template>
  <section class="hero">
    <div class="desktop">
      <div class="banner_ad">
        <img :src="bannerImage" alt="Neas Fashion Banner AD" id="banner_ad_image">
      </div>
      <div class="other_ads">

      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      bannerImage: 'https://firebasestorage.googleapis.com/v0/b/neas-fashion.appspot.com/o/Banner%2FNeas%20fashion%20banner%20ad.png?alt=media&token=2938c29e-c3ff-4283-a578-638c9a75bd02'
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  margin: 2rem 3rem;

  .desktop {
    display: flex;
    justify-content: space-between;

    .banner_ad {

      #banner_ad_image {
        max-width: 90%;
        max-height: 450px;
        object-fit: contain;
        border-radius: $standard-r;
      }
    }
  }
}
</style>
