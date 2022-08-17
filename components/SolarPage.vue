<template>
    <div class="solar">
        <TheHeader></TheHeader>
        <main class="solar__content">
            <div class="solar__content-texts">
                <p>Hello dear friend!</p>
                <h1>I'm Franco Aguzzi,
                    I'll guide you troughout the journey
                    of creating performant and innovative
                    web solutions for your business.</h1>
            </div>
            <img class="solar__content-bg" src="../assets/images/solar-piramides.png" alt="Pyramids Image">
        </main>
    </div>
</template>

<script>
export default {
    name: 'SolarPage'
}
</script>

<style lang="scss" scoped>
.solar {
    height: 100vh;
    max-height: 100vh;

    &__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 80vh;
        font-family: $secondary-font;
        background: linear-gradient(90deg, #EAA52E 0%, #EB6035 100%);
        background-clip: text;
        text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        &-texts {
            text-align: center;
            width: 80%;
            margin: 0 auto;

            p {
                font-size: 32px;
            }

            h1 {
                font-size: 26px;
            }
        }
    }
}
</style>