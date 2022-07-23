import axios from 'axios';

export default (await import('vue')).default.extend({
data() {
return {
selectedFile: null
};
},
methods: {
uploadFile(event) {
console.log(event);
// console.log(event.name);
this.selectedFile = event.name;
},
onUpload() {
let formData = new FormData();
formData.append('image', this.selectedFile);
axios.post('http://127.0.0.1:8000/api/fileupload', formData, {
headers: {
'Content-Type': 'multipart/form-data',
}
})
.then(response => console.log(response));
// axios
// .post("http://127.0.0.1:8000/api/fileupload", 
//   formData,
//       {
//       headers: {
//           'Content-Type': 'multipart/form-data'
//       }
//     }
// )
// .then(response => {
//   console.log(response);
//   // console.log(response);
// })
}
}
});
