<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <form @submit.prevent="update">
      <h5 class="card-title"> Edit Pengalaman Kerja </h5>
  <div class="form-group">
    <label for="exampleInputEmail1">Nama Pekerjaan</label>
    <input type="text" class="form-control" v-model="kerja.nama_krj">
  </div>
  <div class="alert alert-danger" v-if="validation.nama_krj">
    {{ validation.nama_krj=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Waktu Pelaksanaan</label>
    <input type="text" class="form-control" v-model="kerja.waktu">
  </div>
  <div class="alert alert-danger" v-if="validation.waktu">
    {{ validation.waktu=[0] }}
  </div>

   <div class="form-group">
    <label for="exampleInputPassword1">Detail</label>
    <input type="text" class="form-control" v-model="kerja.detail">
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
import { onMounted, reactive, ref } from 'vue'
import {useRouter } from 'vue-router'
import axios from 'axios'
import {useRoute} from 'vue-router'
export default {
  setup() {

    const resume = reactive({
      nama_krj: '',
      waktu: '',
      detail: '',
    })

    const validation = ref ([])

    const router = useRouter()

    const route = useRoute()

    onMounted(() =>{
      axios.get(`localhost:8000/api/kerja/${route.params.id}`)
      .then(response => {
        resume.nama_krj = response.data.data.nama_krj
        resume.waktu = response.data.data.waktu
        resume.detail = response.data.data.detail
      }).catch(error =>{
        console.log(error)
      })
    })

    function update(){
      let nama_krj = resume.nama_krj
      let waktu = resume.waktu
      let detail = resume.detail

      axios.put(`localhost:8000/api/kerja/${route.params.id}`, {
        nama_krj: nama_krj,
        waktu: waktu,
        detail: detail
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
      update,
      route
    }

  },
}
</script>