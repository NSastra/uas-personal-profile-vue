<template>
<div class="row">
  <div class="card text-center col-4 mt-3" v-for="(contact, index) in contact" :key="index">
      <div class="card">
            <div class="card-header">{{ contact.jenis_ct }}</div>
                <div class="card-body">
                <h5 class="card-title"> {{ contact.alamat_ct }} </h5>
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
        let contact = ref([])

        onMounted(() => 
        axios.get('localhost:8000/api/contact')
        .then(response => {
            contact.value = response.data.data
        })
        .catch(error => 
        console.log(error)))

        return {
            contact
        }
    },
}
</script>
