<template>
  <div class="product">
    <div class="s">
      <img :src="item.image" :alt="'NeasFashion product - ' + item.name">
      <div class="_details">
        <NuxtLink :to="'/shop/'+item.slug" :aria-label="item.name" :title="item.name">{{item.name}}</NuxtLink>
        <span class="price">₦{{item.price}}</span>
      </div>
      <button>Order</button>
      <!-- {{item}} -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"]
}
</script>

<style lang="scss" scoped>
.product {
  padding: 1rem 0;

  .s {
    width: 230px;
    border-radius: $standard-r;

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
      color: $dark;

      a {
        padding: 0.5rem 0;
        display: block;
        color: inherit;

        font-size: 16px;
        font-weight: 400;

        text-decoration: none;
      }

      span {
        display: block;

        font-size: 18px;
        font-weight: 600;
      }

    }

    button {
      display: block;
      margin: auto;
      border: none;
      border-radius: $standard-r;

      cursor: pointer;
      margin-top: 0.5rem;
      padding: 8px 12px;

      background: $primary;
      color: $light;
    }
  }
}
</style>
