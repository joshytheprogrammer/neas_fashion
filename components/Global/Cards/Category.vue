<template>
  <div class="category">
    <div class="s">
      <img loading="lazy" :src="item.image" :alt="'Neas Fashion Product Category - '+item.name">
      <div class="_details">
        <NuxtLink :to="'#'+item.id">{{item.name}}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"]
}
</script>

<style lang="scss" scoped>
.category {
  padding: 1rem 0;

  .s {
    width: 225px;
    margin-right: 1rem;
    border-radius: $standard-r;
    padding: 1rem;

    // box-shadow: 0 1px 1px $primary;

    img {
      width: 100%;
      height: 250px;
      max-height: 100%;
      object-fit: contain;
      transition: 0.5s all ease-in-out;
    }

    ._details {
      text-align: center;

      padding: 0.5rem;
      color: $primary;

      a {
        padding: 0.2rem 0;
        display: inherit;
        color: inherit;
        text-decoration: none;
        font-size: 18px;
        font-weight: 500;

        &:hover {
          text-decoration: underline;
          text-decoration-color: $primary;
        }
      }

    }
  }

  @media screen and (max-width: $s-medium) {
    .s {
      img {
        height: 150px;
      }
    }
  }
}
</style>
