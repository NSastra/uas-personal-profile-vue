<template>
<div class="home">
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/Createkontak">Tambah Data Kontak</router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Jenis Kontak</th>
      <th scope="col">Alamat Kontak</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(contact, index) in contact" :key="index">
      <td>{{ contact.jenis_ct }}</td>
      <td>{{ contact.alamat_ct }} </td>
      <td> 
        <button class="btn btn-warning" :to="{name: 'Editkontak', params:{id:contact.id}}">Edit</button>
        <button @click.prevent="contactDelete(contact.id)" class="btn btn-danger"> Delete </button>
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
    let contact = ref([])

    onMounted(() => 
    axios.get('localhost:8000/api/kontak')
    .then(response => {
      contact.value = response.data.data
    })
    .catch(error => 
    console.log(error)))

    function contactDelete(id){
      axios.delete(`localhost:8000/api/kontak/${id}`)
      .then(() =>{
        let x = this.contact.map(contact => contact.id).indexOf(id);
        this.contact.splice(x, 1)
      }).catch(error =>{
        console.log(error)
      })
    }

    return {
      contact,
      contactDelete
    }
  },
}
</script>
