<template>
<div class="about">
    <h1 class="text-center">File Uploading</h1>
    <hr>
    <v-row>
        <v-col cols="3" style="margin: 0px auto;">
            <v-file-input label="File input" id="image" single-line @change="uploadFile" enctype="multipart/form-data"></v-file-input>
            <!-- <h1>Selected File : {{selectedFile}}</h1> -->
            <v-btn dark class="info" @click="onUpload">Upload</v-btn>

        </v-col>
    </v-row>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            selectedFile: null

        }
    },
    methods: {
        uploadFile(event) {
            this.selectedFile = event
        },
        onUpload() {
            const formData = new FormData();
            formData.append('file', this.selectedFile);
            axios.post('http://127.0.0.1:8000/api/fileupload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(response => {
                    if (response.data.status == 'success') {
                        this.$swal('File Uploaded Successfully..', '', 'success');
                    }
                    if (response.data.status == 'failed') {
                        this.$swal('Plz select a file..', '', 'warning');
                    }
                })
        }
    }
}
</script>
