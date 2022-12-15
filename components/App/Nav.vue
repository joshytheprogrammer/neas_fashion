<template>
  <nav>
    <NuxtLink class="logo" to="/">
      <span>Neas</span> Fashion
    </NuxtLink>
    <div class="contact">
      <span>Need help?</span>
      <span><a href="tel:+2348023456789">08023456789</a></span>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
nav {
  padding: 14px 48px;
  top: 0;

  user-select: none;
  background: $light;
  width: 100%;
  height: 72px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);

  .logo {
    text-decoration: none;

    font: {
      size: 36px;
      weight: 600;
    }

    text-transform: capitalize;
    color: $primary;
    cursor: pointer;
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;

    span a {
      color: $primary;
    }
  }

  @media screen and (max-width: $medium) {
    padding: 12px 14px;
    .logo {
      font: {
        weight: 500;
      }
    }
  }

}
</style>
