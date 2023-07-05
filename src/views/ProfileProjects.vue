<template>
  <Navpro />

  <body class="habibi">
    <div class="title-proj">
      <h1>PROJECTS</h1>
    </div>
    <div class="projects-container">
      <table class="tbs">
      <thead>
        <tr class="titlo">
          <th scope="col">#</th>
          <th scope="col">name</th>
          <th scope="col">language</th>
          <th scope="col">link</th>
          <th scope="col">description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in projetolist" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <th>{{ item.nome }}</th>
          <th>{{ item.linguagem }}</th>
          <th>{{ item.link }}</th>
          <th>{{ item.descricao }}</th>
        </tr>
      </tbody>
    </table>
      </div>
    <div class="row-alfa">
      <router-link type="button" class="popo" to="/projetoformcadastrar">CADASTRAR</router-link>
    </div>
  </body>
</template>

<script lang="ts">
import { Projeto } from '@/model/ProjetoModel';
import ProjetoClient from '@/client/ProjetoClient';
import Navpro from '../components/Navpro.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: "Projects",
  components: { Navpro },
  data() {
      return {
        projetolist: new Array<Projeto>()
      }
    },
    mounted() {
      this.listAll();
    },
    methods: {
      listAll() {
        ProjetoClient.listAll()
          .then(sucess => {
            this.projetolist = sucess
            console.log(sucess);
          })
          .catch(error => {
            console.log(error);
        });
      }
    }
})
</script>
<style>
.title-proj {
  background-color: rgb(40, 0, 74);
  display: flex;
  justify-content: flex-start;
  color: aliceblue;
  padding: 20px;
}
.titlo{
  color: aliceblue;
  font-weight: bold;
}
.habibi{
  background-color: rgb(40, 0, 74);
  height: 100%;
}
.popo {
  text-decoration: none;
  height: 60px;
  width: 10vw;
  color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: rgba(0, 162, 81, 0.84);
}

.row-alfa {
  background-color: rgb(40, 0, 74);
  padding: 50px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.projects-container{
  border: 1px solid red;
}

.tbs{
  width: 100vw;
}
</style>