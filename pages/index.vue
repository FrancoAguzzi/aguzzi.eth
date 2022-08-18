<template>
  <div :class="`home page-${changedPage ? currentPage : ''}`">
    <SolarPage v-if="!hideSolar" />
    <LunarPage :class="{ hideSolar }" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      currentPage: 1,
      changedPage: false,
      hideSolar: false
    }
  },
  mounted() {
    const whellEverytime = (e) => {
      this.changedPage = true;
      const scrollStatus = {
        wheeling: false,
        functionCall: false
      }

      let scrollTimer;

      scrollStatus.wheeling = true

      if (!scrollStatus.functionCall) {
        const shouldGoToNextPage = e.deltaY > 0
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
        scrollStatus.functionCall = true;
      }

      window.clearInterval(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        scrollStatus.wheeling = false;
        scrollStatus.functionCall = false;
      }, 200);
    }

    window.addEventListener('wheel', (e) => whellEverytime(e))

    const params = new URLSearchParams(document.location.search.substring(1));

    if (params.get('currentPage') && parseInt(params.get('currentPage'))) {
      this.currentPage = parseInt(params.get('currentPage'));
      this.changedPage = true;
      this.hideSolar = true;
      window.addEventListener('wheel', () => {
        this.hideSolar = false
        this.currentPage = 1
        window.addEventListener('wheel', (e) => whellEverytime(e))
      })
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