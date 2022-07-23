<template>
<div>
    <v-app-bar app flat dense elevate-on-scroll color="green">
        <v-app-bar-nav-icon class="white--text" @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title class="white--text">Demo</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-text-field hide-details dark prepend-icon="mdi-magnify" single-line></v-text-field>
        <v-btn icon>
            <v-icon class="white--text">mdi-heart</v-icon>
        </v-btn>
        <v-avatar class="white" src="">
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-avatar>

        <template v-slot:extension>
            <v-tabs align-with-title dark>
                <v-tab :to="'/'">Home</v-tab>
                <v-tab :to="'/login'">Login</v-tab>
                <v-tab :to="'/register'">Register</v-tab>
                <v-tab :to="'/users'">Users</v-tab>
                <v-tab :to="'/about'">About Us</v-tab>
            </v-tabs>
        </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary style="overflow: hidden">
        <v-list nav dense>
            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Account</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-gavel</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Admin</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <template v-slot:append>
            <div class="pa-2">
                <v-btn block> Logout </v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</div>
</template>

<script>
// import LoginComponent from './components/LoginComponent.vue';
export default {
    name: "NavBar",
    components: {},
    data() {
        return {
            drawer: false,
            group: null,
        };
    },

    mounted() {},

    methods: {},
};
</script>

<style scoped>
/* .v-text-field{
      width: 10px;
} */
</style>
<!-- let formData = new FormData();
          formData.append('image', this.selectedFile);
          axios
          .post("http://127.0.0.1:8000/api/fileupload", formData)
          .then(response => {
            console.log(response.data);
          }) -->