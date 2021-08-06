<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <form @submit.prevent="store">
      <h5 class="card-title"> Tambah Data Pengalaman Kerja </h5>
  <div class="form-group">
    <label for="exampleInputEmail1">Nama Pekerjaan</label>
    <input type="text" class="form-control" v-model="resume.nama_krj">
  </div>
  <div class="alert alert-danger" v-if="validation.nama_krj">
    {{ validation.nama_krj=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Waktu Pelaksanaan</label>
    <input type="text" class="form-control" v-model="resume.waktu">
  </div>
  <div class="alert alert-danger" v-if="validation.waktu">
    {{ validation.waktu=[0] }}
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Detail</label>
    <input type="text" class="form-control" v-model="resume.detail">
  </div>
  <div class="alert alert-danger" v-if="validation.detail">
    {{ validation.detail=[0] }}
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    </div>
  </div>
  
</template>

<script>
import { reactive, ref } from 'vue'
import {useRouter } from 'vue-router'
import axios from 'axios'
export default {
  setup() {

    const resume = reactive({
      nama_krj: '',
      waktu: '',
      detail: '',
    })

    const validation = ref ([])

    const router = useRouter()

    function store(){
      let nama_krj = resume.nama_krj
      let waktu = resume.waktu
      let detail = resume.detail

      axios.post('localhost:8000/api/kerja', {
        nama_krj: nama_krj,
        waktu: waktu,
        detail: detail,
      }).then(() => {
        router.push({
          name: 'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }

    return {
      resume,
      validation,
      router,
      store
    }

  },
}
</script>