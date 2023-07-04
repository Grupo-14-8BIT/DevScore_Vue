<template>
    <div class="teste-view">
 
    
   
      <div class="title-comments">
        <h1>47 | </h1>
        <h1>PERSONAL FEEDBACK</h1>
    </div>
    <div class="commenting">
        <img src="../assets/profilepic.png" class="com-prof" alt="">
        <div class="input-group mb-3">
            <Comentario> <input type="text" class="form-control addcomment" placeholder="ADD YOUR FEEDBACK"
                aria-label="Recipient's username" aria-describedby="button-addon2"> </Comentario>
            
        </div>
    </div>
    <div class="the-comment">
        <img src="../assets/profilepic.png" class="com-prof1" alt="">
        <div class="com-container">
            <ul class="listinfo1">
                <li class="listinfo">
                    <h6>Hasan Cayed Essaad | 2 weeks ago</h6>
                </li>
                <li class="listinfo">
                    <h7>JOE_MCnum</h7>
                </li>
                <li class="listinfo">
                    <h8>Software Engineer</h8>
                </li>
            </ul>
            <h9>Great profile! keep up the great work it was great working with you and looking forward to future projects.
            </h9>
            <div class="response">
                <button>like</button>
                <button>dislike</button>
                <button>replies</button>
            </div>
        </div>
    </div>
   
 </div>
   
  </template>
  
  <script>
  import Comentario from '../components/Comentario.vue';
  
  export default {
    components: {
      Comentario
    }
  };
  </script>
  
  <style scoped>
  .teste-view {
    text-align: center;
  }
  .the-comment {
    padding: 30px;
    display: flex;
    background-color: rgb(40, 0, 74);
    color: aliceblue;
}
.response{
    display: flex;
    padding: 10px;
    justify-content: flex-start;
}

.title-comments {
    display: flex;
    padding-left: 35px;
    background-color: rgb(40, 0, 74);
    color: aliceblue;
}

.addcomment {
    border: none;
    width: 45vw;
    height: 50px;
    border-radius: 14px;
    color: aliceblue;
    background-color: blueviolet;
}
.addcomment::placeholder {
    color: aliceblue;
}

.commenting {
    padding-right: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(40, 0, 74);
}

.com-prof1 {
    margin-top: 40px;
    height: 70px;
    width: 70px;
}

.com-prof {
    margin-right: 50px;
    margin-left: 20px;
    height: 100px;
    width: 100px;
}

  </style>


  