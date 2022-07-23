import { createWebHashHistory, createRouter } from "vue-router"
import HomeComponent from '@/components/HomeComponent.vue';
import AboutUsComponent from '@/components/AboutUsComponent.vue';
import LoginComponent from '@/components/LoginComponent.vue';
import RegisterComponent from '@/components/RegisterComponent.vue';

const routes = [
    {
        path: '/',
        name: 'HomeComponent',
        component: HomeComponent
    },
    {
        path: '/aboutus',
        name: 'AboutUsComponent',
        component: AboutUsComponent,
    },
    {
        path: '/login',
        name: 'LoginComponent',
        component: LoginComponent,
    },
    {
        path: '/register',
        name: 'RegisterComponent',
        component: RegisterComponent,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;