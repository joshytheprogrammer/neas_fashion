<template>
  <div class="category">
    <div class="s">
      <img loading="lazy" :src="item.image" :alt="'Neas Fashion Product Category - '+item.name">
      <div class="_details">
        <NuxtLink :to="'#/'+item.id">{{item.name}}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"]
}
</script>

<style>

</style>
