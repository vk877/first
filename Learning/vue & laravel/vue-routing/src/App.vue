<template>
<!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->

<!-- navbar start -->

<section id="navbar">
    <nav class="navbar navbar-expand-lg navbar-custom">
        <div class="container-fluid">
            <a class="navbar-brand navlink" href="#">
                <router-link to="/">Home</router-link>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            <router-link to="/">Home</router-link>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link">
                            <router-link to="/aboutus">About Us</router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">
                            <router-link to="/login">Login</router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">
                            <router-link to="/register">Register</router-link>
                        </a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</section>
<!-- <VueSlidder/> -->
<!-- navbar end -->

<!-- <ChildOfApp title="This is from Parent.." />
<ChildOfApp v-on:setNewData="setNewData($event)" v-bind:title="title" />
<ChildOfApp v-bind:userData="userInfo" /> -->
<router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ChildOfApp from './components/ChildOfApp.vue'
// import VueSlidder from './components/VueSlidder.vue';

export default {
    name: 'App',
    components: {
        // HelloWorld
        // ChildOfApp,
        // VueSlidder,
    },
    data() {
        return {
            userInfo: [{
                    id: 1,
                    name: 'vikas',
                    email: 'vikas@gmail.com'
                },
                {
                    id: 2,
                    name: 'ankit',
                    email: 'ankit@gmail.com'
                },
            ],
            title: "This is props in Vue.js Example.."
        }
    },
    methods:{
        setNewData(data){
            this.title = data;
        }
    },
    provide:{
        message: "Hello.. from provide dependency....",
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    /* margin-top: 60px; */
}

a {
    text-decoration: none;
    color: #bbf5f7;
    font-size: 20px;
    font-weight: 600;
    padding: 7px;
}

a:hover {
    color: white;
}
.navbar-custom{
    background: #07999d;
    color: white !important;
}
</style>
