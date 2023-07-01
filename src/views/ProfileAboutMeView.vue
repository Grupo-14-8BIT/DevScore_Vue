<template>
    <Navpro />
    <div class="row-3">
        <div class="bio">
            <div class="hbi">
                <h2>BIO:</h2>
            </div>
            <div class="para">
                <p>my name is Hasan Essaad im a student that cant get shit done on time and lack motivation.</p>
                <p>> I hate front-end ,but im good at it.</p>
                <p>> I love back-end ,but im shit at it.</p>
            </div>
        </div>
    </div>
    <div class="row-4">
        <div class="clm-front-end">
            <div class="front-end-title">
                <h1>FRONT-END</h1>
            </div>
            <div class="front-end-lang">

            </div>
        </div>
        <div class="clm-back-end">
            <div class="back-end-title">
                <h1>BACK-END</h1>
            </div>
            <div class="back-end-lang">

            </div>
        </div>
    </div>
    <div class="row-5">
        <div class="label1">
            <h1>PARTICIPATED EVENTS</h1>
        </div>
        <div class="Events-images">
            <img class="imaging" src="" alt="">
            <img class="imaging" src="" alt="">
        </div>
        <div class="label1">
            <h1>DONE COURSES</h1>
        </div>
        <div class="Events-images">
            <img class="imaging" src="" alt="">
            <img class="imaging" src="" alt="">
            <img class="imaging" src="" alt="">
        </div>
        <div class="label1">
            <h1>DONE CHALLENGES</h1>
        </div>
        <div class="Events-images">
            <img class="imaging" src="" alt="">
            <img class="imaging" src="" alt="">
        </div>
    </div>

    <div class="comments"></div>
</template>
    
<script lang="ts">
import Navpro from '../components/Navpro.vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: "AboutMe",
    components: { Navpro }
})
</script>

<style>
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
    border: 1px solid red;
    display: flex;
    justify-content: flex-start;
}

.Events-images{
    border: 1px solid aliceblue;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.imaging{
    height: 50px;
    width: 300px;
}

</style>

  