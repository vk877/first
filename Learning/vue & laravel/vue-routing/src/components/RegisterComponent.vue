<template>
<div class="container-fluid">
    <div class="row">

        <!-- {{ user }} -->
        <div class="col-sm-3 userform">
            <span style="font-weight: 700; font-size: 34px; text-align: center; padding-left: 100px;">Register</span>
            <form action="" v-on:submit.prevent="addUser()">
                {{ userCreate }}
                <span class="validation_text">{{ errors.username }}</span>
                <span class="validation_text">{{ usernameExist }}</span>
                <div>
                    <i class="fa-solid fa-user fa-2x" id="user"></i>
                    <input type="text" name="username" placeholder="Enter username" class="form-control mb-3" v-model="user.username">
                </div>
                <span class="validation_text">{{ errors.email }}</span>
                <span class="validation_text">{{ emailExist }}</span>

                <div>
                    <i class="fa-solid fa-envelope fa-2x" id="envalope"></i>
                    <input type="email" name="email" placeholder="Enter your emailaddress" class="form-control mb-3" v-model="user.email">
                </div>

                <span class="validation_text">{{ errors.password }}</span>
                <div>
                    <i class="fa-solid fa-key fa-2x" id="key"></i>
                    <input type="password" name="password" placeholder="Enter your password" class="form-control mb-3" v-model="user.password">
                </div>

                <button type="submit" class="btn btn-dark mb-3" id="register-btn">Register</button>

                <router-link to="/login" class="reg_text"><span>Already Register? login</span></router-link>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: "RegisterComponent",
    setup() {

    },

    data() {
        return {
            user: {},
            errors: [],
            usernameExist: '',
            emailExist: '',
            userCreate: '',
        }
    },
    methods: {
        addUser() {
            // console.log("Working..");
            axios
                .post("http://127.0.0.1:8000/api/register", this.user)
                .then(res => {
                    (res.data.errors !== undefined) ? this.errors = (res.data.errors): this.errors = '';
                    this.usernameExist = (res.data.username_message);
                    this.emailExist = (res.data.email_message);
                    if (res.data.status == 201) {
                        // console.log(res.data);
                        console.log(res.data.user);
                        this.userCreate = (res.data.message);
                        this.$router.push({
                            name: 'LoginComponent'
                        });
                    }
                })
        }
    },

}
</script>

<style scoped>
.userform {
    margin: 0px auto;
    padding: 20px;
    padding-top: 120px;
}

#register-btn {
    width: 100%;
    border-radius: 20px;
    height: 45px;
    font-size: 17px;
    background: #07999d;
    border: 3px solid #038484;
}

.reg_text {
    color: #07999d;
    padding-left: 80px;
    font-size: 18px;
}

.validation_text {
    color: red;
}

input {
    border-radius: 20px;
    font-size: 17px;
    height: 45px;
    box-shadow: 3px 3px 5px #07999d;
    padding-left: 60px;
}

#user {
    position: absolute;
    top: 240px;
    left: 605px;
    color: #07999d;
}

#envalope {
    position: absolute;
    top: 301px;
    left: 605px;
    color: #07999d;
}

#key {
    position: absolute;
    top: 363px;
    left: 605px;
    color: #07999d;
}
</style>
