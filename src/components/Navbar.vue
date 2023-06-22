<template>
    <div class="background-nav">
    <div>
      <header class="navbar">
        <div class="logo">
          <img src="../assets/logo.png" alt="Logo" />
        </div>
        <nav class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/contact">Contact</router-link>
          <div class="profile" @click="togglePopup">
            <img class="profile-image" src="../assets/logo.png" alt="Profile" />
            <div v-if="isPopupOpen" class="popup">
              <router-link to="/profile">Profile</router-link>
              <router-link to="/settings">Settings</router-link>
              <router-link to="/logout">Logout</router-link>
            </div>
          </div>
        </nav>
      </header>
      <!-- Still working on it  -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const isPopupOpen = ref(false);

    const togglePopup = () => {
      isPopupOpen.value = !isPopupOpen.value;
    };

    return {
      isPopupOpen,
      togglePopup,
    };
  },
});
</script>

<style>
.background-nav {
  background-color: #f5f5f5;
  /* background-image: url("file:///home/wander/Downloads/layered-peaks-haikei.svg"); */
  background-size: contain;
  background-position: center;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.logo img {
  width: 100px;
  height: auto;
}

.nav-links {
  display: flex;
}

.nav-links router-link {
  margin-right: 10px;
  text-decoration: none;
  color: #333;
}

.profile {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.profile-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 10px;
}

.popup {
  position: absolute;
  top: 40px;
  right: 0;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  flex-direction: column;
}

.popup router-link {
  text-decoration: none;
  color: #333;
  margin-bottom: 5px;
}
</style>
