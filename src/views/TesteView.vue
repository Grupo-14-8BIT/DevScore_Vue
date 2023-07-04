<template>
    <div class="teste-view">
      <h1>Minha Aplicação</h1>
      <Comentario></Comentario>
    </div>
  </template>
  
  <script>
  import Comentario from '../components/Comentario.vue';
  
  export default {
    components: {
      Comentario
    }
  };
  </script>
  
  <style scoped>
  .teste-view {
    text-align: center;
  }
  </style>
  