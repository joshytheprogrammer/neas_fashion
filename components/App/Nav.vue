<template>
  <nav>
    <h2>
      <NuxtLink class="logo" to="/">
        <span>Neas</span> Fashion
      </NuxtLink>
    </h2>
    <div class="contact">
      <span>Need help?</span>
      <span><a href="tel:+2347080569116">07080569116</a></span>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
nav {
  padding: 12px 48px;
  top: 0;

  user-select: none;
  background: $light;
  width: 100%;
  height: 72px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);

  h2 {
    font: {
      size: 36px;
      weight: 600;
    }

    text-transform: capitalize;

    .logo {
      text-decoration: none;
      cursor: pointer;
      color: $primary;
    }
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
    width: 100%;

    .logo {

      font: {
        size: 28px;
        weight: 500;
      }
    }

    .contact {
      span {
        font-size: 14px;

        a {
          font-size: 12px;
        }
      }
    }
  }

  @media screen and (max-width: $small) {
    .logo {

      font: {
        size: 24px;
        weight: 500;
      }
    }
  }

}
</style>
