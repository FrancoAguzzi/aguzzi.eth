<template>
  <div class="home">
    <SplashScreen />
    <SolarPage />
    <LunarPage />
    <div :class="[
      'home__message',
      { error: showErrorMessage, thanks: showThanksMessage },
    ]">
      {{
        showErrorMessage
        ? 'The form could not be successfully submitted, please try again.'
        : ''
      }}
      {{
        showThanksMessage
        ? 'Thanks for you vote of trust! We will reach you out asap 👽🖖🏼'
        : ''
      }}
    </div>
  </div>
</template>

<script>
import _throttle from 'lodash/throttle'

export default {
  name: 'IndexPage',
  data() {
    return {
      currentPage: 1,
      changedPage: false,
      hideSolar: false,
      showThanksMessage: false,
      showErrorMessage: false,
      scrollStatus: {
        wheeling: false,
        functionCall: false,
      },
      scrollTimer: null,
    }
  },
  mounted() {
    const params = new URLSearchParams(document.location.search.substring(1))

    if (params.get('currentPage') && parseInt(params.get('currentPage'))) {
      this.currentPage = parseInt(params.get('currentPage'))
    }

    if (params.get('thankyou') && params.get('thankyou') === 'true') {
      // this.showThanksMessage = true
    } else if (params.get('thankyou') && params.get('thankyou') === 'false') {
      this.showErrorMessage = true
    }
  },
  watch: {
    showThanksMessage() {
      setTimeout(() => {
        this.showThanksMessage = false
      }, 8000)
    },
    showErrorMessage() {
      setTimeout(() => {
        this.showErrorMessage = false
      }, 8000)
    },
  },
}
</script>

<style lang="scss">
.home {
  width: 100vw;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  transition: transform 0.4s;

  &__message {
    position: absolute;
    bottom: 40px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background: $contrast-color;
    padding: 20px 40px;
    border-radius: 6px;
    border: 2px solid $font-color;
    font-size: 24px;
    font-family: $secondary-font;
    display: none;
    min-width: 200px;

    @media screen and (min-width: 768px) {
      font-size: 32px;
    }

    &.error {
      background-color: rgba(222, 130, 130, 0.641);
      border-color: rgb(250, 141, 141);
      display: block;
    }

    &.thanks {
      background-color: rgba(186, 225, 138, 0.8);
      border-color: rgb(143, 239, 105);
      display: block;
    }
  }

  .solar,
  .lunar {
    min-width: 100vw;
  }
}
</style>
