<template>
    <div class="login">
      <h2 class="neon">Login</h2>
      <form class="login-form" @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Handle login logic here
      },
    },
  };
  </script>
  
  <style>
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
  }
  
  .neon {
    font-size: 2rem;
    color: #00ff00;
    text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00, 0 0 50px #00ff00;
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    font-weight: bold;
  }
  
  input {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .login-button {
    padding: 0.5rem 1rem;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .login-button:hover {
    background-color: #444;
  }
  </style>
  