<template>
  <div :class="`home page-${changedPage ? currentPage : ''}`">
    <SolarPage v-if="!hideSolar" />
    <LunarPage :class="{ hideSolar }" />
    <div
      :class="[
        'home__message',
        { error: showErrorMessage, thanks: showThanksMessage },
      ]"
    >
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
    window.addEventListener('scroll', (e) => this.whellEverytime(e))

    const params = new URLSearchParams(document.location.search.substring(1))

    if (params.get('currentPage') && parseInt(params.get('currentPage'))) {
      this.currentPage = parseInt(params.get('currentPage'))
      this.changedPage = true
      this.hideSolar = true
      window.addEventListener('scroll', () => {
        this.hideSolar = false
        this.currentPage = 1
        window.addEventListener('scroll', (e) => this.whellEverytime(e))
      })
    }

    if (params.get('thankyou') && params.get('thankyou') === 'true') {
      this.showThanksMessage = true
    } else if (params.get('thankyou') && params.get('thankyou') === 'false') {
      this.showErrorMessage = true
    }
  },
  methods: {
    whellEverytime: _throttle(function (e) {
      this.changedPage = true

      this.scrollStatus.wheeling = true

      if (!this.scrollStatus.functionCall) {
        const shouldGoToNextPage = window.scrollY > 0
        if (shouldGoToNextPage) {
          if (this.currentPage === 2) {
            return
          } else {
            this.currentPage++
          }
        } else {
          if (this.currentPage === 1) {
            return
          } else {
            this.currentPage--
          }
        }
        this.scrollStatus.functionCall = true
      }

      window.clearInterval(this.scrollTimer)
      this.scrollTimer = window.setTimeout(() => {
        this.scrollStatus.wheeling = false
        this.scrollStatus.functionCall = false
      }, 1000)
    }, 1000),
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
@keyframes page1Solar {
  from {
    -webkit-transform: translateX(-120vw) scale(0.6);
    transform: translateX(-120vw) scale(0.6);
  }

  to {
    -webkit-transform: translateX(0) scale(1);
    transform: translateX(0) scale(1);
  }
}

@keyframes page1Lunar {
  0% {
    -webkit-transform: translateX(-120vw) scale(1) translateY(-1vh);
    transform: translateX(-120vw) scale(1) translateY(-1vh);
  }

  100% {
    -webkit-transform: translateX(0) scale(0.6) translateY(-1vh);
    transform: translateX(0) scale(0.6) translateY(-1vh);
  }
}

@keyframes page2Solar {
  from {
    -webkit-transform: translateX(0) scale(1);
    transform: translateX(0) scale(1);
  }

  to {
    -webkit-transform: translateX(-120vw) scale(0.6);
    transform: translateX(-120vw) scale(0.6);
  }
}

@keyframes page2Lunar {
  0% {
    -webkit-transform: translateX(0) scale(0.6) translateY(-1vh);
    transform: translateX(0) scale(0.6) translateY(-1vh);
  }

  100% {
    -webkit-transform: translateX(-120vw) scale(1) translateY(-1vh);
    transform: translateX(-120vw) scale(1) translateY(-1vh);
  }
}

.home {
  width: 100vw;
  overflow: hidden;
  display: flex;
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

  &.page-1 {
    .solar {
      -webkit-animation: page1Solar 0s ease-in-out;
      animation: page1Solar 0s ease-in-out;
      -webkit-transform: translateX(0);
      transform: translateX(0);
      transition: transform 0.4s;
    }

    .lunar {
      -webkit-animation: page1Lunar 0s ease-in-out;
      animation: page1Lunar 0s ease-in-out;
      -webkit-transform: translateX(0) translateY(-1vh);
      transform: translateX(0) translateY(-1vh);
      transition: transform 0.4s;
    }

    @media screen and (min-width: 768px) {
      .solar {
        -webkit-animation: page1Solar 1s ease-in-out;
        animation: page1Solar 1s ease-in-out;
      }

      .lunar {
        -webkit-animation: page1Lunar 1s ease-in-out;
        animation: page1Lunar 1s ease-in-out;
      }
    }
  }

  &.page-2 {
    .solar {
      -webkit-transform: translateX(-120vw);
      transform: translateX(-120vw);
      -webkit-animation: page2Solar 0s ease-in-out;
      animation: page2Solar 0s ease-in-out;
      transition: transform 0.4s;
    }

    .lunar {
      -webkit-animation: page2Lunar 0s ease-in-out;
      animation: page2Lunar 0s ease-in-out;
      -webkit-transform: translateX(-120vw) translateY(-1vh);
      transform: translateX(-120vw) translateY(-1vh);
      transition: transform 0.4s;
    }

    @media screen and (min-width: 768px) {
      .solar {
        -webkit-animation: page2Solar 1s ease-in-out;
        animation: page2Solar 1s ease-in-out;
      }

      .lunar {
        -webkit-animation: page2Lunar 1s ease-in-out;
        animation: page2Lunar 1s ease-in-out;
      }
    }
  }

  .lunar.hideSolar {
    -webkit-transform: translateX(-20vw) translateY(-1vh);
    transform: translateX(-20vw) translateY(-1vh);
    -webkit-animation: none;
    animation: none;
  }
}
</style>
