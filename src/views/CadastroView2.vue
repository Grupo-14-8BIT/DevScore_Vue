<template>
    <div class="contains">
        <div class="logo">
            <img src="../assets/logo.png" alt="logo" class="logo-img">
        </div>
        <div class="register-form">
            <div class="colum">
                <table class="tbls">
                    <thead>
                        <tr>
                            <th class="tbls" scope="col">Selected Front-End Language</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                        </tr>
                    </tbody>
                </table>
                <div class="fronttoselect">
                    <button class="nts">Cadastrar</button>
                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Open</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div class="colum">
                <table class="tbls">
                    <thead>
                        <tr>
                            <th scope="col">Selected Back-End Language</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                        </tr>
                    </tbody>
                </table>
                <div class="fronttoselect">
                    <button class="nts">Cadastrar</button>
                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Open</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div class="nexto">
                <router-link to="/cadastro3" type="button" class="nextlink">NEXT</router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
</script>

<style>
.form-select{
    height: 40px;
    width: 30vw;
}
.contains {
    height: 120vh;
    background: linear-gradient(to bottom, rgb(0, 0, 0), rgb(0, 0, 0), rgb(23, 0, 45), rgb(29, 0, 57));
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.register-form {
    background-color: rgb(40, 0, 74);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 30px;
    flex-direction: row;
    height: 60vh;
    width: 80vw;
}
.fronttoselect{
    display: flex;
    width: 20vw;
}
.nts{
    background-color: rgba(20, 153, 71, 0.884);
    color: aliceblue;
    border: none;
    border-radius: 6px;
}
.nexto{
    padding: 10px;
}
.colum {
    margin-left: 18px;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
tbls{
    background-color: rgba(14, 14, 14, 0.781);
    color: aliceblue;
}
</style>