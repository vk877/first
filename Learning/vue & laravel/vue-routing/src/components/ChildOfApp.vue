<template>
<div>
    <h1>Hello from Child of App...</h1>
    Prop Example : {{title}}
    <!-- Object : {{userData}} -->
    <ul v-for="user in userData" :key="user.id">
        <li>{{user.id}}</li>
        <li>{{user.name}}</li>
        <li>{{user.email}}</li>
    </ul>
    <br>
    <button @click="sendData()" type="button" class="btn-sm btn btn-primary">Send Data to Parent</button>
</div>
</template>

<script>
export default {
    name: "ChildOfApp",

    props: {
        title: String,
        userData: Object,
    },

    methods: {
        sendData() {
            this.$emit('setNewData', 'Vikas');
            console.log("Working..");
        }
    }

}
</script>
