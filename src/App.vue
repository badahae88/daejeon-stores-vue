<template>
  <nav>
    <div class="projectName">
      <router-link to="/"><img src="@/assets/logo.png">대전상가조회</router-link>
    </div>
    <div class="nav-container">
      <router-link to="/">대전전체</router-link> |
      <router-link to="/daedeok">대덕구</router-link> |
      <router-link to="/dong">동구</router-link> |
      <router-link to="/joong">중구</router-link> |
      <router-link to="/seo">서구</router-link> |
      <router-link to="/yuseong">유성구</router-link> 
    </div>
  </nav>

  <router-view/>

</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Orbit&display=swap');

body,html{
  margin:0;
  padding:0;
}
#app {
  text-align: center;
  font-family: 'Orbit', sans-serif;
  background: #f6f6f6;
  width:100vw;
  min-height: 100vh
}
.projectName{
  width:100%;
  font-size: 2rem;
  height: 3rem;
  align-items: center;
  background: #ffe744
}
.projectName img{
  height: 2rem;
  margin-right: 0.5rem;
}
.nav-container{
  width: 100%;
  height: 2rem;
  background: #fffbb6;
  color: white;
}
a{
  text-decoration: none;
  color: black;
}
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
