<template>
    <header class="header">
      <router-link to="/" class="logo">
        <img src="@/assets/logo.png" alt="Logo" />
      </router-link>
      
      <div class="profile" @click="showPopup = !showPopup">
        <img src="@/assets/profile.jpg" alt="Profile Picture" class="profile-image" />
      </div>
  
      <div v-if="showPopup" class="popup">
        <router-link to="/page1">Page 1</router-link>
        <router-link to="/page2">Page 2</router-link>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showPopup: false
      };
    }
  };
  </script>
  
  <style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  /* Add this to set a max-height for the header */
  max-height: 70px;
}

.logo img {
  height: 50px;
}

.profile {
  position: relative;
  cursor: pointer;
}

.profile-image {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.popup {
  position: absolute;
  top: 60px;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  /* Add this to set the width of the popup */
  width: 200px;
}
</style>
