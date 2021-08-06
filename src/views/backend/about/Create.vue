<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <form @submit.prevent="store">
      <h5 class="card-title"> Tambah Data Biodata </h5>
  <div class="form-group">
    <label for="exampleInputEmail1">Nama</label>
    <input type="text" class="form-control" v-model="biodata.nama">
  </div>
  <div class="alert alert-danger" v-if="validation.nama">
    {{ validation.nama=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">TTL</label>
    <input type="text" class="form-control" v-model="biodata.ttl">
  </div>
  <div class="alert alert-danger" v-if="validation.ttl">
    {{ validation.ttl=[0] }}
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Alamat</label>
    <input type="text" class="form-control" v-model="biodata.alamat">
  </div>
  <div class="alert alert-danger" v-if="validation.alamat">
    {{ validation.alamat=[0] }}
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Okupasi</label>
    <input type="text" class="form-control" v-model="biodata.okupasi">
  </div>
  <div class="alert alert-danger" v-if="validation.okupasi">
    {{ validation.okupasi=[0] }}
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

    const biodata = reactive({
      nama: '',
      ttl: '',
      alamat: '',
      okupasi: ''
    })

    const validation = ref ([])

    const router = useRouter()

    function store(){
      let nama = biodata.nama
      let ttl = biodata.ttl
      let alamat = biodata.alamat
      let okupasi = biodata.okupasi

      axios.post('localhost:8000/api/biodata', {
        nama: nama,
        ttl: ttl,
        alamat: alamat,
        okupasi: okupasi,
      }).then(() => {
        router.push({
          name: 'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }

    return {
      biodata,
      validation,
      router,
      store
    }

  },
}
</script>