<template>
    <div class="lunar">
        <TheHeader :isLunar="true"></TheHeader>
        <main class="lunar__content">
            <img class="lunar__content-bg" src="../assets/images/lunar-piramides.png" alt="Pyramids Image">
            <div class="lunar__content-texts">
                <h2 class="lunar__content-texts__title">
                    From worldwide market leader
                    clients to high potential and
                    purposeful startups
                </h2>
                <nuxt-link class="lunar__content-texts__cta" to="/projects">SEE REALIZED PROJECTS</nuxt-link>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'LunarPage'
}
</script>

<style lang="scss" scoped>
.lunar {
    height: 101vh;
    max-height: 101vh;
    margin: 0 0 0 20vw;

    &__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-family: $secondary-font;
        max-width: 1024px;
        margin: 0 auto;
        position: relative;

        &-texts {
            text-align: center;
            width: 80%;
            margin: 45vh auto 0;

            &__title {
                background-color: $contrast-color;
                font-size: 24px;
                background: -webkit-linear-gradient(270deg, #5977E1 80%, #D4E5E8 100%);
                background-clip: text;
                text-fill-color: rgba(255, 255, 255, 0);
                -webkit-background-clip: text;
                -webkit-text-fill-color: rgba(255, 255, 255, 0);
                margin: 20px 0 30px;
                display: inline;

                @media screen and (min-width: 768px) {
                    font-size: 28px;
                }
            }

            &__cta {
                font-family: $secondary-font;
                color: $font-color;
                background-clip: unset;
                text-fill-color: unset;
                -webkit-background-clip: unset;
                -webkit-text-fill-color: unset;
                background: radial-gradient(50% 50% at 50% 50%, rgba(191, 244, 255, 0.4) 0%, rgba(89, 119, 225, 0.4) 100%);
                border: none;
                padding: 10px 20px;
                align-self: center;
                margin: 40px 0;
                font-size: 20px;
                text-decoration: none;

                @media screen and (min-width: 768px) {
                    margin-right: auto;
                }
            }

            @media screen and (min-width: 768px) {
                font-size: 32px;
                margin: 10vh -30vw 0 0;
                max-width: 500px;
                text-align: left;
            }

            @media screen and (min-width: 1024px) {
                font-size: 36px;
            }
        }

        &-bg {
            width: 150vw;
            margin-left: -15vw;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -2;

            @media screen and (min-width: 768px) {
                width: 100vw;
                margin: 0 auto;
            }

            @media screen and (min-width: 1024px) {
                width: 100vw;
                margin: 0 auto;
            }
        }
    }
}
</style>