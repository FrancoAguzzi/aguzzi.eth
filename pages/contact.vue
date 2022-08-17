<template>
    <div class="contact">
        <TheHeader :isStar="true"></TheHeader>
        <main>
            <h1 class="contact__title">Hands on! Let's reach the
                next level together! </h1>
            <img class="contact__franco" src="../assets/images/acenando.png" alt="Franco Aguzzi's emoji waving goodbye">
        </main>
    </div>
</template>

<script>
export default {
    name: 'ContactPage',
}
</script>

<style lang="scss">
.contact {
    &__title {
        font-family: $secondary-font;
        background: linear-gradient(180deg,
                #5977E1 80%,
                #D4E5E8 100%);
        background-clip: text;
        text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 90px 40px 0;
        text-align: center;

        @media screen and (min-width: 768px) {
            font-size: 36px;
        }
    }

    &__franco {
        display: flex;
        justify-content: center;
        margin: 40px auto 0;
        width: 50%;
        max-width: 300px;
    }
}
</style>