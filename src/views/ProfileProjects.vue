<template>
    <Navpro />
    <div class="title-proj"><h1>PROJECTS</h1></div>
    <div class="row-alfa">
        <button class="popo"><router-link type="button" class="lol" to="/projetoformcadastrar">Cadastrar</router-link></button>
    </div>
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
.title-proj{
    background-color: rgb(40, 0, 74);
    display: flex;
    justify-content: flex-start;
    color: aliceblue;
    padding: 20px;
};
.popo {
  /* Customize the button appearance */
  display: inline-block;
  padding: 10px 20px;
  background-color: #337ab7;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
.lol{
    text-decoration: none;
}
.popo:hover {
  /* Add hover effect */
  background-color: #23527c;
}

.popo:active {
  /* Add active/pressed effect */
  background-color: #1e466a;
}
.row-alfa{
    background-color: rgb(40, 0, 74);
    padding: 50px;
    border: 1px solid red;
}
</style>