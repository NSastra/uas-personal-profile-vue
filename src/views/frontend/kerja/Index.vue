<template>
<div class="row">
  <div class="card text-center col-4 mt-3" v-for="(kerja, index) in kerja" :key="index">
      <div class="card">
            <div class="card-header">{{ kerja.waktu }}</div>
                <div class="card-body">
                <h5 class="card-title"> {{ kerja.nama_krj }} </h5>
                <p class="card-text">
                {{ kerja.detail }}
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
        let kerja = ref([])

        onMounted(() =>
        axios.get('localhost:8000/api/kerja')
        .then(response => {
            kerja.value = response.data.data
        })
        .catch(error => 
        console.log(error)))

        return {
            kerja
        }
    },
}
</script>
