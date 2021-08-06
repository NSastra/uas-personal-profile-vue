<template>
<div class="home">
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/Creatependidikan">Tambah Data Pendidikan</router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Jenjang</th>
      <th scope="col">Nama Sekolah / Kampus</th>
      <th scope="col">Waktu Pelaksanaan</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(pendidikan, index) in pendidikan" :key="index">
      <td>{{ pendidikan.jenjang }}</td>
      <td>{{ pendidikan.nama_skl }}</td>
      <td>{{ pendidikan.waktu }} </td>
      <td> 
        <button class="btn btn-warning" :to="{name: 'Editpendidikan', params:{id:pendidikan.id}}">Edit</button>
        <button @click.prevent="pendidikanDelete(pendidikan.id)" class="btn btn-danger"> Delete </button>
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
    let pendidikan = ref([])

    onMounted(() => 
    axios.get('localhost:8000/api/pendidikan')
    .then(response => {
      pendidikan.value = response.data.data
    })
    .catch(error => 
    console.log(error)))

    function pendidikanDelete(id){
      axios.delete(`localhost:8000/api/kontak/${id}`)
      .then(() =>{
        let x = this.pendidikan.map(pendidikan => pendidikan.id).indexOf(id);
        this.pendidikan.splice(x, 1)
      }).catch(error =>{
        console.log(error)
      })
    }

    return {
      pendidikan,
      pendidikanDelete
    }
  },
}
</script>
