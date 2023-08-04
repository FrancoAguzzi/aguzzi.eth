<template>
    <main>
        <div class="topImage"></div>

        <header class="content">
            <img width="200px" src="~/assets/images/acenando.png" class="content__memoji" />
            <h1 class="content__title">Hi, I'm <a href="/portfolio">Franco Aguzzi</a></h1>
            <h2 class="content__subtitle">I help building web's future</h2>
            <p class="content__description">Working as a full-stack developer, I help purposeful clients to
                develop their business through technology. If you want to know more
                about me, consider navigating through these links:</p>

            <ul class="content__socialMedias">
                <li>
                    <a href="/portfolio">
                        <img src="~/assets/images/web.png" alt="Personal website icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/franco-aguzzi-546506184/">
                        <img src="~/assets/images/linkedin.png" alt="LinkedIn logo" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/FrancoAguzzi">
                        <img src="~/assets/images/github.png" alt="Github logo" />
                    </a>
                </li>
                <li>
                    <a href="mailto:faguzzi3@gmail.com">
                        <img src="~/assets/images/email.png" alt="Email symbol" />
                    </a>
                </li>
            </ul>
        </header>

        <div class="bottomImage"></div>
    </main>
</template>

<script>
export default {
    name: 'IndexPage',
}
</script>

<style lang="scss">
* {
    box-sizing: border-box;
    margin: 0;
}

:root {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
    font-size: 1rem;
}

body {
    width: 100%;
    min-height: 100vh;
    display: grid;
    align-items: center;
    justify-content: center;
    color: #83cbff;
}

a:visited {
    color: inherit;
}

.content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: min(100%, 68ch);
    font-size: clamp(2rem, -0.4742rem + 6.1856vw, 2.75rem);
    height: 80vh;
    margin: 10vh 0;

    &:before {
        content: '';
        height: 1px;
        width: 100vw;
        box-shadow: 0 0 100px 250px #E4F0FC;
        position: absolute;
        right: 0;
        z-index: -1;
        bottom: 35%;
    }

    &:after {
        content: '';
        height: 1px;
        width: 100vw;
        box-shadow: 0 0 100px 250px #E4F0FC;
        position: absolute;
        right: 0;
        z-index: -1;
        top: 40%;
    }
}

.topImage,
.bottomImage {
    width: 100vw;
    padding-top: 100%;
    background-size: cover;
    position: absolute;
}

.topImage {
    background: url('~assets/images/topBgImage.png');
    background-position: left 30% top;
    top: 0;
    left: 0;
}

.bottomImage {
    background: url('~assets/images/bottomBgImage.png');
    background-position: left 60% top 25%;
    bottom: 0;
    left: 0;
}

.content__socialMedias {
    list-style: none;
    margin: 40px 0 0 0;
    padding: 0;
    display: flex;

    li {
        transition: all .2s;

        img {
            width: 60px;
        }

        &:hover {
            transform: scale(1.2);
            transition: all .2s;

        }

        &:not(:last-child) {
            margin-right: 30px;
        }
    }
}

.content__title {
    font-size: 2.25rem;
    font-weight: 500;
    margin-top: 30px;
    color: #72abe4;
    text-align: center;

    a {
        font-weight: bold;
        transition: all .2s;
        color: #72abe4;

        &:hover {
            color: #438bd3;
            transition: all .2s;
        }
    }
}

.content__subtitle {
    text-align: center;
    margin-top: 10px;
    line-height: 150%;
    font-weight: 600;
    font-size: clamp(1.5rem, 1rem + 1.25vw, 2rem);
    color: #72abe4;
}

.content__description {
    text-align: center;
    margin-top: 50px;
    line-height: 150%;
    font-size: clamp(1.25rem, 1rem + 1.25vw, 2rem);
    color: #72abe4;
    font-family: sans-serif;
    margin: 30px 30px 0;
}

main {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #E4F0FC;
}

@media screen and (min-width: 1024px) {
    main {
        flex-direction: row;
        justify-content: center;
    }

    .content {
        width: 70%;

        &:after {
            height: 100vh;
            width: 1px;
            left: 25%;
            top: 0;
        }

        &:before {
            height: 100vh;
            width: 1px;
            left: auto;
            right: 25%;
            top: 0;
            transform: rotateZ(180deg);
        }

        &__title {
            margin-top: 60px;
        }

        &__subtitle {
            margin-top: 30px;
            font-size: 28px;
        }

        &__description {
            margin-top: 40px;
            max-width: 570px;
            font-size: 22px;
        }
    }

    .topImage {
        height: 100vh;
        width: 25%;
        background-size: auto 100%;
        background-position: left 70% bottom;
    }

    .bottomImage {
        left: auto;
        right: 0;
        background-size: cover;
        background-position: right 20% top 35%;
        height: 100vh;
        width: 25%;
    }
}
</style>
