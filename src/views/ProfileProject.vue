<template>
    <div class="profile">
      <div class="profile-info">
        <img :src="profilePic" alt="Profile Picture" class="profile-pic">
        <h1 class="neon">{{ userName }}</h1>
        <p>{{ bio }}</p>
        <div class="tags">
          <span v-for="language in programmingLanguages" :key="language" class="tag">{{ language }}</span>
        </div>
      </div>
      <div class="projects">
        <h2>Projects</h2>
        <div class="folders">
          <div class="folder" v-for="project in projects" :key="project.id">
            <img :src="project.thumbnail" alt="Project Thumbnail" class="folder-thumbnail">
            <p>{{ project.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profilePic: 'path/to/profile-picture.jpg',
        userName: 'Joe Joey',
        bio: 'Frontend Developer passionate about creating amazing user experiences.',
        programmingLanguages: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
        projects: [
          {
            id: 1,
            name: 'Project 1',
            thumbnail: 'path/to/project1-thumbnail.jpg',
          },
          {
            id: 2,
            name: 'Project 2',
            thumbnail: 'path/to/project2-thumbnail.jpg',
          },
          // Add more projects as needed
        ],
      };
    },
  };
  </script>
  
  <style>
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
  }
  
  .profile-pic {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .neon {
    font-size: 2rem;
    color: #00ff00;
    text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00, 0 0 50px #00ff00;
  }
  
  .tags {
    margin-top: 1rem;
  }
  
  .tag {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin: 0.25rem;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
  }
  
  .projects {
    margin-top: 2rem;
    text-align: center;
  }
  
  .folder {
    display: inline-block;
    margin: 1rem;
  }
  
  .folder-thumbnail {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  .background {
  /* Purple background with gradient */
  background: linear-gradient(to bottom, #140f30, #470b58);
}

/* Additional styling for the faraway star effect */
.background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://i.pinimg.com/736x/89/0a/38/890a38c837f3334b91bd7b3309b7907c.jpg');
  opacity: 0.8;
  pointer-events: none;
}
  </style>
  