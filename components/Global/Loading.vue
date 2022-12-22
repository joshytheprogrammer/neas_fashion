<template>
  <div class="loader" v-if="loading"></div>
</template>

<style lang="scss" scoped>
.loader {
  margin: 0.6rem auto;
  border: 8px solid $light;
  border-top: 8px solid $primary;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin .5s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
