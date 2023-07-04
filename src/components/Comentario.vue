<template>
    <div class="comentario2">
      <input class="form-control addid" v-model="id_autor" type="number" placeholder="ID do Autor">
      <input class="form-control addcomment" v-model="texto" type="text" placeholder="Texto do Comentário">
       <input class="form-control addcomment2" v-model="id_comentario_pai" type="text" placeholder="ID do Comentário Pai (opcional)">
      <button class="btn-post-comment" @click="enviarComentario">Enviar Comentário</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        id_autor: '',
        texto: '',
        id_comentario_pai: null
      };
    },
    methods: {
      enviarComentario() {
        const comentario = {
          id_autor: this.id_autor,
          texto: this.texto,
          id_comentario_pai: this.id_comentario_pai
        };
  
        fetch('http://localhost:8080/api/Comentario', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(comentario)
        })
        .then(response => {
          if (response.ok) {
            console.log('Comentário enviado!');
          } else {
            console.error('Erro ao enviar comentário.');
          }
        })
        .catch(error => {
          console.error('Erro de conexão:', error);
        });
      }
    }
  };
  </script>
  
  <style>
.btn-post-comment{
    height: 50px;
    width: 100px;
    color: aliceblue;
    background-color: rgb(75, 0, 141);
    box-shadow: 5px 5px 6px black;
    border: none;
    border-radius: 10px;
}
.comentario2{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.addcomment {
    display: flex;
    border: none;
    width: 45vw;
    height: 50px;
    border-radius: 14px;
    color: aliceblue;
    background-color: rgb(75, 0, 141);
}
.addcomment2 {
    display: flex;
    border: none;
    width: 35vw;
    height: 35px;
    border-radius: 14px;
    color: aliceblue;
    background-color: rgb(149, 65, 228);
}
.addid{
    display: flex;
    border: none;
    width: 60px;
    height: 50px;
    border-radius: 14px;
    color: aliceblue;
    background-color: green;
}
</style>