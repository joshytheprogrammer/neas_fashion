<template>
  <div class="product">
    <div class="s">
      <img :src="item.image" :alt="'NeasFashion product - ' + item.name">
      <div class="_details">
        <NuxtLink :to="'/shop/'+item.slug" :aria-label="item.name" :title="item.name">{{item.name}}</NuxtLink>
        <span class="price">{{formatter(item.price)}}</span>
      </div>
      <a class="btn" :href="'https://api.whatsapp.com/send?phone=2348081787841&text=I want to order product found at - https://neasfashion.demo.joshytheprogrammer.com/shop/'+item.slug" target="_blank">Order</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    formatter(price) {
      let currency = '₦'

      var formatter = new Intl.NumberFormat('en-US');
      price = currency + formatter.format(price)

      return price
    }
  }
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

    .btn {
      display: block;
      width: fit-content;
      text-align: center;

      margin: auto;
      border: none;
      border-radius: $standard-r;

      cursor: pointer;
      text-decoration: none;
      margin-top: 0.5rem;
      padding: 8px 12px;

      font-size: 14px;
      font-weight: 400;

      background: $primary;
      color: $light;
    }
  }

  @media screen and (max-width: $s-medium) {
    .s {
      margin: auto;
      max-width: 90%;

      img {
        height: 200px;
      }

      ._details {
        a {
          font-size: 14px;
        }

        span {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
