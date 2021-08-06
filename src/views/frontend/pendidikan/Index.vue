<template>
<div class="row">
  <div class="card text-center col-4 mt-3" v-for="(pendidikan, index) in pendidikan" :key="index">
      <div class="card">
            <div class="card-header">{{ pendidikan.jenjang }}</div>
                <div class="card-body">
                <h5 class="card-title"> {{ pendidikan.nama_skl }} </h5>
                <p class="card-text">
                {{ pendidikan.waktu }}
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
        let pendidikan = ref([])

        onMounted(() => 
        axios.get('localhost:8000/api/pendidikan')
        .then(response => {
            pendidikan.value = response.data.data
        })
        .catch(error => 
        console.log(error)))

        return {
            pendidikan
        }
    },
}
</script>
