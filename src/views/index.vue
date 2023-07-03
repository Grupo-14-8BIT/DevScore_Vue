<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <div v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</div>
  </div>
</template>

<script lang="ts">
// export default {
//   data() {
//     return {
//       email: '',
//       password: '',
//       errorMessage: '',
//     };
//   },
//   methods: {
//     async login() {
//       try {
//         const response = await fetch('/api/users'); // Replace with your API endpoint
//         const users = await response.json();

//         const foundUser = users.find(user => user.email === this.email && user.password === this.password);

//         if (foundUser) {
//           // User found, perform login logic here
//           console.log('Login successful');
//           this.errorMessage = '';
//         } else {
//           // User not found, display error message
//           this.errorMessage = 'Invalid email or password';
//         }
//       } catch (error) {
//         console.error('Error:', error);
//         this.errorMessage = 'An error occurred while logging in';
//       }
//     },
//   },
// };
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
}

.form-group {
  margin-bottom: 20px;
}
</style>
