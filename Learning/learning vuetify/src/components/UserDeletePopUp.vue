<template>
<div>
    <v-btn @click="deleteUser(userid)" plain>
        <v-icon>mdi-delete</v-icon>
    </v-btn>
    <!-- <v-dialog v-model="dialog" max-width="600px" persistent>
        <template v-slot:activator="{on}">
            <v-btn plain v-on="on">
                <v-icon>mdi-delete</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Are you sure to delete the user!</span>
            </v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    No
                </v-btn>
                <v-btn color="red darken-1" text @click="(dialog = false, deleteUser(userid))">
                    Yes
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog> -->
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'UserDeletePopUp',
    props: {
        userid: Number,
    },
    data() {
        return {
            dialog: false,
        };
    },

    methods: {
        deleteUser(userid) {
            this.$swal({
                title: 'Are you sure?',
                text: 'You can\'t revert your action',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes Delete it!',
                cancelButtonText: 'No, Keep it!',
                showCloseButton: true,
                showLoaderOnConfirm: true
            }).then((result) => {
                 
                if (result.value) {
                    axios
                    .post("http://127.0.0.1:8000/api/delete/" + userid)
                    .then(response => {
                        console.log(response.data.message);
                        this.$emit('getUser');
                    })
                    this.$swal('Deleted', 'You successfully deleted the user..', 'success')
                } else {
                    this.$swal('Cancelled', 'You cancelled the request', 'info')
                }
            })
        },
    },
};
</script>

<style lang="scss" scoped>

</style>
