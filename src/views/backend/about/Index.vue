<template>
<div class="home">
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/Createbiodata">Tambah Data Biodata</router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Nama</th>
      <th scope="col">TTL</th>
      <th scope="col">Alamat</th>
      <th scope="col">Okupasi</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(biodata, index) in biodata" :key="index">
      <td>{{ biodata.nama }}</td>
      <td>{{ biodata.ttl }}</td>
      <td>{{ biodata.alamat }}</td>
      <td>{{ biodata.okupasi }} </td>
      <td> 
        <button class="btn btn-warning" :to="{name: 'Editabout', params:{id:biodata.id}}">Edit</button>
        <button @click.prevent="biodataDelete(biodata.id)" class="btn btn-danger"> Delete </button>
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
    let biodata = ref([])

    onMounted(() => 
    axios.get('localhost:8000/api/biodata')
    .then(response => {
      biodata.value = response.data.data
    })
    .catch(error => 
    console.log(error)))

    function biodataDelete(id){
      axios.delete(`localhost:8000/api/biodata/${id}`)
      .then(() =>{
        let x = this.biodata.map(biodata => biodata.id).indexOf(id);
        this.biodata.splice(x, 1)
      }).catch(error =>{
        console.log(error)
      })
    }

    return {
      biodata,
      biodataDelete
    }},
};
</script>