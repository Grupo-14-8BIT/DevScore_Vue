<template>
    <Navpro />
    <div class="tits">
        <h1>SHARE YOUR PROJECT</h1>
    </div>
    <div class="rowsis">
    <div class="container-cadastrar">
        <div class="details">
            <h4 class="labl">Name</h4>
            <input type="text" placeholder="name of the project" class="inp">
            <h4 class="labl">github link</h4>
            <input type="text" placeholder="Link" class="inp">
        </div>
        <div class="description">
            <textarea type="text" row="15" cols="60" placeholder="DESCRIPTION!" class="desc"></textarea>
        </div>
        <div class="langtags">
            <div class="tit-LAN">
                <h2>LANGUAGES</h2>
            </div>
            <div class="">
                <input type="text" class="langsel">
            </div>
        </div>
    </div>
    <div class="sharing-btns">
        <router-link type="button" class="posts cl1" to="/projects">SHARE</router-link>
        <router-link type="button" class="posts cl2" to="/projects">GO BACK</router-link>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navpro from '../components/Navpro.vue';

export default defineComponent({
    name: 'Projetoformcadastrar',
    components: { Navpro }
});
</script>
<style>
.labl{
    color: aliceblue;
    display: flex;
    justify-content: flex-start;
}
.rowsis{
    background-color: rgb(40, 0, 74);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 40px;
    padding-bottom: 60px;
}
.tits{
    background-color: rgb(40, 0, 74);
    padding: 20px;    
    color: aliceblue;
    display: flex;
    justify-content: flex-start;
}
.container-cadastrar {
    background-color: rgb(21, 0, 39);
    border: none;
    border-radius: 20px;
    display: flex;
    height: 60vh;
    width: 85vw;
    justify-content: space-around;
    align-items: center;
}
.inp{
    height: 38px;
    width: 20vw;
}
.details{
    display: flex;
    flex-direction: column;
}
.desc{
    height: 44vh;
    width: 25vw;
}
.tit-LAN{
    color: aliceblue;
}
.langtags{
    background-color: rgb(43, 1, 83);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.langsel{
    height: 32vh;
    width: 30vw;
}
.sharing-btns{
    width: 50vw;
    padding: 20px;
    display: flex;
    justify-content: space-between;
}
.posts{
    box-shadow: 8px -8px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    color: aliceblue;
    height: 60px;
    text-decoration: none;
    width: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 14px;
}
.cl1{
    background-color: rgba(13, 129, 57, 0.795);
}
.cl2{
    background-color: rgba(131, 8, 8, 0.795);
}

</style>
