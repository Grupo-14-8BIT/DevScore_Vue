<template>
  <div class="container">
    <h1>Registration</h1>
    <form @submit.prevent="onClickCadastrar">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" v-model="Desenvolvedor.email" required>
      </div>
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" v-model="Desenvolvedor.nome" required>
      </div>
      <div class="form-group">
        <label for="nick">Nick</label>
        <input type="text" class="form-control" v-model="Desenvolvedor.nick" required>
      </div>
      <div class="form-group">
        <label for="senha">Senha</label>
        <input type="password" class="form-control" v-model="Desenvolvedor.senha" required>
      </div>

      <button  type="submit" class="btn btn-primary">Register</button>
    </form>
    <div v-if="mensagem.ativo" class="alert mt-3" :class="mensagem.css">{{ mensagem.mensagem }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Desenvolvedor } from '@/model/DesenvolvedorModel';
import  DesenvolvedorClient  from '@/client/DesenvolvedorClient';

export default defineComponent({
  data() {
    return {
      Desenvolvedor: new Desenvolvedor(),
      email: '',
      senha: '',
      nick: '',
      nome: '',
      mensagem: {
        ativo: false as boolean,
        titulo: '' as string,
        mensagem: '' as string,
        css: '' as string,
      },
    };
  },
  methods: {
    onClickCadastrar() {
      DesenvolvedorClient.cadastrar(this.Desenvolvedor)
        .then((success) => {
          const desenvolvedorJSON = JSON.stringify(this.Desenvolvedor);
          document.cookie += `desenvolvedor=${desenvolvedorJSON};`;
          this.mensagem.mensagem = success;
          this.mensagem.titulo = 'Parabens. ';
          this.mensagem.css = 'alert alert-success alert-dismissible fade show';
          localStorage.setItem('sectionData', JSON.stringify(this.Desenvolvedor));
          window.location.href = '/success-page'; // Replace with the desired URL


        })
        .catch((error) => {
          const mensagemError = error.data;
          this.mensagem.ativo = true;
          this.mensagem.mensagem = mensagemError;
          this.mensagem.titulo = 'Error. ';
          this.mensagem.css = 'alert alert-danger alert-dismissible fade show';
        });
    },
  },
});
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
}

.form-group {
  margin-bottom: 20px;
}
</style>
