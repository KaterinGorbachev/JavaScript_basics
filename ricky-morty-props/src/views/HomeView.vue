<template>
  <main>
    <h1>RICK AND MORTY</h1>
    <p></p>
    <router-link to="/personajes">Ver personajes</router-link>

  </main>

</template>

<script setup>

</script>

<style lang="sass" scoped>
main
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
    font-size: 3rem
    font-weight: 900
    margin-bottom: 1rem
    text-shadow: 2px 2px 5px rgba(0,0,0,0.3)


  p
    font-size: 1.2rem
    margin-bottom: 2rem
    max-width: 600px
    line-height: 1.5
    color: rgba(255, 255, 255, 0.9)


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
