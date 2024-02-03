<template>
  <div class="lunar">
    <TheHeader :isLunar="true"></TheHeader>
    <div class="lunar__overlay"></div>
    <main class="lunar__texts">
      <h2 class="lunar__texts__title">
        From worldwide market leader clients to high potential and purposeful
        startups <br /><br />
        Get to know more
        about
        my experiences
        by clicking in the CTA above or by visiting the <a class="lunar__texts__title-cta" href="/">home page</a>.
      </h2>
    </main>
    <img class="lunar__bg" src="../assets/images/lunar-piramides.png" alt="Pyramids Image" />
  </div>
</template>

<script>
export default {
  name: 'LunarPage',
}
</script>

<style lang="scss" scoped>
.lunar {
  height: 101vh;
  max-height: 101vh;
  position: relative;

  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.6);
    z-index: 1;
  }

  &__texts {
    position: relative;
    z-index: 10;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: $secondary-font;
    max-width: 640px;
    margin: 0 auto;

    &__title {
      background-color: $contrast-color;
      font-size: 24px;
      background: -webkit-linear-gradient(270deg, #5977e1 80%, #d4e5e8 100%);
      background-clip: text;
      text-fill-color: rgba(255, 255, 255, 0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: rgba(255, 255, 255, 0);
      margin: 20px 0 60px;

      @media screen and (min-width: 768px) {
        font-size: 28px;
      }

      @media screen and (min-width: 1024px) {
        font-size: 36px;
      }
    }

    @media screen and (min-width: 768px) {
      font-size: 32px;
      margin: 3vh auto;
    }

    @media screen and (min-width: 1024px) {
      font-size: 36px;
    }
  }

  &__bg {
    width: 150vw;
    margin-left: -15vw;
    position: absolute;
    bottom: 10vh;
    left: 50%;
    transform: translateX(-50vw);
    z-index: -2;

    @media screen and (min-width: 768px) {
      width: 110vw;
      margin: 0 auto;
    }

    @media screen and (min-width: 1024px) {
      max-width: 1200px;
      left: auto;
      right: -15vw;
      transform: translateX(0);
      bottom: -10vh;
    }
  }
}
</style>
