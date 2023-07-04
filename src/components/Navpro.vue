<template>
    <div class="profile">
        <div class="row-1">
            <div class="col-1">
                <div class="username">
                    <h1>{{ nick }}</h1>
                </div>
                <div class="followers_numbers">
                    <div class="following">
                        <h3>137</h3>
                        <h3>Following</h3>
                    </div>
                    <div class="followers">
                        <h3>26</h3>
                        <h3>Followers</h3>
                    </div>
                    <div class="projects">
                        <h3>3</h3>
                        <h3>Projects</h3>
                    </div>
                </div>
            </div>
            
            <div class="col-2">
                <img :src="profile_picture" alt="logo" class="pic">
                <div class="contact">
                    <div class="discord">
                        <img src="../assets/discord.png" alt="logo" class="pic1">
                    </div>
                    <div class="github">
                        <img src="../assets/github.png" alt="logo" class="pic2">
                    </div>
                    <div class="linkedin">
                        <img src="../assets/linkitin.png" alt="logo" class="pic2">
                    </div>
                </div>
            </div>
            
            <div class="col-3">
                <button @click="isEditProfileOpen = true">Edit Profile</button>
                <ul class="identification">
                    <li class="real-name">
                        <h1>{{ nome }}</h1>
                    </li>
                    <li class="curso">
                        <h3>Software Engineer</h3>
                    </li>
                </ul>
                <div class="conquest">
                    <ul class="conquest1">
                        <li><img class="conquest2" src="../assets/conquest.png" alt=""></li>
                        <li><img class="conquest2" src="../assets/conquest.png" alt=""></li>
                        <li><img class="conquest2" src="../assets/conquest.png" alt=""></li>
                        <li><img class="conquest2" src="../assets/conquest.png" alt=""></li>
                        <li><img class="conquest2" src="../assets/conquest.png" alt=""></li>
                    </ul>
                </div>
            </div>
        </div><!--this is the closing of row-1-->
    </div>
    <div class="row-2">
        <div class="clm-about-me">
            <img src="../assets/porfaboutpic.png" class="aboutmepic" alt="">
            <router-link type="button" to="/aboutme" :class="{ 'btns': isMarcaClicked }" @click="clickedonmarca()"
                class="routs btn-about-me">ABOUT ME</router-link>
        </div>
        <div class="clm-project">
            <img src="../assets/profprojpc.png" alt="">
            <router-link type="button" class="routs btn-profile" :class="{ 'btns': isModeloClicked }"
                @click="clickedonmodelo()" to="/projects">PROJECTS</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import EditProfile from './EditProfile.vue';

export default defineComponent({
    setup() {
        const nick = ref('');
        const nome = ref('');
        const profile_picture = ref('');
        const bios = ref('');

        const isSettingsOpen = ref(false);
        const updatedNick = ref('');
        const updatedName = ref('');
        const updatedProfilePicture = ref('');
        const isEditProfileOpen = ref(false);
        
        onMounted(async () => {
            try {
                const response = await axios.get(`http://localhost:8081/desenvolvedor/2`);
                nick.value = response.data.nick;
                nome.value = response.data.nome;
                bios.value = response.data.bios;
                profile_picture.value = response.data.profile_picture;
                updatedNick.value = response.data.nick;
                updatedName.value = response.data.nome;
                updatedProfilePicture.value = response.data.profile_picture;
                console.log(response);
                
            } catch (error) {
                console.error('Failed to fetch the user data:', error);
            }
        });

        const updateData = async () => {
            try {
                await axios.put(`http://localhost:8081/desenvolvedor/2`, {
                    nick: updatedNick.value,
                    name: updatedName.value,
                    profile_picture: updatedProfilePicture.value,
                    // ...other fields...
                });
                isSettingsOpen.value = false;
            } catch (error) {
                console.error('Failed to update the data:', error);
            }
        };

        return {
            nick,
            nome,
            profile_picture,
            bios,
            isSettingsOpen,
            updatedNick,
            updatedName,
            updatedProfilePicture,
            updateData,
            isEditProfileOpen
        };
    },
    data() {
        return {
            isModeloClicked: false as boolean,
            isMarcaClicked: true as boolean
        };
    },
    methods: {
        clickedonmodelo(): void {
            this.isModeloClicked = true;
            this.isMarcaClicked = false;
        },
        clickedonmarca(): void {
            this.isModeloClicked = false;
            this.isMarcaClicked = true;
        }
    }
});
</script>


<style>
.profile {
    display: flex;
    justify-content: center;
    color: aliceblue;
    list-style-type: none;
    background: linear-gradient(to bottom, rgb(0, 0, 0), rgb(0, 0, 0), rgb(23, 0, 45), rgb(29, 0, 57));
}

.real-name {
    list-style-type: none;
}

.curso {
    display: flex;
    justify-content: flex-start;
    list-style-type: none;
}

.conquest1 {
    display: flex;
    list-style-type: none;
}

.conquest2 {
    height: 30px;
    width: 30px;
}

.col-4 {
    display: flex;
    justify-content: space-around;
}

.row-1 {
    display: flex;
    justify-content: center;
    align-items: center;
}

.col-1 {
    padding: 30px;
    display: list-item;
    justify-content: center;
    align-items: center;
}

.username {
    display: flex;
    justify-content: center;
}

.followers_numbers {
    display: flex;
    justify-content: space-between;
}

.following {
    padding: 12px;
}

.followers {
    padding: 12px;
}

.projects {
    padding: 12px;
}

.col-2 {
    display: list-item;
    justify-content: space-around;
    align-items: space-between;
    padding: 25px;
    margin-right: 28px;
}

.pic {
    height: 180px;
    width: 180px;
}

.contact {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    height: 50px;
}

.pic1 {
    height: 50px;
    width: 60px;
    border-radius: 12px;
}

.pic2 {
    height: 42px;
    width: 40px;
    border-radius: 12px;
}

.discord {
    height: 50px;
    width: 45px;
    background-color: greenyellow;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.github {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 45px;
    background-color: greenyellow;
    border-radius: 12px;

}

.linkedin {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 45px;
    background-color: greenyellow;
    border-radius: 12px;

}

.row-2 {
    display: flex;
    justify-content: space-between;
    height: 120px;
    background-color: rgb(17, 0, 50);
}

.clm-about-me {
    display: flex;
    position: relative;
    justify-content: flex-end;
    align-items: flex-end;
    height: 120px;
}

.clm-about-me img {
    height: 120px;
    width: 47vw;
    opacity: 0.8;
    box-shadow: inset 0px -4px 8px rgba(0, 0, 0, 0.2);
}

.clm-about-me .btn-about-me {
    position: absolute;
    height: 60px;
    box-shadow: -8px -8px rgba(0, 0, 0, 0.2);
    width: 20vw;
    text-decoration: none;
    color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-radius: 14px;
    text-decoration: none;
    border: none;
}

.clm-about-me .btn-about-me:hover {
    position: absolute;
    height: 60px;
    box-shadow: -8px -8px rgba(0, 0, 0, 0.2);
    width: 20vw;
    text-decoration: none;
    color: aliceblue;
    font-weight: bold;
    border-top-left-radius: 14px;
    background-color: rgb(22, 0, 41);
    border-top-right-radius: 14px;
    text-decoration: none;
    border: none;
}

.clm-project {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    position: relative;
    height: 120px;
}

.clm-project img {
    height: 120px;
    width: 47vw;
    opacity: 0.8;
    box-shadow: inset 0px -4px 8px rgba(0, 0, 0, 0.2);
}

.clm-project .btn-profile {
    box-shadow: 8px -8px rgba(0, 0, 0, 0.2);
    position: absolute;
    font-weight: bold;
    color: aliceblue;
    height: 60px;
    text-decoration: none;
    width: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 14px;
}

.clm-project .btn-profile:hover {
    box-shadow: 8px -8px rgba(0, 0, 0, 0.2);
    position: absolute;
    background-color: rgb(22, 0, 41);
    font-weight: bold;
    color: aliceblue;
    text-decoration: none;
    height: 60px;
    width: 20vw;
    border: none;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
}

.routs {
    cursor: pointer;
    background-color: rgb(26, 157, 26);
    margin-bottom: 15px;
}

.btns {
    background-color: rgb(40, 0, 74);
    margin-bottom: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}
</style>
  