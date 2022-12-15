<template>
  <div class="header">
    <h2>
      <slot name="title" />
    </h2>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 40px 1rem;
  background: $light;
  box-shadow: 0px 1px 1px $primary;
  text-align: center;

  h2 {
    font-size: 36px;
    font-weight: 400;
  }

  @media screen and (max-width: $medium) {
    h2 {
      font-size: 28px;
    }
  }

  @media screen and (max-width: $small) {
    h2 {
      font-size: 24px;
    }
  }
}
</style>
