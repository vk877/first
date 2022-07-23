<template>
<v-container>
    <v-row>
        <v-col cols="8" style="margin: auto" class="mt-5 mb-5">
            <div>
                <h1 class="text-center">All Users</h1>

                <v-simple-table light>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left">#</th>
                                <th class="text-left">Username</th>
                                <th class="text-left">Email</th>
                                <th class="text-center">Edit</th>
                                <th class="text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in allUsers" :key="user.id">
                                <td>{{ user.id }}</td>
                                <td>{{ user.username }}</td>
                                <td>{{ user.email }}</td>
                                <td>
                                    <UserEditPopUp :userid="user.id" @getUser="getUsers" />
                                </td>
                                <td>
                                    <UserDeletePopUp :userid="user.id" @getUser="getUsers" />
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </div>
        </v-col>
    </v-row>
    <div class="text-center">
        <v-pagination v-model="page" :length="4" prev-icon="mdi-menu-left" next-icon="mdi-menu-right" circle color="green"></v-pagination>
    </div>
</v-container>
</template>

<script>
import axios from "axios";
import UserEditPopUp from "./UserEditPopUp.vue";
import UserDeletePopUp from "./UserDeletePopUp.vue";
export default {
    name: "UsersComponent",
    components: {
        UserEditPopUp,
        UserDeletePopUp,
    },
    data() {
        return {
            allUsers: [],
            dialog: false,
            page: 1,
        };
    },

    mounted() {
        this.getUsers()
    },

    methods: {
        hello() {
            console.log("btn")
        },
        getUsers() {
            axios.get("http://127.0.0.1:8000/api/users").then((response) => {
                console.log(response.data.users);
                this.allUsers = response.data.users;
                //   console.log(this.allUsers.length);    
            });
        }
    },

    computed: {

    },
};
</script>

<style lang="scss" scoped>
</style>
