<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <form @submit.prevent="store">
      <h5 class="card-title"> Tambah Data Riwayat Pendidikan </h5>
  <div class="form-group">
    <label for="exampleInputEmail1">Jenjang Pendidikan</label>
    <input type="text" class="form-control" v-model="pendidikan.jenjang">
  </div>
  <div class="alert alert-danger" v-if="validation.jenjang">
    {{ validation.jenjang=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Nama Sekolah / Kampus</label>
    <input type="text" class="form-control" v-model="pendidikan.nama_skl">
  </div>
  <div class="alert alert-danger" v-if="validation.nama_skl">
    {{ validation.nama_skl=[0] }}
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Waktu Pelaksanaan</label>
    <input type="text" class="form-control" v-model="pendidikan.waktu">
  </div>
  <div class="alert alert-danger" v-if="validation.waktu">
    {{ validation.waktu=[0] }}
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

    const pendidikan = reactive({
      jenjang: '',
      waktu: '',
      nama_skl: ''
    })

    const validation = ref ([])

    const router = useRouter()

    function store(){
      let jenjang = pendidikan.jenjang
      let waktu = pendidikan.waktu
      let nama_skl = pendidikan.nama_skl

      axios.post('localhost:8000/api/pendidikan', {
        jenjang: jenjang,
        waktu: waktu,
        nama_skl: nama_skl,
      }).then(() => {
        router.push({
          name: 'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }

    return {
      pendidikan,
      validation,
      router,
      store
    }

  },
}
</script>