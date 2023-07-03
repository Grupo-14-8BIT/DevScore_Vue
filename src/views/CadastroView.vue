<template>
    <div class="register-page">
        <div class="logo">
            <img src="../assets/logo.png" alt="logo" >
        </div>
        <div class="forms">
            <div class="r1">
                <input placeholder="Real Name" class="inpt" type="text">
                <input placeholder="User_Name" class="inpts" type="text">
            </div>
            <div class="r2">
                <input placeholder="Email" class="inpt" type="text">
                <input placeholder="Password" class="inpts" type="text">
            </div>
            <div class="nextpage">
                <router-link class="nextlink" to="/cadastro2" type="button">NEXT</router-link>
            </div>
        </div>
    </div>
</template>

<style>
.register-page{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(to bottom, rgb(0, 0, 0), rgb(0, 0, 0), rgb(23, 0, 45), rgb(29, 0, 57));
    height: 100vh;
}
.forms{
    background-color: rgb(40, 0, 74);
    height: 50vh;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.r1{
    padding: 15px;
    display: flex;
    justify-content: space-around;
}
.r2{
    padding: 15px;
    display: flex;
    justify-content: space-around;
}

.inpt{
    height: 35px;
    width: 20vw;
    border-radius: 12px;
    margin-right: 20px;
}
.inpts{
    height: 35px;
    width: 20vw;
    border-radius: 12px;
}
.nextpage{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px;
    width: 30vw;
    height: 5vh;
}
.nextlink{
    background-color: rgba(20, 153, 71, 0.884);
    text-decoration: none;   
    color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8vh;
    width: 10vw;
    box-shadow: 3px 4px 3px black;
    cursor: pointer;
    border-radius: 12px;
}
.nextlink:hover{
    background-color: rgba(10, 80, 37, 0.897);
    text-decoration: none;   
    color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8vh;
    width: 10vw;
    box-shadow: 3px 4px 3px black;
    cursor: pointer;
    border-radius: 12px;
    font-size: large;
    font-weight: bold;
}
</style>