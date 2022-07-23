<template>
<v-container>
    <v-row>
        <v-col cols="6" style="margin: auto;">
            <h1 class="text-center">Regitration Form</h1>
            <v-alert dense text type="success" v-if="user_create">{{user_create}}</v-alert>
            <v-alert dense text type="error" v-if="email_validation">{{email_validation}}</v-alert>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-alert dense outlined type="error" v-if="user_exist">{{ user_exist }}</v-alert>
                <v-text-field v-model="username" :counter="20" :rules="usernameRules" label="Username" required></v-text-field>
                <v-alert dense outlined type="error" v-if="email_exist">{{ email_exist }}</v-alert>
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

                <v-text-field v-model="password" label="Password" type="password" required></v-text-field>

                <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                    Validate
                </v-btn>

                <v-btn color="error" class="mr-4" @click="reset">
                    Reset Form
                </v-btn>

                <v-btn color="warning" class="mr-4" @click="resetValidation">
                    Reset Validation
                </v-btn>

                <v-btn color="info" @click="submitForm()">
                    Submit
                </v-btn>
            </v-form>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import axios from 'axios'

export default {
    name: 'RegisterComponent',
    data: () => ({
        valid: true,
        username: '',
        usernameRules: [
            v => !!v || 'userame is required',
            v => (v && v.length <= 10) || 'userame must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        password: '',

        user_exist: '',
        email_exist: '',
        user_create: '',
        email_validation: '',
    }),

    methods: {
        validate() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
        submitForm() {
            const user = {
                "username": this.username,
                "email": this.email,
                "password": this.password,
            };
            console.log(user);
            axios
                .post("http://127.0.0.1:8000/api/register", user)
                .then(response => {
                    // console.log(response.data.errors.email[0]);
                    // this.email_validation = response.data.errors.email[0];
                    console.log(response.data.status)
                    if(response.data.status==201){
                         this.$swal('User Created..', '', 'success');
                    }
                    this.user_create = response.data.message;
                    // console.log(response.data.email_message);
                    this.email_exist = response.data.email_message;
                    // console.log(response.data.username_message);
                    this.user_exist = response.data.username_message;
                    // this.$router.push({path: '/login', name: 'LoginComponent'});
                    
                });

        },

    },
}
</script>
