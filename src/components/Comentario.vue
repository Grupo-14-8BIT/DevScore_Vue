<template>
    <div class="comentario">
      <h2>Comentários</h2>
      <ul>
        <li v-for="comment in comments" :key="comment.id" class="comentario-item">
          <div class="comentario-content">
            <p>{{ comment.text }}</p>
            <div class="comentario-actions">
              <button @click="likeComment(comment.id)" :class="{ liked: comment.liked }">Like</button>
              <button @click="dislikeComment(comment.id)" :class="{ disliked: comment.disliked }">Dislike</button>
              <button @click="toggleCommentForm(comment.id)">Responder</button>
            </div>
            <div v-if="comment.showReplyForm" class="comentario-reply-form">
              <textarea v-model="comment.reply" rows="2" cols="40" placeholder="Escreva sua resposta"></textarea>
              <button @click="submitReply(comment.id)">Enviar</button>
            </div>
          </div>
          <ul v-if="comment.replies.length" class="comentario-replies">
            <li v-for="reply in comment.replies" :key="reply.id" class="comentario-reply">
              <p>{{ reply.text }}</p>
            </li>
          </ul>
        </li>
      </ul>
      <form @submit.prevent="adicionarComentario" class="comentario-form">
        <textarea v-model="novoComentario" rows="4" cols="50" class="comentario-input" placeholder="Escreva um comentário"></textarea>
        <button type="submit" class="comentario-btn">Adicionar Comentário</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { ComentarioClient } from '@/client/ComentarioClient.ts';
  
  export default {
  data() {
    return {
      comments: [],
      novoComentario: ''
    };
  },
  methods: {
    adicionarComentario() {
      const novoComentario = {
        id_comentario: null,
        id_post: 1234,
        id_autor: 456,
        texto: this.novoComentario,
        data: new Date().toISOString(),
        like: []
      };

      ComentarioClient.cadastrar(novoComentario)

      

    //   axios.post('http://localhost:8080/api/Comentario', novoComentario)
    //     .then(response => {
    //       console.log("Novo comentário salvo:", response.comentario);
    //       this.comments.push(response.comentario);
    //       this.novoComentario = '';
    //     })
    //     .catch(error => {
    //       console.error("Erro ao salvar o comentário:", error);
    //     });
        
    },

    likeComment(commentId) {
    const comentarioClient = new ComentarioClient();
    const comment = this.comments.find(c => c.id === commentId);

    if (comment) {
      comentarioClient.like(commentId)
        .then(() => {
          comment.liked = true;
        })
        .catch(error => {
          console.error("Erro ao dar like no comentário:", error);
        });
    }
  },

  dislikeComment(commentId) {
    const comentarioClient = new ComentarioClient();
    const comment = this.comments.find(c => c.id === commentId);

    if (comment) {
      comentarioClient.dislike(commentId)
        .then(() => {
          comment.disliked = true;
        })
        .catch(error => {
          console.error("Erro ao dar dislike no comentário:", error);
        });
    }
  },

  toggleCommentForm(commentId) {
    const comment = this.comments.find(c => c.id === commentId);

    if (comment) {
      comment.showReplyForm = !comment.showReplyForm;
    }
  },

  submitReply(commentId) {
    const comentarioClient = new ComentarioClient();
    const comment = this.comments.find(c => c.id === commentId);

    if (comment) {
      const reply = {
        id_comentario: null,
        id_post: comment.id_post,
        id_autor: comment.id_autor,
        texto: comment.reply,
        data: new Date().toISOString(),
        like: []
      };

      comentarioClient.cadastrar(reply)
        .then(replySalvo => {
          console.log("Nova resposta salva:", replySalvo);
          comment.replies.push(replySalvo);
          comment.showReplyForm = false;
          comment.reply = '';
        })
        .catch(error => {
          console.error("Erro ao enviar a resposta:", error);
        });
    }
  }
}
  }

</script>
  
  <style scoped>
  .comentario {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .comentario h2 {
    font-size: 1.5rem;
  }
  
  .comentario-item {
    margin-bottom: 10px;
    padding: 5px;
    background-color: #f0f0f0;
  }
  
  .comentario-content {
    display: flex;
    flex-direction: column;
  }
  
  .comentario-actions {
    margin-top: 5px;
  }
  
  .comentario-actions button {
    margin-right: 5px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  .comentario-actions button.liked {
    background-color: #28a745;
  }
  
  .comentario-actions button.disliked {
    background-color: #dc3545;
  }
  
  .comentario-reply-form {
    margin-top: 5px;
  }
  
  .comentario-reply-form textarea {
    margin-bottom: 5px;
    width: 100%;
    padding: 5px;
  }
  
  .comentario-reply-form button {
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  .comentario-replies {
    margin-top: 10px;
    padding-left: 20px;
  }
  
  .comentario-reply {
    margin-bottom: 5px;
    padding: 5px;
    background-color: #f5f5f5;
  }
  
  .comentario-input {
    width: 100%;
    padding: 5px;
  }
  
  .comentario-btn {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  .comentario-btn:hover {
    background-color: #0056b3;
  }
  </style>
  