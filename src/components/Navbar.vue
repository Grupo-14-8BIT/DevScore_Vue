<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/home">
        <img src="https://github.com/Guilherme-Denarde/Img/blob/master/logo.png?raw=true" alt="Logo" />
      </router-link>
   </div>
    <ul class="links">
      <li>
        <router-link to="/home" :class="{ active: currentPath === '/home' }">Home</router-link>
      </li>
      <li>
        <router-link to="/aboutme" :class="{ active: currentPath === '/aboutme' }">Profile</router-link>
      </li>
    </ul>
    <div class="search-bar">
      <div class="search-neon"></div>
      <div class="search-input">
        <input type="text" v-model="inputValue" placeholder="Search..." @keyup.enter="performSearch" />
        <span class="search-icon">
          <i class="fas fa-search"></i>
        </span>
      </div>
    </div>
    <div class="profile-pic" @click="toggleSidebar">
      <img src="https://st4.depositphotos.com/4157265/41100/i/450/depositphotos_411005388-stock-photo-profile-picture-of-smiling-30s.jpg" alt="Profile Picture" />
    </div>
    <div :class="['sidebar', { active: isSidebarOpen }]" @click.self="closeSidebar">
      <div class="sidebar-header">
        <!-- <img :src="profilePic" alt="Profile Picture" /> -->
        <img src="https://st4.depositphotos.com/4157265/41100/i/450/depositphotos_411005388-stock-photo-profile-picture-of-smiling-30s.jpg" alt="Profile Picture" />
        <span class="profile-name">Arthur Silva</span>
        <span class="close-btn" @click="closeSidebar">&times;</span>
      </div>
      <ul>
        <li><a href="/page1">Page 1</a></li>
        <li><a href="/page2">Page 2</a></li>
        <li><a href="/page3">Page 3</a></li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
  name: 'Navbar',
})
export default class Navbar extends Vue {
  currentPath: string = '/';
  isSidebarOpen: boolean = false;
  inputValue: string = '';

  created(): void {
    this.currentPath = this.$route.path;
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
  }

  performSearch(): void {
    console.log('Performing search with value:', this.inputValue);
    this.inputValue = '';
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #1C0049;
}

.logo img {
  width: 15vw;
  height: auto;
}

.links {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.links li {
  margin-right: 10px;
}

.links li a {
  font-family: 'Press Start 2P', cursive;
  font-size: 16px;
  color: green;
  text-decoration: none;
  transition: color 0.3s;
}

.links li a.active {
  color: purple;
}

.search-bar {
  display: flex;
  align-items: center;
  padding: 5px;
}

.search-input {
  position: relative;
  border: 2px solid white;
  border-radius: 20px;
}

.search-input input {
  width: 150px;
  height: 30px;
  padding: 5px;
  border-radius: 15px;
  border: 2px solid transparent;
  background-color: transparent;
  color: white;
  outline: none;
}

.search-input .search-icon {
  position: absolute;
  top: 5px;
  right: 5px;
}

.search-input .search-icon i {
  color: white;
}

.search-input input:focus {
  animation: neon-glow 4.5s linear infinite;
}

@keyframes neon-glow {
  0% {
    border-color: #00ff00;
    box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00;
  }

  50% {
    border-color: #ff00ff;
    box-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff;
  }

  100% {
    border-color: #00ff00;
    box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00;
  }
}

.profile-pic {
  cursor: pointer;
}

.profile-pic img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #000000;
}

.sidebar {
  position: fixed;
  right: -200px;
  bottom: 0;
  width: 200px;
  background-color: #f2f2f2;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
  z-index: 999;
  font-family: 'Press Start 2P', cursive;
  padding: 10px;
}

.sidebar.active {
  top: 0;
  transform: translateX(-100%);
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}

.sidebar-header img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.close-btn {
  cursor: pointer;
  font-size: 20px;
  color: #888;
}

.close-btn:hover {
  color: #000;
}
.sidebar-header .profile-name {
  font-family: 'Press Start 2P', cursive;
  font-size: 16px;
  color: #000;
  margin-left: 10px;
}

@media screen and (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: center;
  }

  .logo {
    margin-bottom: 10px;
  }

  .links {
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }

  .links li {
    margin: 5px 0;
  }

  .search-bar {
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }

  .search-input {
    margin-bottom: 10px;
  }

  .profile-pic {
    margin-bottom: 10px;
  }
}</style>
