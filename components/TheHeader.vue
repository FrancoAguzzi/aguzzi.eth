<template>
  <header class="header">
    <img v-if="isLunar" class="header__image" src="../assets/images/moon.png" alt="Moon Image" />
    <nuxt-link v-if="isProjects || isStar"
      :to="`${backToLunarSection ? '/portfolio#lunar' : backToProjects ? '/portfolio/projects' : '/portfolio'}`"
      class="header__back">
      <img src="../assets/images/arrow.png" alt="Back to home cta image" />
    </nuxt-link>
    <!-- <div v-if="!isStar" class="header__content"> -->
    <!-- <h1 v-if="!isLunar" class="header__content-pricing"><b>DAY RATE</b> £200</h1> -->
    <!-- <nuxt-link :to="`${isLunar ? '/contact?fromLunar=true' : isProjects ? '/contact?fromProjects=true' : '/contact'}`"
        class="header__content-contact">CONTACT
      </nuxt-link> -->
    <!-- </div> -->
    <nuxt-link v-if="!isStar" :class="isLunar ? 'header__cta header__cta-lunar' : 'header__cta header__cta-solar'"
      to="/portfolio/projects">SEE PROJECTS
    </nuxt-link>
    <img v-if="!isLunar && !isStar && !isProjects" class="header__image" src="../assets/images/sun.png" alt="Sun Image" />
    <img v-if="isStar" class="header__image" src="../assets/images/star.png" alt="Star Image" />
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    isLunar: { type: Boolean, required: false, default: false },
    isStar: { type: Boolean, required: false, default: false },
    isProjects: { type: Boolean, required: false, default: false },
    backToLunarSection: { type: Boolean, required: false, default: false },
    backToProjects: { type: Boolean, required: false, default: false },
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  padding: 40px 0;
  position: relative;
  z-index: 20;

  &__back {
    background-color: rgba(255, 255, 255, 0);
    border: none;
    width: 60px;
    cursor: pointer;

    img {
      width: 100%;
    }
  }

  &__socials {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    &-item {
      width: 40px;

      &:first-child {
        margin-right: 30px;
      }

      img {
        width: 100%;
      }
    }
  }

  &__cta {
    font-family: $secondary-font;
    font-weight: 700;
    background-clip: unset;
    text-fill-color: unset;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: unset;
    border: none;
    padding: 10px 20px;
    font-size: 20px;
    transition: all 0.4s;
    text-decoration: none;

    &-lunar {
      background: radial-gradient(50% 50% at 50% 50%,
          rgba(191, 244, 255, 0.4) 0%,
          rgba(89, 119, 225, 0.4) 100%);
      color: #5977e1;
    }

    &-solar {
      background: radial-gradient(50% 50% at 50% 50%,
          rgba(235, 96, 53, 1) 0%,
          rgba(234, 165, 46, 1) 100%);
      color: white;
    }

    &:hover {
      transition: all 0.4s;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    }

    @media screen and (min-width: 1024px) {
      font-size: 28px;
    }
  }

  &__content {
    font-size: 8px;
    font-family: $primary-font;
    display: flex;
    flex-direction: column;

    &-pricing {
      font-weight: 400;

      b {
        font-weight: bold;
      }
    }

    &-contact {
      background-color: rgba(255, 255, 255, 0);
      border: 2px solid $font-color;
      padding: 10px 22px;
      font-weight: bold;
      text-decoration: none;
      font-size: 14px;
      color: $font-color;
      text-align: center;
      cursor: pointer;
    }
  }

  &__image {
    width: 90px;
  }

  @media screen and (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;

    &__content {
      font-size: 10px;

      &-contact {
        font-size: 14px;
      }
    }

    &__image {
      width: 120px;
    }
  }

  @media screen and (min-width: 1024px) {
    max-width: 1024px;

    &__content {
      font-size: 9px;

      &-contact {
        font-size: 20px;
      }
    }

    &__image {
      width: 160px;
    }
  }
}
</style>
