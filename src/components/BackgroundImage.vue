<template>
    <div class="background"></div>
</template>

<script>

import { defineProps, defineComponent, onMounted } from 'vue'

export default defineComponent({
    name: 'BackgroundImage',
    setup() {
        onMounted(() => {
            const pos = document.querySelector('body');
            pos.addEventListener('mousemove', e => {
                pos.style.setProperty('--x', e.clientX + 'px');
                pos.style.setProperty('--y', e.clientY + 'px');
            })
        })
    }
})

</script>

<stytle lang="scss" scoped>
.background {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: url('/background.png');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: circle(75px at var(--x) var(--y));
}

.background:active {
    clip-path: circle(400px at var(--x) var(--y));
}
</stytle>