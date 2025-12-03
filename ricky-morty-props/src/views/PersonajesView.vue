<template>

  <main>
    <h1>Personajes</h1>
    <section class="personajes" >
      <PersonajeCard
        v-for="personaje in personajes" :key="personaje.id"
        :image="personaje.image"
        :name="personaje.name"
      />
    </section>
    <router-link to="/">Back</router-link>


  </main>

</template>

<script setup>
import PersonajeCard from '@/components/PersonajeCard.vue'
import {personajes} from '@/data/data.js'

</script>

<style lang="sass" scoped>
main


  gap: 3rem
  min-height: 100vh
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  padding: 2rem
  background: linear-gradient(135deg, #3c3e44, #272b33)
  font-family: 'Comic Sans MS', 'Comic Neue', sans-serif
  color: #fff
  text-align: center

  h1
    font-size: 2.2rem
    text-align: center
    margin-bottom: 2rem



  .personajes
    display: flex
    gap: 1.5rem
    padding: 1rem
    background: #f7f7f7
    border-radius: 12px
    box-shadow: 0 2px 6px rgba(0,0,0,0.08)





  a
    display: inline-block
    padding: 0.8rem 1.5rem
    background: #ffcc00
    color: #000
    font-weight: bold
    border-radius: 10px
    text-decoration: none
    box-shadow: 0 5px 15px rgba(0,0,0,0.2)
    transition: transform 0.2s ease, box-shadow 0.2s ease

    &:hover
      transform: translateY(-3px)
      box-shadow: 0 8px 20px rgba(0,0,0,0.3)
      background: #ffd633



</style>
