<template>
<div>
    <slidder-comp />
    <v-container>
        <v-row>
            <v-col>
                <h1 class="display-1 mt-5 mb-3">About Us</h1>
                <v-row>
                    <v-col cols="6">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
                            dicta praesentium hic iste ea consequatur minus quis facilis
                            aperiam, quasi voluptate animi incidunt totam id est aliquam
                            beatae? Illo odit explicabo, enim beatae labore sunt impedit,
                            corrupti, unde neque perferendis similique porro error eius
                            asperiores vel doloremque id quia deleniti ex earum cum!
                            Accusantium quidem neque veritatis delectus dolorem enim animi
                            et modi at perferendis impedit, iste cumque? Ratione ut tempora
                            reprehenderit facere cupiditate. Amet ut voluptate animi ducimus
                            iure.
                        </p>
                    </v-col>
                    <v-col cols="2"></v-col>
                    <v-col cols="2">
                        <v-card elevation="2" shaped width="200">
                            <v-img src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ" height="180"></v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="2">
                        <v-card elevation="2" shaped width="200">
                            <v-img src="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ" height="180"></v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <h5 class="display-1 text-center">GROW YOUR BUSINESS WITH US
                </h5>
                <hr>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-card>
                    <v-img src="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ" height="300"></v-img>
                    <v-icon size="5rem" color="success" class="pt-3 pl-3">
                        mdi-cart
                    </v-icon>
                    <v-card-title class="display-1">Title 1</v-card-title>
                    <v-card-text>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, illum!
                        </p>
                        <v-btn class="green" dark>Show More</v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card>
                    <v-img src="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ" height="300"></v-img>
                    <v-icon size="5rem" color="success" class="pt-3 pl-3">
                        mdi-account-group
                    </v-icon>
                    <v-card-title class="display-1">Title 1</v-card-title>
                    <v-card-text>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, illum!
                        </p>
                        <v-btn class="green" dark>Show More</v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card>
                    <v-img src="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ" height="300"></v-img>
                    <v-icon size="5rem" color="success mt-5" class="pt-3 pl-3">
                        mdi-fire-truck
                    </v-icon>
                    <v-card-title class="display-1">Title 1</v-card-title>
                    <v-card-text>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, illum!
                        </p>
                        <v-btn class="green" dark>Show More</v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card>
                    <v-img src="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ" height="300"></v-img>
                    <v-icon size="5rem" color="success" class="pt-3 pl-3">
                        mdi-cast-variant
                    </v-icon>
                    <v-card-title class="display-1">Title 1</v-card-title>
                    <v-card-text>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, illum!
                        </p>
                        <v-btn class="green" dark>Show More</v-btn>
                    </v-card-text>
                    
                </v-card>
            </v-col>

        </v-row>
    </v-container>
</div>
</template>

<script>
import SlidderComponent from "@/components/SlidderComponent.vue";

export default {
    components: {
        "slidder-comp": SlidderComponent,
    },
};
</script>
