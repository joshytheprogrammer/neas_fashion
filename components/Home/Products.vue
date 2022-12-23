<template>
  <div class="products">
    <Loader v-if="$fetchState.pending" type="clip" />
    <NetworkError v-else-if="$fetchState.error || error" :message="error" />
    <div v-else class="products">
      <Card v-for="item in recently" :key="item.id" :item="item" />
      <!-- <p v-for="item in recently" :key="item.id">{{item}}</p> -->
    </div>
    {{id}}
  </div>
</template>

<script>
export default {
  props: ["id"]
}
</script>

<style>

</style>
