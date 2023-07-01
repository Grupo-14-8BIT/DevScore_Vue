<template>
        <div class="profile">
            <div class="row-1">

                <div class="col-1">
                    <div class="username">
                        <h1>JOE_MCnum</h1>
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
                    <img src="../assets/logo.png" alt="logo" class="pic">
                    <div class="contact">
                        <div class="discord"></div>
                        <div class="github"></div>
                        <div class="linkedin"></div>
                    </div>
                </div>

                <div class="col-3">
                    <ul class="identification">
                        <li class="real-name">
                            <h1>Hasan Cayed Essaad</h1>
                        </li>
                        <li class="curso">
                            <h3>Software Engineer</h3>
                        </li>
                    </ul>
                    <div class="conquest">
                        <ul class="conquest1">
                            <li><img src="" alt=""></li>
                            <li><img src="" alt=""></li>
                            <li><img src="" alt=""></li>
                            <li><img src="" alt=""></li>
                            <li><img src="" alt=""></li>
                        </ul>
                    </div>
                </div>
            </div><!--this is the closing of row-1-->
        </div>
        <div class="row-2">
            <div class="clm-about-me">
                <img src="../assets/profileaboutme_520x347.jpeg" class="aboutmepic" alt="">
                <router-link type="button" to="/aboutme" class="routs btn-about-me">ABOUT ME</router-link>
            </div>
            <div class="clm-project">
                <img src="../assets/profileprojectpic_520x347.jpeg" alt="">
                <router-link type="button" to="/projects" class="routs btn-profile">PROJECTS</router-link>
            </div>
        </div>
    
</template>

<style>

.profile {
    display: flex;
    justify-content: center;
    color: aliceblue;
    list-style-type: none;
    background: linear-gradient(to bottom,rgb(0, 0, 0),rgb(0, 0, 0),rgb(23, 0, 45),rgb(29, 0, 57));
}
.real-name{
    list-style-type: none;
}
.curso{
    list-style-type: none;
}
.conquest1{
    display: flex;
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

.followers_numbers{
    display: flex;
    justify-content: space-between;
}

.following{
    padding: 12px;
}
.followers{
    padding: 12px;
}
.projects{
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
    height: 150px;
    width: 150px;
}

.contact {
    display: flex;
    justify-content: space-between;
    height: 50px;
}

.discord {
    height: 50px;
    width: 45px;
}
.github{
    height: 50px;
    width: 45px;
}
.linkedin{
    height: 50px;
    width: 45px;
}
.col-3 {
    border: 1px solid yellow;
}

.row-2{
    display: flex;
    justify-content: space-between;
    height: 120px;
    background-color: rgb(17, 0, 50);
}
.clm-about-me{
    display: flex;
    position: relative;
    justify-content: flex-end;
    align-items: flex-end;
    height: 120px;
}
.clm-about-me img{
    height: 120px;
    width: 47vw;
    opacity: 0.8;
    box-shadow: inset 0px -4px 8px rgba(0, 0, 0, 0.2);
}

.clm-about-me .btn-about-me{
    position: absolute; 
    height: 60px;
    box-shadow: -8px -8px  rgba(0, 0, 0, 0.2);
    width: 20vw;
    text-decoration: none;
    color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-top-left-radius: 14px;
    background-color: rgb(26, 157, 26);
    border-top-right-radius: 14px;
    text-decoration: none;
    border: none;
}
.clm-about-me .btn-about-me:hover{
    position: absolute; 
    height: 60px;
    box-shadow: -8px -8px  rgba(0, 0, 0, 0.2);
    width: 20vw;
    text-decoration: none;
    color: aliceblue;
    font-weight: bold;
    border-top-left-radius: 14px;
    background-color: rgb(40, 0, 74);
    border-top-right-radius: 14px;
    text-decoration: none;
    border: none;
}

.clm-project{
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    position: relative;
    height: 120px;
}
.clm-project img{
    height: 120px;
    width: 47vw;
    opacity: 0.8;
    box-shadow: inset 0px -4px 8px rgba(0, 0, 0, 0.2);
}
.clm-project .btn-profile{
    box-shadow: 8px -8px  rgba(0, 0, 0, 0.2);
    position: absolute; 
    background-color: rgb(26, 157, 26);
    font-weight: bold;
    color: aliceblue;
    height: 60px;
    text-decoration: none;
    width: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
}
.clm-project .btn-profile:hover{
    box-shadow: 8px -8px  rgba(0, 0, 0, 0.2);
    position: absolute; 
    background-color: rgb(40, 0, 74);
    font-weight: bold;
    color: aliceblue;
    text-decoration: none;
    height: 60px;
    width: 20vw;
    border: none;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
}

</style>
  