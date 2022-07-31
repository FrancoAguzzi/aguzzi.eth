<template>
    <img :src="src" :alt="alt" :style="{ height, width }" lazyload>
</template>

<script>

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Image',
    props: {
        src: { type: String, default: '' },
        alt: { type: String, default: '' },
        width: { type: String, default: '0' },
        height: { type: String, default: 'auto' },
    }
})

</script>