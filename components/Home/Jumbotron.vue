<template>
  <section class="hero">
    <img :src="bannerImage" alt="Neas Fashion Banner AD" id="banner_ad_image">
  </section>
</template>

<script>
import {mapGetters, mapActions} from "Vuex"
export default {
  computed: {
    ...mapGetters({
      'isMobile': 'mobile/getDevice'
    })
  },
  data() {
    return {
      bannerImage: ''
    }
  },
  mounted() {
    this.loadImage()
  },
  methods: {
    ...mapActions({
      checkWidth: 'mobile/checkWidth',
    }),
    loadImage() {
      this.checkWidth()

      let desktopImage = 'https://firebasestorage.googleapis.com/v0/b/neas-fashion.appspot.com/o/Banner%2FNeas%20Fashion%20AD%20Banner%202.png?alt=media&token=43f146e7-45b4-4f19-a390-581f67ddc6a7'

      let mobileImage = 'https://firebasestorage.googleapis.com/v0/b/neas-fashion.appspot.com/o/Banner%2FNeas%20fashion%20banner%20ad.png?alt=media&token=2938c29e-c3ff-4283-a578-638c9a75bd02'

      this.isMobile ? this.bannerImage = mobileImage : this.bannerImage = desktopImage
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  margin: 1rem 3rem 0 3rem;

  #banner_ad_image {
    width: 100%;
    height: 300px;
    object-fit: fill;
    border-radius: $standard-r;
  }

  @media screen and (max-width: $medium) {
    margin: 12px 14px 0 14px;
  }
}
</style>
