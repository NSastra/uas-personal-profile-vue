<template>
<div class="home">
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/Createkerja">Tambah Data Pengalaman Kerja</router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Nama Pekerjaan</th>
      <th scope="col">Waktu Pelaksanaan</th>
      <th scope="col">Detail</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(kerja, index) in kerja" :key="index">
      <td>{{ kerja.nama_krj }}</td>
      <td>{{ kerja.waktu }}</td>
      <td>{{ kerja.detail }} </td>
      <td> 
        <button class="btn btn-warning" :to="{name: 'Editkerja', params:{id:resume.id}}">Edit</button>
        <button @click.prevent="resumeDelete(resume.id)" class="btn btn-danger"> Delete </button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'
export default {
  setup() {
    let resume = ref([])

    onMounted(() => 
    axios.get('localhost:8000/api/kerja')
    .then(response => {
      resume.value = response.data.data
    })
    .catch(error => 
    console.log(error)))

    function resumeDelete(id){
      axios.delete(`localhost:8000/api/kerja/${id}`)
      .then(() =>{
        let x = this.resume.map(resume => resume.id).indexOf(id);
        this.resume.splice(x, 1)
      }).catch(error =>{
        console.log(error)
      })
    }

    return {
      resume,
      resumeDelete
    }
  },
}
</script>
