<template>
  <header class="header">
    <img v-if="isLunar" class="header__image" src="../assets/images/moon.png" alt="Moon Image" />
    <nuxt-link v-if="isProjects || isStar"
      :to="`${backToLunarSection ? '/portfolio#lunar' : backToProjects ? '/portfolio/projects' : '/portfolio'}`"
      class="header__back">
      <img src="../assets/images/arrow.png" alt="Back to home cta image" />
    </nuxt-link>
    <div v-if="!isStar" class="header__content">
      <h1 v-if="!isLunar" class="header__content-pricing"><b>DAY RATE</b> £200</h1>
      <nuxt-link :to="`${isLunar ? '/contact?fromLunar=true' : isProjects ? '/contact?fromProjects=true' : '/contact'}`"
        class="header__content-contact">CONTACT
      </nuxt-link>
    </div>
    <img v-if="!isLunar && !isStar && !isProjects" class="header__image" src="../assets/images/sun.png"
      alt="Sun Image" />
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
  padding: 40px;

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
