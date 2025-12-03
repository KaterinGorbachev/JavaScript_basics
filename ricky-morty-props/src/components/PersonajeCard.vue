<template>
  <div class="card">
    <img :src="image" :alt="name" class="card-img" />
    <p class="card-name">Nombre: {{ name }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})
</script>

<style lang="sass" scoped>
.card
  width: 200px
  padding: 10px
  border: 1px solid #ccc
  border-radius: 8px
  text-align: center

.card-img
  width: 100%
  border-radius: 8px

.card-name
  margin-top: 8px
  font-weight: bold
  color: #000
</style>
