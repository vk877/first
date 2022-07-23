<template>

<div>
    <transition-group name="fade" tag="div">
        <div v-for="i in [currentIndex]" :key="i">
            <img :src="currentImg" style="width: 100%; height: 400px;"/>
        </div>
    </transition-group>
    <a class="slidderbtn" @click="prev" href="#">&#10094; Previous</a>
    <a class="slidderbtn" @click="next" href="#">Next &#10095;</a>
</div>
</template>

<script>
export default {
    name: "VueSlidder",
    data() {
        return {
            images: [
                "https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg",
                "http://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
                "https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896-1200x450_c.jpg",
            ],
            timer: null,
            currentIndex: 0
        };
    },

    mounted: function () {
        this.startSlide();
    },

    methods: {
        startSlide: function () {
            this.timer = setInterval(this.next, 5000);
        },

        next: function () {
            this.currentIndex += 1;
        },
        prev: function () {
            this.currentIndex -= 1;
        }
    },

    computed: {
        currentImg: function () {
            return this.images[Math.abs(this.currentIndex) % this.images.length];
        }
    }
}
</script>

<style scoped>
    .slidderbtn{
        color: red;
        
    }
    
</style>
