<template>
    <div class="register-page">
      <div class="logo">
        <img src="../assets/logo.png" alt="logo" class="logo-img">
      </div>
      <div class="register-form">
        <div class="container">
          <div class="row">
            <div class="col">
              <h3>Front-end:</h3>
              <select class="btn1" v-model="selectedFrontEnd">
                <option v-for="language in frontEndLanguages" :value="language">{{ language }}</option>
              </select>
              <button @click="cadastrarFrontEnd">Cadastrar</button>
              <h3>Opções selecionadas:</h3>
              <ul>
                <li v-for="option in selectedFrontEndOptions">{{ option }}</li>
              </ul>
            </div>
            <div class="col">
              <h3>Back-end:</h3>
              <select class="btn2" v-model="selectedBackEnd">
                <option  v-for="language in backEndLanguages" :value="language">{{ language }}</option>
              </select>
              <button @click="cadastrarBackEnd">Cadastrar</button>
              <h3>Opções selecionadas:</h3>
              <ul>
                <li v-for="option in selectedBackEndOptions">{{ option }}</li>
              </ul>
            </div>
          </div>
           <div class="text-center">
          <router-link to="/cadastro3">
            <button class="btn btn-primary" @click="addValues">GO-TO-STEP-2</button>
          </router-link>
        </div>
        </div>
       
      </div>
    </div>
  </template>
  
  <style>
  .register-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    
  }
  
  .logo {
    margin-bottom: 20px;
  }
  
  .logo-img {
    width: 200px;
    height: auto;
  }
  .register-form{
    background-color: white;
    /* background-color: rgba(85, 44, 73, 1); */
  }
  
  
  .btn-primary {
    justify-content: center;
    align-items: center;
    width: 240px;
    padding: 12px;
    background-color: white;
    border: none;
    color: black;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 18px;
  }
  
  .container {
    max-width: 600px;
    margin: 0 auto;
  }
  .text-center{
    display: flex;
  
  }
  
  .select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .row{
    display: flex;
    
  }
  
  .button {
    display: flex;
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  
  }
  
  .selected-options {
    display: flex;
    list-style: none;
    padding-left: 0;
  
  
  }
  
  .selected-options li {
    display: flex;
    margin-bottom: 5px;
  }
  
  .btn1{
  background-color: white;
  width: 20vw;
  height: 4vw;
  border-radius: 10px;
  
  }
  .btn2{
  background-color: white;
  width: 20vw;
  height: 4vw;
  border-radius: 10px;
  }
  h3{
    color: black;
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        frontEndLanguages: [
          'HTML',
          'CSS',
          'JavaScript',
          'React',
          'Angular',
          'Vue.js',
          'Bootstrap',
          'Sass',
          'Less',
          'TypeScript'
        ],
        backEndLanguages: [
          'Node.js',
          'Python',
          'Ruby',
          'Java',
          'PHP',
          'C#',
          'Go',
          'Scala',
          'Rust',
          'Perl'
        ],
        selectedFrontEnd: '',
        selectedBackEnd: '',
        selectedFrontEndOptions: [],
        selectedBackEndOptions: []
      };
    },
    methods: {
      cadastrarFrontEnd() {
        if (this.selectedFrontEnd) {
          this.selectedFrontEndOptions.push(this.selectedFrontEnd);
        }
      },
      cadastrarBackEnd() {
        if (this.selectedBackEnd) {
          this.selectedBackEndOptions.push(this.selectedBackEnd);
        }
      }
    }
  };
  </script>