<template>
  <div class="loader"></div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.loader {
  margin: 2rem auto;
  width: 60px;
  height: 60px;
  border: 8px solid $light;
  border-top: 5px solid $primary;
  border-radius: 50%;
  animation: spin .5s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
