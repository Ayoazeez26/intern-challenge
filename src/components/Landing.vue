<template>
  <div class="container">
    <div class="container-center">
      <h1>{{ content.name }}</h1>
      <div class="pop-card">
      </div>
      <div class="navbar">
        <p class="item">HOME</p>  
        <p class="item">ABOUT</p>
        <div class="profile">
        </div>
        <p class="item">GALLERY</p>  
        <p class="item">CONTACT</p>  
      </div>
    </div>
    <div class="container-side">
      <a :href="`https://www.instagram.com/${content.social_media.instagram}`">
      <font-awesome-icon size="3x" :icon="['fab', 'instagram']" />
      </a>
      <a :href="`https://www.twitter.com/${content.social_media.twitter}`">
      <font-awesome-icon size="3x" :icon="['fab', 'twitter-square']" />
      </a>
      <a :href="`https://www.snapchat.com/${content.social_media.snapchat}`">
      <font-awesome-icon size="3x" :icon="['fab', 'snapchat-square']" />
      </a>
      <a :href="`https://www.email.com/${content.social_media.email}`">
      <font-awesome-icon size="3x" icon="envelope-square" />
      </a>
    </div> 
  </div>
</template>
<script>

var axios = require('axios')

export default {
  name: 'Landing',
  data () {
    return {
      content: {}
    }
  },
  mounted () {
    axios
      .get('https://hirng-x2021.glitch.me/api')
      .then(response => (this.content = response.data))
  }
}
</script>


<style>
  .container {
    width: 1440px;
    height: 900px;
    background: rgb(189,15,77);
    background: linear-gradient(90deg, rgba(189,15,77,1) 0%, rgba(189,15,77,1) 50%, rgba(203,41,100,1) 50%);
  }
  .container-center{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    color: white;
    letter-spacing: 20px;
    margin-top: 50px;
  }
  .pop-card {
    margin-top: 50px;
    width: 570px;
    height: 520px;
    background-color: #CB2964;
    box-shadow: -8px 5px 30px 0px rgba(0,0,0,0.30);
  }
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    margin-top: 60px;
    width: 820px;
    font-size: 16px;
    margin-left: 100px;
  }
  .profile {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid silver;
  }
  .navbar p {
    letter-spacing: 12px;
  }
  .container-side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
  }
  .container-side a {
    text-decoration: none;
    color: white;
  }
  .container-side a:not(:last-child) {
    margin-bottom: 40px;
  }
  .icon {
    width: 30px;
    height: 30px;
  }
  @media screen and (max-width: 768px) {
    .container {
      width: 100vw;
      height: 100vh;
    }
    h1 {
      letter-spacing: 9px;
      margin-top: 30px;
    }
    .pop-card {
      margin-top: 30px;
      width: 60vw;
      height: 380px;
    }
    .navbar {
      flex-direction: column;
      margin-top: 40px;
      width: 100vw;
      font-size: 14px;
      margin-left: 50px;
    }
    .profile {
      width: 40px;
      height: 40px;
    }
    .navbar p {
      letter-spacing: 10px;
    }
    .profile {
      order: 1;
    }
    .item {
      order: 2;
      margin-top: 25px;
    }
  }
</style>