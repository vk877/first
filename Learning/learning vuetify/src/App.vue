<template>
<v-app>
  <!-- <first-comp /> -->
  <!-- <vuetify-api /> -->
  <nav-bar />
    <v-main>
        <router-view />
    </v-main>
    <footer-nav />
</v-app>
</template>

<script>
// import FirstComponent from './components/FirstComponent.vue';
// import VuetifyApiComponent from './components/VuetifyApiComponent.vue';
import NavBar from './components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue';



export default {
    name: 'App',
    components:{
      // "first-comp": FirstComponent,
      // "vuetify-api": VuetifyApiComponent,
      "nav-bar": NavBar,
      "footer-nav": FooterComponent,
    },  
    data: () => ({
        //
    }),
};
</script>
