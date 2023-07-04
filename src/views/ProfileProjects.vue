<template>
  <Navpro />

  <body class="habibi">
    <div class="title-proj">
      <h1>PROJECTS</h1>
    </div>
    
      <div v-for="item in projetolist" :key="item.id" class="contains-project">
        <div class="info-proj">
          <div class="name">
            <h1>{{item.nome}}</h1>
          </div>
          <div class="links">
            <a href={{ item.link }}>CHECKOUT THE {{ item.nome }} GITHUB LINK</a>
          </div>
          <div class="lang">{{ item.linguagens }}</div>
        </div>
        <div class="cols-2">
          <div class="contains-desc">
            <p>{{ item.descricao }}</p>
          </div>
        </div>
      </div>

    <div class="row-alfa">
      <router-link type="button" class="popo" to="/projetoformcadastrar">CADASTRAR</router-link>
    </div>
  </body>
</template>

<script lang="ts">
import Navpro from '../components/Navpro.vue';
import ProjetoClient from '@/client/ProjetoClient';
import { Projeto } from '@/model/ProjetoModel';
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
      this.findAll();
    },
    methods: {
      findAll() {
        ProjetoClient.findAll()
          .then(sucess => {
            this.projetolist = sucess
            console.log(sucess);
          })
          .catch(error => {
            console.log(error);
        });
      }
    }
});
</script>
<style>
.title-proj {
  background-color: rgb(40, 0, 74);
  display: flex;
  justify-content: flex-start;
  color: aliceblue;
  padding: 20px;
}

.habibi {
  background-color: rgb(40, 0, 74);
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
.contains-project{
  border: 1px solid red;
  height: 20vh;
  display: flex;
}
.info-proj{
  border: 1px solid aliceblue;
}
</style>