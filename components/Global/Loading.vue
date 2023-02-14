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
  border: 8px solid $light;
  border-top: 5px solid $primary;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin .5s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
