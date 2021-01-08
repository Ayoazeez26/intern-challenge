<template>
  <div class="container">
    <div class="container-center">
      <h1>AQUILA AVEION</h1>
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
      <a href="https://www.instagram.com">Insta Link</a>
      <font-awesome-icon :icon="['fab', 'instagram']" />
    </div>
  </div>
</template>
npm install --save axios vue-axios
<script>
export default {
  name: 'Landing'
}
</script>


<style>
  .container {
    width : 1440px;
    height : 900px;
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
</style>