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
        <button class="btn btn-warning" :to="{name: 'Editkerja', params:{id:kerja.id}}">Edit</button>
        <button @click.prevent="kerjaDelete(kerja.id)" class="btn btn-danger"> Delete </button>
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
    let kerja = ref([])

    onMounted(() => 
    axios.get('localhost:8000/api/kerja')
    .then(response => {
      kerja.value = response.data.data
    })
    .catch(error => 
    console.log(error)))

    function kerjaDelete(id){
      axios.delete(`localhost:8000/api/kerja/${id}`)
      .then(() =>{
        let x = this.kerja.map(kerja => kerja.id).indexOf(id);
        this.kerja.splice(x, 1)
      }).catch(error =>{
        console.log(error)
      })
    }

    return {
      kerja,
      kerjaDelete
    }
  },
}
</script>
