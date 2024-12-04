<template>
  <ul class="projects">
    <li v-for="(project, index) in projects" class="project" :key="project.name">
      <a :href="project.url" target="_blank" rel="noreferrer">
        <div class="project__bg"></div>
        <div class="project__preview" :style="{
          backgroundImage: `url(${require(`../assets/images/${projects[index].imageUrl}`)})`,
        }" :alt="`${name} website screenshot`"></div>
        <div class="project__overview">
          <h1 class="project__overview-title">{{ project.name }}</h1>
          <h2 class="project__overview-description">
            {{ project.shortDescription }}
          </h2>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProjectsList',
  data() {
    return {
      projects: [
        {
          name: 'Uniswap Governance Dashboard',
          shortDescription: 'FrontEnd engineer - WIP',
          imageUrl: 'uniswap.png',
        },
        {
          url: 'https://www.zuzalu.city/',
          name: 'Zuzalu City',
          shortDescription: 'Tech leader for plug-in integration',
          imageUrl: 'zuzalu.png',
        },
        {
          url: 'https://stellar.trust.ful.xyz/',
          name: 'Trustful',
          shortDescription: 'Tech leader',
          imageUrl: 'trustful.png',
        },
        {
          url: 'https://stellar.trust.ful.xyz/',
          name: 'Trustful',
          shortDescription: 'Tech leader',
          imageUrl: 'trustful.png',
        },
        {
          url: 'https://shutter-staking-dapp.vercel.app/',
          name: 'Shutter Staking dApp',
          shortDescription: 'Full-stack Web3 engineer',
          imageUrl: 'shutter.png',
        },
        {
          url: 'https://name.ful.xyz/',
          name: 'Nameful | Innovation for ENS DAO',
          shortDescription: 'Web3 Software engineer',
          imageUrl: 'nameful.png',
        },
        {
          url: 'https://freename.io/',
          name: 'Freename E-commerce',
          shortDescription: 'Tech leader',
          imageUrl: 'freename.png',
        },
        {
          url: 'https://namehashlabs.org/',
          name: 'NameHash Labs',
          shortDescription: 'Web3 Software engineer',
          imageUrl: 'namehash-labs.png',
        },
        {
          url: 'https://nameguard.io/',
          name: 'NameGuard',
          shortDescription: 'FrontEnd library developer',
          imageUrl: 'nameguard.png',
        },
        {
          url: 'https://namekit.io/',
          name: 'NameKit',
          shortDescription: 'FullStack Web3 library developer',
          imageUrl: 'namekit.png',
        },
        {
          url: 'https://namehash.io/',
          name: 'NameHash',
          shortDescription: 'FullStack Web3 E-commerce developer',
          imageUrl: 'namehash.png',
        },
        {
          url: 'https://www.enkrypt.com/',
          name: 'Enkrypt',
          shortDescription: 'Web3 Wallet Provider contributor',
          imageUrl: 'enkrypt.png',
        },
        {
          url: 'https://blockful.io/',
          name: 'Blockful.io',
          shortDescription: 'Co-founder and Team leader',
          imageUrl: 'blockful.png',
        },
        {
          url: 'https://0xolimpo.xyz/',
          name: 'Olimpo Web3 Community',
          shortDescription: 'FrontEnd developer',
          imageUrl: 'olimpo.png',
        },
        {
          url: 'https://airdrops.fyi/',
          name: 'Delta Fund Airdrops tool',
          shortDescription: 'FrontEnd developer',
          imageUrl: 'deltafund.png',
        },
        {
          url: 'https://www.cerave.com/about-cerave/the-ceramides-difference',
          name: 'Cerave US',
          shortDescription: 'FrontEnd E-commerce developer',
          imageUrl: 'cerave.png',
        },
        {
          url: 'https://www.essie.com',
          name: 'Essie US',
          shortDescription: 'FrontEnd E-commerce developer',
          imageUrl: 'essie.png',
        },
        {
          url: 'https://www.garnierusa.com',
          name: 'Garnier US',
          shortDescription: 'FrontEnd E-commerce developer',
          imageUrl: 'garnier.png',
        },
        {
          url: 'https://www.maybelline.com',
          name: 'Maybelline US',
          shortDescription: 'FrontEnd E-commerce developer',
          imageUrl: 'maybelline.png',
        },
        {
          url: 'https://finclass.com/',
          name: 'Finclass',
          shortDescription: 'FrontEnd developer',
          imageUrl: 'finclass.png',
        },
        {
          url: 'https://agro.bayer.com.br/',
          name: 'Agro Bayer',
          shortDescription: 'FrontEnd developer',
          imageUrl: 'bayer.png',
        },
        {
          url: 'https://www.alienarttattoo.com.br/',
          name: 'Alien Art Tattoo',
          shortDescription: 'Design and development',
          imageUrl: 'alien.png',
        },
        {
          url: 'https://www.samsclub.com.br/',
          name: "Sam's Club",
          shortDescription: 'E-mail marketing',
          imageUrl: 'sams-club.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.projects {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .project {
    position: relative;
    display: flex;
    align-items: flex-end;
    z-index: 2;
    width: 80vw;
    height: 170px;
    margin-top: 60px;
    max-width: 1024px;

    @media screen and (min-width: 768px) {
      height: 300px;
    }

    @media screen and (min-width: 1024px) {
      height: 500px;
    }

    a {
      text-decoration: none;
      color: $font-color;
    }

    &__bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: -webkit-linear-gradient(180deg,
          rgba(217, 217, 217, 0) 0%,
          #5977e1 99.99%);
      z-index: 2;
    }

    &__preview {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      background-size: cover;
    }

    &__overview {
      padding: 30px 120px 10px 40px;
      margin: 0 0 20px -20px;
      background-color: $contrast-color;
      z-index: 3;
      position: relative;
      font-size: 10px;
      font-family: $primary-font;
      clip-path: polygon(0 20%, 69% 20%, 100% 100%, 0% 100%);
      transition: all 0.2s;

      h1 {
        margin: 0 0 6px;
      }

      h2 {
        font-weight: 400;
        margin: 0;
      }

      &-title {
        padding-right: 20px;
      }
    }

    &:hover {
      .project__overview {
        -webkit-transform: translateX(19px);
        transform: translateX(19px);
        transition: all 0.2s;
      }
    }
  }
}
</style>
