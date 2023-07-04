<template>
    <div>
      <Navpro />
      <div class="row-3">
        <div class="bio">
          <div class="hbi">
            <h2>BIO:</h2>
          </div>
          <div class="para">
            <p>my name is Hasan Essaad I'm a student that can't get things done on time and lack motivation.</p>
            <p>I hate front-end, but I'm good at it.</p>
            <p>I love back-end, but I'm not good at it.</p>
          </div>
        </div>
      </div>
      <div class="row-4">
        <div class="clm-front-end">
          <div class="front-end-title">
            <h1>FRONT-END</h1>
          </div>
          <div class="front-end-lang"></div>
        </div>
        <div class="clm-back-end">
          <div class="back-end-title">
            <h1>BACK-END</h1>
          </div>
          <div class="back-end-lang"></div>
        </div>
      </div>
      <div class="row-5">
        <div class="label1">
          <h1>PARTICIPATED EVENTS</h1>
        </div>
        <div class="Events-images">
          <img class="imaging" src="../assets/Event1.png" alt="">
          <img class="imaging" src="../assets/Event2.png" alt="">
        </div>
        <div class="label1">
          <h1>DONE COURSES</h1>
        </div>
        <div class="Events-images">
          <img class="imaging" src="../assets/Event3.png" alt="">
          <img class="imaging" src="../assets/Event4.png" alt="">
          <img class="imaging" src="../assets/Event5.png" alt="">
        </div>
        <div class="label1">
          <h1>DONE CHALLENGES</h1>
        </div>
        <div class="Events-images">
          <img class="imaging" src="../assets/Event6.png" alt="">
          <img class="imaging" src="../assets/Event7.png" alt="">
        </div>
      </div>
  
      <div class="title-comments">
        <h1>{{ comentarios.length }} | </h1>
        <h1>PERSONAL FEEDBACK</h1>
      </div>
      <div class="commenting">
        <img src="../assets/profilepic.png" class="com-prof" alt="">
        <div class="input-group mb-3">
          <input class="form-control addcomment" v-model="texto" type="text" placeholder="comment">
          <button class="btn-post-comment" @click="enviarComentario">Post</button>
        </div>
      </div>
      <div class="the-comment">
        <img src="../assets/profilepic.png" class="com-prof1" alt="">
        <div class="com-container">
          <ul class="listinfo1">
            <li class="listinfo">
              <h6>Hasan Cayed Essaad | 2 weeks ago</h6>
            </li>
            <li class="listinfo">
              <h7>JOE_MCnum</h7>
            </li>
            <li class="listinfo">
              <h8>Software Engineer</h8>
            </li>
          </ul>
          <div class="quadcoment" v-for="(comentario, index) in comentarios" :key="index">
            <p>{{ comentario.texto }}</p>
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navpro from '../components/Navpro.vue';
  import { defineComponent } from 'vue';
  import { ComentarioClient } from '@/client/ComentarioClient';
  
  export default defineComponent({
    name: "AboutMe",
    components: { Navpro },
    data() {
      return {
        id_autor: '',
        texto: '',
        comentarios: []
      };
    },
    methods: {
      enviarComentario() {
        const comentario = {
          id_autor: this.id_autor,
          texto: this.texto,
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
            this.comentarios.push(comentario);
          } else {
            console.error('Erro ao enviar comentário.');
          }
        })
        .catch(error => {
          console.error('Erro de conexão:', error);
        });
      }
    }
  });
  </script>
  
  <style>
  .listinfo {
    display: flex;
    justify-content: flex-start;
  }
  
  .the-comment {
    padding: 30px;
    display: flex;
    background-color: rgb(40, 0, 74);
    color: aliceblue;
  }
  .response {
    display: flex;
    padding: 10px;
    justify-content: flex-start;
  }
  
  .title-comments {
    display: flex;
    padding-left: 35px;
    background-color: rgb(40, 0, 74);
    color: aliceblue;
  }
  
  .addcomment {
    border: none;
    width: 45vw;
    height: 50px;
    border-radius: 14px;
    color: aliceblue;
    background-color: blueviolet;
  }
  .addcomment::placeholder {
    color: aliceblue;
  }
  .btn-post-comment {
    height: 50px;
    width: 100px;
    color: aliceblue;
    background-color: rgb(75, 0, 141);
    box-shadow: 5px 5px 6px black;
    border: none;
    border-radius: 10px;
  }
  .commenting {
    padding-right: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(40, 0, 74);
  }
  
  .com-prof1 {
    margin-top: 40px;
    height: 70px;
    width: 70px;
  }
  
  .com-prof {
    margin-right: 50px;
    margin-left: 20px;
    height: 100px;
    width: 100px;
  }
  
  .row-3 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: rgb(40, 0, 74);
  }
  
  .bio {
    display: flex;
    background-color: rgb(17, 0, 50);
    border-radius: 15px;
    padding: 20px;
    color: aliceblue;
    border: 1px solid aliceblue;
  }
  
  .hbi {
    display: flex;
    align-items: center;
  }
  
  .para {
    padding: 8px;
  }
  
  .row-4 {
    background-color: rgb(40, 0, 74);
    color: aliceblue;
    display: flex;
    padding: 20px;
    justify-content: space-around;
  }
  
  .clm-front-end {
    background-color: rgb(17, 0, 50);
    width: 40vw;
    border-radius: 15px;
  }
  
  .front-end-title {
    height: 60px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(55, 62, 79, 1);
  }
  
  .front-end-lang {
    background-color: rgb(17, 0, 50);
    padding: 15px;
    height: 50px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  
  .clm-back-end {
    background-color: rgb(17, 0, 50);
    width: 40vw;
    border-radius: 15px;
  }
  
  .back-end-title {
    height: 60px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(55, 62, 79, 1);
  }
  
  .back-end-lang {
    background-color: rgb(17, 0, 50);
    padding: 15px;
    height: 50px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  
  .row-5 {
    background-color: rgb(40, 0, 74);
    color: aliceblue;
    padding: 30px;
  }
  
  .label1 {
    display: flex;
    justify-content: flex-start;
  }
  
  .Events-images {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .imaging {
    height: 150px;
    width: 300px;
  }
  .quadcoment{
    display: flex;
    justify-content: center;background-color: white;
    border-radius: 10px;
    margin-top: 5%;
  }
  p{
    display: flex;
    color: black;
    justify-content: center;
    justify-content: space-around;
  }
  </style>
  