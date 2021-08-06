<template>
<div class="row">
  <div class="card text-center col-4 mt-3" v-for="(biodata, index) in biodata" :key="index">
      <div class="card">
            <div class="card-header">Foto</div>
                <div class="card-body">
                <h5 class="card-title"> {{ biodata.nama }} </h5>
                <p class="card-text">
                {{ biodata.ttl }}
                </p>
                <p class="card-text">
                {{ biodata.alamat }}
                </p>
                <p class="card-text">
                {{ biodata.okupasi }}
                </p>
                </div>
        </div>
    </div>
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

    return {
      biodata
    }
  },
}
</script>
