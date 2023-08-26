<template>
  <div class="lunar">
    <TheHeader :isLunar="true"></TheHeader>
    <main class="lunar__content">
      <div class="lunar__content-texts">
        <h2 class="lunar__content-texts__title">
          From worldwide market leader clients to high potential and purposeful
          startups
        </h2>
        <nuxt-link class="lunar__content-texts__cta" to="/portfolio/projects">SEE PROJECTS
        </nuxt-link>
      </div>
      <img class="lunar__content-bg" src="../assets/images/lunar-piramides.png" alt="Pyramids Image" />
    </main>
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

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: $secondary-font;
    max-width: 1024px;
    margin: 0 auto;

    &-texts {
      text-align: center;
      width: 80%;
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

      &__cta {
        font-family: $secondary-font;
        color: #5977e1;
        font-weight: 700;
        background-clip: unset;
        text-fill-color: unset;
        -webkit-background-clip: unset;
        -webkit-text-fill-color: unset;
        background: radial-gradient(50% 50% at 50% 50%,
            rgba(191, 244, 255, 0.4) 0%,
            rgba(89, 119, 225, 0.4) 100%);
        border: none;
        padding: 10px 20px;
        align-self: center;
        margin: 40px 0;
        font-size: 20px;
        transition: all 0.4s;
        text-decoration: none;

        &:hover {
          transition: all 0.4s;
          color: white;
        }

        @media screen and (min-width: 768px) {
          margin-right: auto;
        }

        @media screen and (min-width: 1024px) {
          font-size: 28px;
        }
      }

      @media screen and (min-width: 768px) {
        font-size: 32px;
        margin: 3vh auto;
        max-width: 550px;
      }

      @media screen and (min-width: 1024px) {
        font-size: 36px;
      }
    }

    &-bg {
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
}
</style>
