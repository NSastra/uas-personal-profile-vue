<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <form @submit.prevent="update">
      <h5 class="card-title"> Edit Kontak </h5>
  <div class="form-group">
    <label for="exampleInputEmail1">Jenis Kontak</label>
    <input type="text" class="form-control" v-model="contact.jenis_ct">
  </div>
  <div class="alert alert-danger" v-if="validation.jenis_ct">
    {{ validation.jenis_ct=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Alamat Kontak</label>
    <input type="text" class="form-control" v-model="contact.alamat_ct">
  </div>
  <div class="alert alert-danger" v-if="validation.alamat_ct">
    {{ validation.alamat_ct=[0] }}
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

    const contact = reactive({
      jenis_ct: '',
      alamat_ct: '',
    })

    const validation = ref ([])

    const router = useRouter()

    const route = useRoute()

    onMounted(() =>{
      axios.get(`localhost:8000/api/kontak/${route.params.id}`)
      .then(response => {
        contact.jenis_ct = response.data.data.jenis_ct
        contact.alamat_ct = response.data.data.alamat_ct
      }).catch(error =>{
        console.log(error)
      })
    })

    function update(){
      let jenis_ct = contact.jenis_ct
      let alamat_ct = contact.alamat_ct

      axios.put(`localhost:8000/api/kontak/${route.params.id}`, {
        jenis_ct: jenis_ct,
        alamat_ct: alamat_ct,
      }).then(() => {
        router.push({
          name: 'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }

    return {
      contact,
      validation,
      router,
      update,
      route
    }

  },
}
</script>