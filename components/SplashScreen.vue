<template>
    <div class="splash">
        💎
    </div>
</template>

<script>
export default {
    name: "SplashScreen",
}
</script>

<style lang="scss" scoped>
.splash {
    height: 100vh;
    width: 100vw;
    position: fixed;
    left: 0;
    top: 0;
    background-color: white;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 120px;
    animation: scale 3s ease-in-out 1s 1;
    animation-fill-mode: forwards;
    pointer-events: none;
}

@keyframes scale {
    0% {
        opacity: 1;
        transform: scale(1);
    }

    66% {
        transform: scale(6);
    }

    100% {
        opacity: 0;
        transform: scale(6);
    }
}
</style>
