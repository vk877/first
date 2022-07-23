<template>
<div>
    <v-carousel height="400" hide-delimiter-background cycle show-arrows-on-hover interval="3000" >
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
</div>
</template>

<script>
export default {
    name: 'SlidderComponent',
    data() {
        return {
            items: [{
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
