<template>
    <ul class="projects">
        <li v-for="(project, index) in projects" class="project">
            <a :href="project.url">
                <div class="project__bg"></div>
                <div class="project__preview"
                    :style="{ backgroundImage: `url(${require(`../assets/images/${projects[index].imageUrl}`)})` }"
                    :alt="`${name} website screenshot`"></div>
                <div class="project__overview">
                    <h1 class="project__overview-title">{{ project.name }}</h1>
                    <h2 class="project__overview-description">{{ project.shortDescription }}</h2>
                </div>
            </a>
        </li>
    </ul>
</template>

<script>

export default {
    name: "ProjectsList",
    data() {
        return {
            projects: [
                {
                    url: "https://www.cerave.com/about-cerave/the-ceramides-difference",
                    name: "Cerave US",
                    shortDescription: "FrontEnd dev.",
                    imageUrl: 'cerave.png'
                },
                {
                    url: "https://www.essie.com",
                    name: "Essie US",
                    shortDescription: "FrontEnd dev.",
                    imageUrl: 'essie.png'
                },
                {
                    url: "https://www.garnierusa.com",
                    name: "Garnier US",
                    shortDescription: "FrontEnd dev.",
                    imageUrl: 'garnier.png'
                },
                {
                    url: "https://www.maybelline.com",
                    name: "Maybelline US",
                    shortDescription: "FrontEnd dev.",
                    imageUrl: 'maybelline.png'
                },
                {
                    url: "https://finclass.com/",
                    name: "Finclass",
                    shortDescription: "FrontEnd dev.",
                    imageUrl: 'finclass.png'
                },
                {
                    url: "https://agro.bayer.com.br/",
                    name: "Agro Bayer",
                    shortDescription: "FrontEnd dev.",
                    imageUrl: 'bayer.png'
                },
                {
                    url: "https://www.alienarttattoo.com.br/",
                    name: "Alien Art Tattoo",
                    shortDescription: "Design and development",
                    imageUrl: 'alien.png'
                },
                {
                    url: "https://www.samsclub.com.br/",
                    name: "Sam's Club",
                    shortDescription: "E-mail marketing",
                    imageUrl: 'sams-club.png'
                },
            ]
        };
    },
}
</script>

<style lang="scss" scoped>
.projects {
    list-style: none;
    margin: 20px auto 60px;
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
            background: linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #5977E1 99.99%);
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
            padding: 30px 80px 10px 30px;
            margin: 0 0 10px -20px;
            background-color: $contrast-color;
            z-index: 3;
            position: relative;
            font-size: 10px;
            font-family: $primary-font;
            clip-path: polygon(0 20%, 69% 20%, 100% 100%, 0% 100%);
            transition: all .2s;

            h1 {
                margin: 0 0 6px;
            }

            h2 {
                font-weight: 400;
                margin: 0;
            }
        }

        &:hover {
            .project__overview {
                transform: translateX(20px);
                transition: all .2s;
            }
        }
    }
}
</style>