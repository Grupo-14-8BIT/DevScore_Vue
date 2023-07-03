<template>
  <div class="contain">
   
    <div class="form-container">
      <h1>username!</h1>
      <div class="profile-section">
        <div class="profile-img">
          <img src="../assets/profilepic.png" alt="Profile Image">
        </div>
        <div class="profile-desc">
          <textarea class="form-control" placeholder="Profile Description" rows="5"></textarea>
        </div>
      </div>
      <div class="input-link">
        <div class="link-container">
          <label for="github-link"></label>
          <input type="text" id="github-link" placeholder="Enter your GitHub link" v-model="GITHUB" />
          <button @click="submit">Submit</button>
        </div>
        <div class="link-container">
          <label for="linkedin-link"></label>
          <input type="text" id="linkedin-link" placeholder="Enter your LinkedIn link" v-model="LINKEDIN" />
          <button @click="submit">Submit</button>
        </div>
        <div class="link-container">
          <label for="discord-link"></label>
          <input type="text" id="discord-link" placeholder="Enter your Discord link" v-model="DISCORD" />
          <button @click="submit">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.contain {
  background: linear-gradient(to bottom, rgb(0, 0, 0), rgb(0, 0, 0), rgb(23, 0, 45), rgb(29, 0, 57));
  height: 100vh;
  justify-content: center;
  display: flex;
}


.form-container {
  background-color: rgb(40, 0, 74);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
  height: 30vw;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 100px;
}

h1 {
  color: white;
}

.profile-section {
  display: flex;
  align-items: center;
  margin-right: 20px;
  max-width: 100%;
  justify-content: center;
}

.profile-img {
  display: flex;
  width: 300px;
  margin-right: 100px;
  /* border: 2px solid red; */

}

.profile-desc textarea {
  display: flex;
  width: 100%;
  max-width: 800px; /* Aumente a largura máxima conforme necessário */
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  width: 400px;
  
}
.input-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

}

.link-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}


input{
  height: 20px;
  border-radius: 10px;
  background-color: white ;
  color: green;
}
button{
  font-family: 'Press Start 2P', cursive;
  font-size: 13px;
  color: green;
  background-color: rgb(40, 0, 74)  ;
  animation: neon-glow 4.5s linear infinite;
}

</style>

<script lang="ts">
import { Plataforma } from '@/model/PlataformaModel'

export enum plataforma {
  GITHUB = 'GITHUB',
  LINKEDIN = 'LINKEDIN',
  DISCORD = 'DISCORD',
}

export default {
  data() {
    return {
      GITHUB: '',
      LINKEDIN: '',
      DISCORD: '',
      selectedPlatform: '',
      plataformaOptions: ['GITHUB', 'LINKEDIN', 'DISCORD'],
    };
  },
  methods: {
    submit() {
      console.log('GitHub Link:', this.GITHUB);
      console.log('LinkedIn Link:', this.LINKEDIN);
      console.log('Discord Link:', this.DISCORD);
    },
  },
};
</script>
