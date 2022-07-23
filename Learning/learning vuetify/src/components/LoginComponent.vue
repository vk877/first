<template>
<v-container>
    <v-row>
        <v-col cols="6" style="margin: auto;">
            <h1 class="text-center">Login</h1>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="username" :counter="10" :rules="usernameRules" label="Username" required></v-text-field>

                <v-text-field v-model="password" label="Password" type="password" required></v-text-field>

                <v-btn color="success" @click="login">
                    Login
                </v-btn>
            </v-form>
            <!-- <v-btn class="success mt-3" @click="showAlert">
                Sweet Alert
            </v-btn> -->
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LoginComponent',

    data: () => ({
        valid: true,
        username: '',
        usernameRules: [
            v => !!v || 'userame is required',
            v => (v && v.length <= 20) || 'userame must be less than 10 characters',
        ],

        password: '',
    }),

    methods: {
        login() {
            const user = {
                "username": this.username,
                "password": this.password
            }
            axios
                .post("http://127.0.0.1:8000/api/login", user)
                .then(response => {
                    console.log(response);
                    // this.$router.push({
                    //     path: '/',
                    //     name: 'HomeComponent'
                    // });
                })
        },

        // Sweet alert.....


        // showAlert() {
        //     this.$swal({
        //         title: 'Are you sure?',
        //         text: 'You can\'t revert your action',
        //         type: 'warning',
        //         showCancelButton: true,
        //         confirmButtonText: 'Yes Delete it!',
        //         cancelButtonText: 'No, Keep it!',
        //         showCloseButton: true,
        //         showLoaderOnConfirm: true
        //     }).then((result) => {
        //         if (result.value) {
        //             this.$swal('Deleted', 'You successfully deleted this file', 'success')
        //         } else {
        //             this.$swal('Cancelled', 'Your file is still intact', 'info')
        //         }
        //     })
        // },


        // Sweet alert.....
    }
}
</script>

<style scoped>
.swal2-container.swal2-center>.swal2-popup {
    border-radius: 20px;
}
</style>
