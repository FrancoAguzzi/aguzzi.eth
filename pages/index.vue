<template>
  <div :class="`home page-${changedPage ? currentPage : ''}`">
    <SolarPage v-if="!hideSolar" />
    <LunarPage :class="{ hideSolar }" />
    <div :class="['home__message', { error: showErrorMessage, thanks: showThanksMessage }]">
      {{ showErrorMessage ? 'The form could not be successfully submitted, please try again.' : '' }}
      {{ showThanksMessage ? 'Thanks for you vote of trust! We will reach you out asap 👽🖖🏼' : '' }}
    </div>
  </div>
</template>

<script>
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
        functionCall: false
      },
      scrollTimer: null
    }
  },
  mounted() {
    const whellEverytime = (e) => {
      this.changedPage = true;

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
        this.scrollStatus.functionCall = true;
      }

      window.clearInterval(this.scrollTimer);
      this.scrollTimer = window.setTimeout(() => {
        this.scrollStatus.wheeling = false;
        this.scrollStatus.functionCall = false;
      }, 2000);
    }

    window.addEventListener('scroll', (e) => whellEverytime(e))

    const params = new URLSearchParams(document.location.search.substring(1));

    if (params.get('currentPage') && parseInt(params.get('currentPage'))) {
      this.currentPage = parseInt(params.get('currentPage'));
      this.changedPage = true;
      this.hideSolar = true;
      window.addEventListener('scroll', () => {
        this.hideSolar = false
        this.currentPage = 1
        window.addEventListener('scroll', (e) => whellEverytime(e))
      })
    }

    if (params.get('thankyou') && params.get('thankyou') === 'true') {
      this.showThanksMessage = true
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
    }
  }
}
</script>

<style lang="scss">
@keyframes page1Solar {
  from {
    transform: translateX(-120vw) scale(0.6);
  }

  to {
    transform: translateX(0) scale(1);
  }
}

@keyframes page1Lunar {
  0% {
    transform: translateX(-120vw) scale(1);
  }

  100% {
    transform: translateX(0) scale(0.6);
  }
}

@keyframes page2Solar {
  from {
    transform: translateX(0) scale(1);
  }

  to {
    transform: translateX(-120vw) scale(0.6);
  }
}

@keyframes page2Lunar {
  0% {
    transform: translateX(0) scale(0.6);
  }

  100% {
    transform: translateX(-120vw) scale(1);
  }
}

.home {
  width: 100vw;
  overflow: hidden;
  display: flex;
  transition: transform .4s;

  &__message {
    position: absolute;
    bottom: 40px;
    left: 50%;
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

    .solar,
    .lunar {
      transform: translateX(0);
      transition: transform .4s;
    }

    .solar {
      animation: page1Solar 3s;
    }

    .lunar {
      animation: page1Lunar 3s;
    }
  }

  &.page-2 {

    .solar,
    .lunar {
      transform: translateX(-120vw);
      transition: transform .4s;
    }

    .solar {
      animation: page2Solar 3s;
    }

    .lunar {
      animation: page2Lunar 3s;
    }
  }

  .lunar.hideSolar {
    transform: translateX(-20vw);
    animation: none;
  }
}
</style>