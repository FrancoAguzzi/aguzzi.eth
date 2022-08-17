<template>
    <header class="header">
        <img v-if="isLunar" class="header__image" src="../assets/images/moon.png" alt="Moon Image">
        <nuxt-link v-if="isProjects" to="/?currentPage=2" class="header__back">
            <img src="../assets/images/arrow.png" alt="Back to home cta image">
        </nuxt-link>
        <ul v-if="isStar" class="header__socials">
            <li class="header__socials-item">
                <a href="https://www.linkedin.com/in/franco-aguzzi-546506184/">
                    <img src="../assets/images/linkedin.png" alt="Linkedin redirect icon">
                </a>
            </li>
            <li class="header__socials-item">
                <a href="https://github.com/FrancoAguzzi">
                    <img src="../assets/images/github.png" alt="Github redirect icon">
                </a>
            </li>
        </ul>
        <div v-if="!isStar" class="header__content">
            <h1 class="header__content-pricing"><b>DAY RATE</b> £250</h1>
            <nuxt-link to="/contact" class="header__content-contact">CONTACT</nuxt-link>
        </div>
        <img v-if="!isLunar && !isStar && !isProjects" class="header__image" src="../assets/images/sun.png"
            alt="Sun Image">
        <img v-if="isStar" class="header__image" src="../assets/images/star.png" alt="Star Image">
    </header>
</template>

<script>
export default {
    name: 'TheHeader',
    props: {
        isLunar: { type: Boolean, required: false, default: false },
        isStar: { type: Boolean, required: false, default: false },
        isProjects: { type: Boolean, required: false, default: false },
    }
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;

    &__back {
        background-color: transparent;
        border: none;
        width: 60px;

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
            background-color: transparent;
            border: 2px solid $font-color;
            padding: 10px 22px;
            font-weight: bold;
            text-decoration: none;
            font-size: 14px;
            color: $font-color;
            text-align: center;
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
            font-size: 14px;

            &-contact {
                font-size: 20px;
            }
        }

        &__image {
            width: 180px;
        }
    }
}
</style>