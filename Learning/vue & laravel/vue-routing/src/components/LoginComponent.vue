<template>
<div class="container-fluid">
    <div class="row" id="font">
        <div class="col-sm-3 loginform">
            <!-- {{ user }} -->
            <p class="text-danger">{{ message }}</p>
            <span style="font-weight: 700; font-size: 34px; text-align: center; padding-left: 123px;">Login</span>
            <form action="" v-on:submit.prevent="loginUser()">
                <span class="validation_Error">{{ validationErrors.username }}</span>
                <div>
                    <i class="fa-solid fa-envelope fa-2x" id="envalope"></i>
                    <input type="text" name="username" placeholder="Username / Email" class="form-control mb-3" v-model="user.username">
                </div>

                <span class="validation_Error">{{ validationErrors.password }}</span>
                <i class="fa-solid fa-key fa-2x" id="key"></i>
                <input type="password" name="password" placeholder="Password" class="form-control mb-3" v-model="user.password">

                <button type="submit" class="btn btn-dark mb-3" id="login-btn">Login</button>
                
                <router-link to="/register" class="log_text"><span>Don't have an account?  Regsiter</span></router-link>
            </form>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name: "LoginComponent",
    setup() {
        
    },
    data(){
        return {
            user:{},
            validationErrors: [],
            message: '',
        }
    },
    
    methods: {
        loginUser(){
            // console.log("Working...");
            axios
            .post('http://127.0.0.1:8000/api/login', this.user)
            .then(res=>{
                // console.log(res.data);
                if(res.data.status == 424){
                    console.log(res.data.errors);
                    this.validationErrors = (res.data.errors);
                }
                else if(res.data.status == 404){
                    this.$router.push({name: "LoginComponent"});
                    this.message = (res.data.message);
                    console.log(this.message);
                }
                else{
                    console.log(res.data);
                    localStorage.setItem('User', JSON.stringify(res.data.username));
                    this.$router.push({name: "HomeComponent"});
                    this.message = (res.data.message);
                    console.log(this.message);
                }
            })
            
        }
    }
}
</script>
<style scoped>
#key{
    position: absolute;
    top: 318px;
    left: 605px;
    color: #07999d;
}
#envalope{
    position: absolute;
    top: 258px;
    left: 605px;
    color: #07999d;
}
.loginform{
    margin: 0px auto;
    padding: 20px;
    padding-top: 120px;
    /* border-left: 4px solid grey;
    border-top: 4px solid grey;
    box-shadow: 1px 1px 7px#888888;
    border-radius: 10px; */
}
#login-btn{
    width: 100%;
    border-radius: 20px;
    height: 45px;
    font-size: 17px;
    background: #07999d;
    border: 3px solid #038484;
}
.log_text{
    color: #07999d;
    padding-left: 33px;
    font-size: 18px;
}
.validation_Error{
    color: red;
}
#font{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
input{
    border-radius: 20px;
    font-size: 17px;
    height: 45px;
    box-shadow: 3px 3px 5px #07999d;
    padding-left: 60px;

}

</style>