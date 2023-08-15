<template>
  <div class="header">
    <div class="header_section">
      <div class="header_item header_logo">
        UmbrellaPix
      </div>
      <div class="header_item header_button">
        <router-link to="/">Auth</router-link>
      </div>
      <div class="header_item header_button">
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <div class="header_section">
      <div class="header_item header_button">
        <a href="#">Настройки</a>
      </div>
      <div class="header_item header_button">
        <a href="#">Войти</a>
      </div>
    </div>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

a{
 color: white;
 text-decoration: none; 
}
.header{
  display: flex;
  justify-content: space-between;
  background-color: #689cd2;
  padding: 10px;
  font-family: 'Times New Roman', Times, serif;
}
.header_section{
  display: flex;
  align-items: center;
}
.header_item{
  padding: 10px 15px;
  font-size: 20px;
  margin-left: 5px;
}
.header_item:hover{
  background-color: #ff9900;
  border-radius: 4px;
}
.header_logo{
  font-weight: bold;
}
.headerButton{
  cursor: pointer;
}
</style>
