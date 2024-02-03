<template>
  <div class="solar">
    <TheHeader></TheHeader>
    <div class="solar__overlay"></div>
    <main class="solar__texts">
      <p>Hello dear friend!</p>
      <h1>
        I'm happy you are interested in knowing more about my past experiences. <br /><br />You can know more
        about
        these
        by clicking in the CTA above or by visiting the <a class="solar__texts-cta" href="/">home page</a>.
      </h1>
    </main>
    <img class="solar__bg" src="../assets/images/solar-piramides.png" alt="Pyramids Image" />
  </div>
</template>

<script>
export default {
  name: 'SolarPage',
}
</script>

<style lang="scss" scoped>
.solar {
  position: relative;
  height: 101vh;
  max-height: 101vh;
  margin-bottom: 20vh;

  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.6);
    z-index: 1;
  }

  &__texts {
    height: 80vh;
    font-family: $secondary-font;
    margin: 0 auto;
    position: relative;
    z-index: 10;
    text-align: center;
    width: 80%;
    max-width: 600px;
    margin: 10vh auto;
    background: -webkit-linear-gradient(90deg, #eaa52e 0%, #eb6035 100%);
    text-fill-color: rgba(255, 255, 255, 0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);

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
      }

      @media screen and (min-width: 1024px) {
        font-size: 36px;
      }
    }

    @media screen and (min-width: 768px) {
      margin: 7vh auto;
    }

  }

  &__bg {
    margin: 30px 0 0;
    height: 350px;
    right: 0;
    transform: translateX(60vw);
    position: absolute;
    bottom: 10vh;

    @media screen and (min-width: 768px) {
      height: 600px;
      bottom: -3vh;
    }

    @media screen and (min-width: 1024px) {
      height: 800px;
      right: 0;
      bottom: -20vh;
      z-index: -1;
    }
  }
}
</style>
