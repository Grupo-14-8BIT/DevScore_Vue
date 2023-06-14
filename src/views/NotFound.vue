<template>
  <div class="not-found">
    <h1 class="neon">404</h1>
    <p>Page not found</p>
    <router-link to="/" class="link">Go to Home</router-link>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../views/NotFound.vue';

const routes = [
  // Other routes
  {
    path: '/:catchAll(.*)', // Match any unmatched path
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

defineComponent({
  router, // Export the router instance
});
</script>

<style>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Set the minimum height to 100% of the viewport height */
  background-color: #333;
  color: #fff;
  font-family: Arial, sans-serif;
}

.neon {
  font-size: 6rem;
  color: #00ff00;
  text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00, 0 0 50px #00ff00, 0 0 60px #00ff00, 0 0 70px #00ff00;
}

.link {
  margin-top: 2rem;
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #222;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-in-out;
}

.link:hover {
  background-color: #444;
}
</style>
