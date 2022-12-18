<template>
  <div class="Qdw">
    <div class="_item">
      <img :src="item.image" :alt="'Image for '+item.name+ ' by neasfashion'">
      <div class="details">
        <div class="inherent">
          <h1 class="n"> {{item.name}}. </h1>
          <p class="price" title="the price of the product">{{formatter(item.price)}}</p>
        </div>
        <Info :slug="item.slug" />
      </div>
    </div>
  </div>
</template>

<script>
import Info from "./Info.vue"
export default {
  components: {
    Info
  },
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
.Qdw {
  min-width: 90%;
  max-width: 90%;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 0;

  ._item {
    padding: 1rem;
    border-radius: 10px;

    margin: auto;
    width: fit-content;
    max-width: 80%;

    max-height: 640px;

    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 1rem;

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);

    img {
      width: 100%;
      height: 100%;
      max-height: 400px;
      object-fit: contain;
      border-radius: 10px 0px 0px 10px;
      transition: 0.5s all ease-in-out;
    }

    .details {
      padding: 1rem;

      .inherent {
        text-align: left;

        .n {
          font-size: 36px;
          font-weight: 500;
          color: $dark;
          text-transform: capitalize;
        }

        .price {
          background: $dark;
          border-radius: 10px;
          border: 1px solid $primary;
          min-width: 150px;
          width: 150px;
          margin: 0.5rem 0;
          font-size: 24px;
          font-weight: 400;
          color: $light;
          user-select: none;
          padding: 0.6rem 1rem;
          text-align: center;
        }
      }
    }
  }

  @media screen and (max-width: $large) {
    ._item {
      img {
        object-fit: contain;
      }
    }
  }

  @media screen and (max-width: $medium) {
    padding: 1rem;

    ._item {
      max-width: 100%;
      width: 100%;
      max-height: fit-content;
      display: block;

      img {
        max-height: 400px;
        border-radius: 10px 10px 0px 0px;
      }

      .details .inherent {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        .n {
          font-size: 24px;
        }

        .price {
          font-size: 18px;
        }
      }
    }
  }

  @media screen and (max-width: $s-medium) {
    min-width: 100%;
    max-width: 100%;

    ._item {
      img {
        max-height: 200px;
        object-fit: contain;
      }
    }
  }
}
</style>
