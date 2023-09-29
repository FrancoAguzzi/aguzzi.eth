<template>
    <main>
        <div class="topImage"></div>

        <header class="content">
            <img width="180px" src="~/assets/images/acenando.png" class="content__memoji" />
            <h1 class="content__title">Hi, I'm <a class="link" href="/portfolio">Franco Aguzzi</a><span
                    class="content__title-emoji"> 💫</span></h1>
            <h2 class="content__subtitle">Or <a class="link" href="/portfolio">frankind.eth</a> 😄 in the Ethereum
                eco-system</h2>
            <h3 class="content__thirdtitle">I help building web's future 🔮 <br />"But how?", You might ask me 💭</h3>
            <p class="content__description">As <a class="link" href="https://blockful.io">Blockful's</a> co-founder, I aim
                to solve
                good people problems with good communication and latest technologies 🌎 <br> while
                co-creating a collaborative and harmonic place to work 🎼
                <br>As as a programmer, I code web-accessible solutions with elegant interfaces and powerful performance
                👨🏼‍💻
            </p>

            <div class="content__socialMedias">
                <p class="content__socialMedias-title">If you want to know more about me, <br>consider navigating through
                    these
                    links:</p>
                <ul class="content__socialMedias-links">
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
                        <a href="mailto:frankind.eth@gmail.com">
                            <img src="~/assets/images/email.png" alt="Email symbol" />
                        </a>
                    </li>
                </ul>
            </div>
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
    padding: 0 0 0;
}

main {
    width: 100vw;
    overflow: hidden;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    width: 100vw;
    padding: 0% 2% 60%;
    background: linear-gradient(360deg, #438bd300 0%, #e4f0fc3a 10%, #e4f0fc 20%, #e4f0fc 80%, #e4f0fc3a 90%, #438bd300 100%);

    &::-webkit-scrollbar {
        display: none;
    }
}

.topImage,
.bottomImage {
    width: 100vw;
    padding-top: 100%;
    background-size: cover;
    position: fixed;
    z-index: 0;
    overflow: hidden;
}

.topImage {
    background: url('~assets/images/topBgImage.png');
    background-size: 110%;
    background-position: left 10% top 180%;
    left: 0;
    top: 0;
    z-index: 1;
}

.bottomImage {
    background: url('~assets/images/code.png');
    background-size: 100% auto;
    background-position: left 60% bottom 500%;
    bottom: 0;
    left: 0;
}

.content__socialMedias {
    &-title {
        margin: 40px 0 20px 0;
        text-align: center;
        font-size: 16px;
        color: #438bd3;
    }

    &-links {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: center;

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
}

.content__title {
    font-size: 30px;
    font-weight: 500;
    margin-top: 30px;
    color: #72abe4;
    text-align: center;
}

a.link {
    font-weight: bold;
    transition: all .2s;
    color: #72abe4;

    &:hover {
        color: #438bd3;
        transition: all .2s;
    }
}

.content__subtitle {
    text-align: center;
    margin-top: 10px;
    line-height: 150%;
    font-weight: 600;
    font-size: 20px;
    color: #72abe4;
}

.content__thirdtitle {
    text-align: center;
    margin: 30px 40px 0;
    line-height: 150%;
    font-weight: 600;
    font-size: 20px;
    color: #438bd3;
}


.content__description {
    text-align: center;
    line-height: 150%;
    font-size: 18px;
    color: #72abe4;
    font-family: sans-serif;
    margin: 10px 30px 0;
}

@media screen and (min-width: 500px) {
    .content {
        padding: 20% 0 40%;
    }

    .topImage {
        padding-top: 80%;
        background-position: top left;
    }
}

@media screen and (min-width: 768px) {
    .content {
        padding: 20% 0 40%;
    }

    .topImage {
        padding-top: 50%;
        background-position: top left;
    }
}

@media screen and (min-width: 1024px) {
    main {
        flex-direction: row;
        justify-content: center;
    }

    body {
        padding: 0;
    }

    .content {
        height: 100vh;
        margin: 0;
        padding: 1% 33%;
        overflow-y: auto;
        background: linear-gradient(270deg, #438bd300 0%, #e4f0fc87 20%, #e4f0fc 30%, #e4f0fc 70%, #e4f0fc87 80%, #438bd300 100%);

        &__title {
            margin-top: 60px;

            &-emoji {
                margin-left: 20px;
            }
        }

        &__subtitle {
            margin-top: 15px;
            font-size: 28px;
        }

        &__thirdtitle {
            margin-top: 60px;
            font-size: 20px;
        }

        &__description {
            margin-top: 15px;
            max-width: 570px;
            font-size: 20px;
        }
    }

    .topImage {
        height: 100vh;
        width: 50%;
        background: url('~assets/images/topBgImage.jpg');
        background-position: left 26% bottom;
        background-size: auto 100%;
        padding-top: 100%;
    }

    .bottomImage {
        left: auto;
        right: 0;
        background-size: cover;
        background-position: left 10% top 35%;
        height: 100vh;
        width: 50%;
    }
}
</style>
