<template>
    <div v-if="isVisible" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal()">&times;</span>
        <form @submit.prevent="updateProfile">
          <div>
            <label for="nick">Nick:</label>
            <input id="nick" v-model="updatedNick" />
          </div>
          <div>
            <label for="name">Name:</label>
            <input id="name" v-model="updatedName" />
          </div>
          <div>
            <label for="profile_picture">Profile Picture URL:</label>
            <input id="profile_picture" v-model="updatedProfilePicture" />
          </div>
          <div>
            <label for="bios">Bios:</label>
            <input id="bios" v-model="updatedBios" />
          </div>
          <button type="submit">Save</button>
          <button type="button" @click="closeModal()">Cancel</button>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, PropType, onMounted } from 'vue';
  import axios from 'axios';
  
  export default defineComponent({
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
    },
    emits: ['onClose'],
    setup(props, { emit }) {
      const updatedNick = ref('');
      const updatedName = ref('');
      const updatedProfilePicture = ref('');
      const updatedBios = ref('');
  
      onMounted(async () => {
        try {
          const response = await axios.get(`http://localhost:8081/desenvolvedor/2`);
          updatedNick.value = response.data.nick;
          updatedName.value = response.data.nome;
          updatedProfilePicture.value = response.data.profile_picture;
          updatedBios.value = response.data.bios;
        } catch (error) {
          console.error('Failed to fetch the user data:', error);
        }
      });
  
      const closeModal = () => {
        emit('onClose');
      };
  
      const updateProfile = async () => {
        try {
          await axios.put(`http://localhost:8081/desenvolvedor/2`, {
            nick: updatedNick.value,
            nome: updatedName.value,
            profile_picture: updatedProfilePicture.value,
            bios: updatedBios.value,
          });
          closeModal();
        } catch (error) {
          console.error('Failed to update the profile:', error);
        }
      };
  
      return { updatedNick, updatedName, updatedProfilePicture, updatedBios, closeModal, updateProfile };
    },
  });
  </script>
  
  <style scoped>
  .edit-profile-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: purple;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    max-width: 500px;
    color: white;
  }
  
  .buttons {
    margin-top: 20px;
  }
  
  button {
    background-color: white;
    color: purple;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin-right: 10px;
    cursor: pointer;
  }
  </style>
  