<template>
  <div class="contain">
    <div class="logo">
      <img src="../assets/logo.png" alt="logo">
    </div>
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
          <input type="text" id="github-link" placeholder="GITHUB" v-model="GITHUB" />
          <button @click="submit">Submit</button>
        </div>
        <div class="link-container">
          <label for="linkedin-link"></label>
          <input type="text" id="linkedin-link" placeholder="LINKEDIN" v-model="LINKEDIN" />
          <button @click="submit">Submit</button>
        </div>
        <div class="link-container">
          <label for="discord-link"></label>
          <input type="text" id="discord-link" placeholder="DISCORD" v-model="DISCORD" />
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
}

.form-container {
  background-color: rgb(40, 0, 74);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  width: 100%;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

h1 {
  color: white;
}

.profile-section {
  display: flex;
  align-items: center;
  margin-right: 20px;
  max-width: 100%;
}

.profile-img {
  width: 150px;
  margin-right: 100px;
}

.profile-desc textarea {
  display: flex;
  width: 100%;
  max-width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

.input-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
}

.link-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

label {
  display: flex;
  color: white;
  margin-right: 10px;
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
      link: '',
      selectedPlatform: '',
      plataformaOptions: ['GITHUB', 'LINKEDIN', 'DISCORD'],
    };
  },
  methods: {
    submit() {
      console.log('Link:', this.link);
      console.log('Platform:', this.selectedPlatform);
    },
  },
};
</script>
