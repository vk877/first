<template>
<div>
    <v-dialog v-model="dialog" max-width="600px" persistent>
        <template v-slot:activator="{on}">
            <v-btn plain v-on="on" @click="editUser(userid)">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">User Data</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="Username*" type="text" required v-model="data.username"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Email*" required v-model="data.email"></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="(dialog = false), updateUser(userid)">
                    Update
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'UserEditPopUp',
    props:{
        userid: Number,
    },
    data() {
        return {
            dialog: false,
            data: {},
            userUpdateMsg:''
        };
    },

    mounted() {

    },

    methods: {
        editUser(userid) {
            axios
                .get("http://127.0.0.1:8000/api/edit/"+userid)
                .then(response => {
                    // console.log(response);
                    // console.log(response.data.user);
                    this.data = response.data.user;
                    console.log(this.data);
                })
                
        },
        updateUser(){
            axios
            .post("http://127.0.0.1:8000/api/update/", this.data)
            .then(response => {
                console.log(response.data.message);
                console.log(response.data.status);
                if(response.data.status=='success'){
                    this.$swal(response.data.message, '', 'success');
                }
                if(response.data.status=='failed'){
                    alert("Hello")
                    this.$swal(response.data.message, '', 'warning');
                }
                // this.userUpdateMsg = response.data.message;
                // this.$emit('getUser');
            })
        }
    },
    updated: function () {
    this.$nextTick(function () {
        this.$emit('getUser');
  })
}
};
</script>

<style lang="scss" scoped>

</style>
