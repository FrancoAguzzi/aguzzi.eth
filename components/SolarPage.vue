<template>
  <div class="solar">
    <TheHeader></TheHeader>
    <main class="solar__content">
      <div class="solar__content-texts">
        <p>Hello dear friend!</p>
        <h1>
          I'm Franco Aguzzi, I'll guide you troughout the journey of creating
          performant and innovative web solutions for your business.
        </h1>
      </div>
      <img class="solar__content-bg" src="../assets/images/solar-piramides.png" alt="Pyramids Image" />
    </main>
  </div>
</template>

<script>
export default {
  name: 'SolarPage',
}
</script>

<style lang="scss" scoped>
.solar {
  height: 101vh;
  max-height: 101vh;

  &__content {
    height: 80vh;
    font-family: $secondary-font;
    background: -webkit-linear-gradient(90deg, #eaa52e 0%, #eb6035 100%);
    background-clip: text;
    text-fill-color: rgba(255, 255, 255, 0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    max-width: 1024px;
    margin: 0 auto;

    &-texts {
      text-align: center;
      width: 80%;
      margin: 0 auto;

      p {
        font-size: 32px;
        display: inline;

        @media screen and (min-width: 768px) {
          font-size: 36px;
        }
      }

      h1 {
        font-size: 26px;
        display: inline;

        @media screen and (min-width: 768px) {
          font-size: 30px;
          max-width: 500px;
          margin-left: auto;
          margin-bottom: -10vh;
        }
      }
    }

    &-bg {
      margin: 30px 0 0;
      width: 100% !important;
      min-width: 100% !important;
    }
  }
}
</style>
