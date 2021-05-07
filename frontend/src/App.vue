<template>
<div>
  home
</div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const data:object = ref({})


function fetchTransaction(){
  const link = `http://${location.hostname}:5000/transactions`

  fetch(link)
  .then(d => {
    d.json().then(d => {
      data.value = d
    }).catch(e => {
      console.log(e)
    })
  }).catch(e => {
    console.log(e)
  })
}

fetchTransaction()


</script>
