<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <form @submit.prevent="update">
      <h5 class="card-title"> Edit Biodata </h5>
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
import { onMounted, reactive, ref } from 'vue'
import {useRouter } from 'vue-router'
import axios from 'axios'
import {useRoute} from 'vue-router'
export default {
  setup() {

    const about = reactive({
      nama: '',
      ttl: '',
      alamat: '',
      okupasi: '',
    })

    const validation = ref ([])

    const router = useRouter()

    const route = useRoute()

    onMounted(() =>{
      axios.get(`localhost:8000/api/about/${route.params.id}`)
      .then(response => {
        about.nama = response.data.data.nama
        about.ttl = response.data.data.ttl
        about.alamat = response.data.data.alamat
        about.okupasi = response.data.data.okupasi
      }).catch(error =>{
        console.log(error)
      })
    })

    function update(){
      let nama = about.nama
      let ttl = about.ttl
      let alamat = about.alamat
      let okupasi = about.okupasi

      axios.put(`localhost:8000/api/about/${route.params.id}`, {
        nama: nama,
        ttl: ttl,
        alamat: alamat,
        okupasi: okupasi
      }).then(() => {
        router.push({
          name: 'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }

    return {
      about,
      validation,
      router,
      update,
      route
    }

  },
}
</script>