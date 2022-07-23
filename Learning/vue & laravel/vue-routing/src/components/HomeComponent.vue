<template>
<div>
    <h1>Home Component</h1>
    <br>
    <button type="button" class="btn btn-danger" @click="logout()">Logout</button>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: "HomeComponent",
    setup() {

    },
    methods: {
        logout() {
            console.log("Logout btn is Working..");
            axios
                .post('http://127.0.0.1:8000/api/logout')
                .then(res => {
                    console.log(res);
                    localStorage.removeItem('User');
                    this.$router.push({
                        name: 'LoginComponent'
                    });
                })
        }
    },
    beforeCreate() {
        console.log("beforeCreate..");
        let user = JSON.parse(localStorage.getItem("User"));
        if (user) {
            console.log("User Found...");
        } else {
            console.log("User not found..");
            this.$router.push({
                name: "LoginComponent"
            });
        }
    },
}
</script>
