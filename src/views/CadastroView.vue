<template>
    <div class="register-page">
      <div class="logo">
        <img src="../assets/logo.png" alt="logo" class="logo-img">
      </div>
      <div class="register-form">
        <div class="row">
          <div class="col-md-">
            <div class="form-group">
              <label class="input-label">
                <input type="text" class="form-control" v-model="username" placeholder="Username">
              </label>
            </div>
            <div class="form-group">
              <label class="input-label">
                <input type="text" class="form-control" v-model="name" placeholder="Name">
              </label>
            </div>
            <div class="form-group">
              <label class="input-label">
                <input type="password" class="form-control" v-model="password" placeholder="Password">
              </label>
            </div>
          </div>
          <div class="col-md-">
            <div class="form-group">
              <label class="input-label">
                <input type="text" class="form-control" v-model="RA" placeholder="RA">
              </label>
            </div>
            <div class="form-group">
              <label class="input-label">
                <input type="tel" class="form-control" v-model="phone" placeholder="Phone">
              </label>
            </div>
            <div class="form-group">
              <label class="input-label">
                <input type="email" class="form-control" v-model="email" placeholder="Email">
              </label>
            </div>
          </div>
        </div>
        <router-link to="/cadastro2" class="btn2">
          <button class="btn btn-primary" @click="addValues">GO-TO-STEP-2</button>
        </router-link>
      
      </div>
    </div>
  </template>
  <script lang="ts">
  export default {
    data() {
      return {
        username: '',
        name: '',
        password: '',
        RA: '',
        phone: '',
        email: ''
      };
    },
    methods: {
      addValues() {
        // Perform logic to add the values
        console.log('Username:', this.username);
        console.log('Name:', this.name);
        console.log('Password:', this.password);
        console.log('RA:', this.RA);
        console.log('Phone:', this.phone);
        console.log('Email:', this.email);
      }
    }
  };
  </script>
  <style>
  .register-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(to bottom, rgba(30,30,30,1), rgba(99,0,153,1));
  }
  
  .logo {
   width: 80%;
   height: auto;
  }
  
  .logo-img {
    width: 400px;
    height: auto;
  }
  
  .register-form {
    display: flex;
    max-width: 500px;
  
    background-color: #fff;
    padding: 20px;
    border-radius: 30px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: rgba(85, 44, 73, 1);
  }
  
  .row {
    display: flex;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 80px;
    justify-content: center;
    align-items: center;
  }
  
  .form-group {
    display: flex;
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;
  }
  
  .input-label {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    margin-bottom: 5px;
    justify-content: center;
  }
  
  .form-control {
    display: flex;
    padding: 10px;
    border: 1px solid #ccc;
    font-size: 14px;
    border-radius: 10px;
  
  }
  a{
    display: flex;
    justify-content: center;
  
  }
  .btn2{
    text-decoration: none;
  }
  .btn-primary {
    display: flex;
    padding: 10px;
    background-color: white;
    border: none;
    color: black;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    justify-content: center;
   
  }
  
  .btn-primary:hover {
    display: flex;
    background-color: #0ADC1F;
  
  text-decoration: none;
  }
  </style>