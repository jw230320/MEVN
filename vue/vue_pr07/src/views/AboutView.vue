<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script setup>
import * as tf from '@tensorflow/tfjs'
console.log(tf)
/* index.js */
this.$mongoose.connect('mongodb://localhost:27017/test3')
const db = this.$mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function callback() {
  console.log('mongo db connection OK.')
})
</script>
