<template>
  <body class="fundo">
  <div class="container">
    <div class="logo-container">
      <img src="../assets/logo.png" alt="logo">
    </div>
    <div class="form-container">
      <h1>username!</h1>
      <div class="profile-section">
        
        <div class="profile-img">
          <img src="" alt="Profile Image">
        </div>
        <div class="profile-desc">
          <textarea class="form-control" placeholder="Profile Description" rows="5"></textarea>
        </div>
      </div>
      <div class="social-links">
        <div class="input-group">
          <label for="github"></label>
          <input type="text" id="github" placeholder="GitHub">
        </div>

        <div class="input-group">
          <label for="linkedin"></label>
          <input type="text" id="linkedin" placeholder="LinkedIn">
        </div>

        <div class="input-group">
          <label for="discord"></label>
          <input type="text" id="discord" placeholder="Discord">
        </div>
      </div>
      <router-link to="/Login">
        <button class="btn btn-primary">Play</button>
      </router-link>
    </div>
  </div>
</body>
</template>

<style>

.fundo{
  justify-content: center;
  align-items: center;
  padding: 200px;
  display: flex;
  background: linear-gradient(to bottom, rgba(30,30,30,1), rgba(99,0,153,1));
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 width: 60vw;
  
}



.logo-container img {
  display: flex;
  width: 400px;
  height: auto;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(85, 44, 73, 1);
  max-width: 100%;
  width: 100%;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  justify-content: center;
  
}
h1{
  color: white;
}
.profile-section {
  display: flex;
  align-items: center;
  margin-right: 20px;
  max-width: 100%;
}

.profile-img {
  width: 150px;
  margin-right: 100px;
}

.profile-img img {
  width: 100%;
  height: auto;
}

.profile-desc textarea {
  display: flex;
  width: 100%;
  max-width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

.social-links {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
  max-width: 100%;
  justify-content: space-between;
  border: 2px solid red;
}

.input-group {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  border: 2px solid red;
  max-width: 100%;

}

label {
  display: flex;
  color: white;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-around;
}

input[type="text"] {
  width: 200px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
}

.btn {
  padding: 10px;
  background-color: white;
  color: black;
  border-radius: 20px;
  margin-bottom: 10px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0ADC1F;
}

input[type="text"] {
  display: flex;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 20px 20px;
  text-align: center;
  justify-content: space-around;
}

.social-links .input-group:nth-child(1) input#github {
  background-image: url("../assets/github.png");
}

.social-links .input-group:nth-child(2) input#linkedin {
  background-image: url("../assets/linkitin.png");
}

.social-links .input-group:nth-child(3) input#discord {
  background-image: url("../assets/discord.png");
}

::placeholder {
  text-align: center;
}

.btn-primary {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300%;
  padding: 10px;
  background-color: white;
  border: none;
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0ADC1F;
}
</style>