<template>
  <div class="m" v-if="slug">
    <qrcode class="qr" :value="value" :size="size" level="H" foreground="#001021" />
    <!-- <p class="inform">Scan the code <b>OR</b> click the button below to order through Whatsapp.</p> -->
    <a :href="value" target="_blank" class="btn">Whatsapp</a>
  </div>
</template>

<script>
import Qrcode from 'qrcode.vue'

export default {
  props: ["slug", "img"],
  data() {
    return {
      value: 'https://api.whatsapp.com/send?phone=2348081787841&text=I want to order product found at - https://neasfashion.demo.joshytheprogrammer.com/shop/'+this.slug,
      size: '150',
    }
  },
  components: {
    Qrcode
  },
  mounted() {

  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.m {
  width: 100%;

  .qr {
    margin: 1rem 0;
  }

  p {
    color: $primary;
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    font-size: 16px;
    font-weight: 400;
    border-radius: 4px;
    width: fit-content;

    &.inform {
      background: $warning;
      color: $light;
    }
  }

  .btn {
    display: inline-block;
    text-decoration: none;
    text-align: center;
    background: $success;
    color: $light;
    border: none;
    font-size: 16px;
    font-weight: 400;
    border-radius: 8px;
    height: 45px;
    padding: 12px 24px;
    margin: 1rem 0;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 0.4s ease-in-out;

    &:hover {
      box-shadow: 0px 4px 4px $dark;
    }
  }

  @media screen and (max-width: $large) {
    .qr {
      margin: 0.1rem 0;
    }

    .btn {
      margin: 0.5rem 0;
    }
  }

  @media screen and (max-width: $medium) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
