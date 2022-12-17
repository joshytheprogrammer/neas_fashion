<template>
  <div>
    <GridLoader v-if="type == 'grid'" :color="styles.color" :size="styles.size"></GridLoader>
    <ClipLoader v-if="type == 'clip'" :color="styles.color" :size="styles.size"></ClipLoader>
    <BounceLoader v-if="type == 'bounce'" :color="styles.color" :size="styles.size"></BounceLoader>
    <ScaleLoader v-if="type == 'scale'" :color="styles.color" :size="styles.size"></ScaleLoader>
  </div>
</template>

<script>
// docs @ https://greyby.github.io/vue-spinner/
import GridLoader from 'vue-spinner/src/GridLoader.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'

export default {
  components: {
    GridLoader,
    ClipLoader,
    BounceLoader,
    ScaleLoader,
  },
  props: ['type'],
  data() {
    return {
      styles: {
        color: '#7B0D1E',
        size: '64px'
      }
    }
  }
}
</script>
