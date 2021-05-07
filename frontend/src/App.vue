<template>
<div>
  <ul v-for="transaction in transactions" :key="transactions.card_UUID+transactions.created_at">
    <li>{{transaction.card_UUID}}</li>
  </ul>
</div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const transactions:object = ref([])


function fetchTransaction(){
  const link = `http://${location.hostname}:5000/transactions`

  fetch(link)
  .then(d => {
    d.json().then(d => {
      transactions.value = d
    }).catch(e => {
      console.log(e)
    })
  }).catch(e => {
    console.log(e)
  })
}

fetchTransaction()

</script>
