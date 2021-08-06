<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <form @submit.prevent="update">
      <h5 class="card-title"> Edit Riwayat Pendidikan </h5>
  <div class="form-group">
    <label for="exampleInputEmail1">Jenjang</label>
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
import { onMounted, reactive, ref } from 'vue'
import {useRouter } from 'vue-router'
import axios from 'axios'
import {useRoute} from 'vue-router'
export default {
  setup() {

    const pendidikan = reactive({
      jenjang: '',
      nama_skl: '',
      waktu: '',
    })

    const validation = ref ([])

    const router = useRouter()

    const route = useRoute()

    onMounted(() =>{
      axios.get(`localhost:8000/api/pendidikan/${route.params.id}`)
      .then(response => {
        pendidikan.jenjang = response.data.data.jenjang
        pendidikan.nama_skl = response.data.data.nama_skl
        pendidikan.waktu = response.data.data.waktu
      }).catch(error =>{
        console.log(error)
      })
    })

    function update(){
      let jenjang = pendidikan.jenjang
      let nama_skl = pendidikan.nama_skl
      let waktu = pendidikan.waktu

      axios.put(`localhost:8000/api/pendidikan/${route.params.id}`, {
        jenjang: jenjang,
        nama_skl: nama_skl,
        waktu: waktu
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
      update,
      route
    }

  },
}
</script>