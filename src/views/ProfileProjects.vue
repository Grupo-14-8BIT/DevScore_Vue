<template>
  <Navpro />

  <body class="habibi">
    <div class="title-proj">
      <h1>PROJECTS</h1>
    </div>
    <div class="projects-container">
      <div></div>
    </div>
    <div class="row-alfa">
      <router-link type="button" class="popo" to="/projetoformcadastrar">CADASTRAR</router-link>
    </div>
  </body>
</template>

<script lang="ts">
import Navpro from '../components/Navpro.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: "Projects",
  components: { Navpro },
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
}</style>