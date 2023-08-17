<template>
  <div class="header">
    <div class="header_section">
      <div class="header_item header_logo">
        UmbrellaPix©
      </div>
        <div v-if="getAuth === true" class="header_item header_button">
          <router-link to="/create-task">Добавить задачу</router-link>
        </div>
        <div v-if="getAuth === true" class="header_item header_button">
          <router-link to="/my-tasks">Задачи на выполнение</router-link>
        </div>
        <div v-if="getAuth === true" class="header_item header_button">
          <router-link to="/completed-tasks">Выполненные задачи</router-link>
        </div>
        <div v-if="getAuth === true" class="header_item header_button">
          <router-link to="/history-created-tasks">История созданных задач</router-link>
        </div>
      </div>
      <div class="header_section">
        <div class="header_item header_button">
          <SettingsForm />
        </div>
        <div v-if="getAuth === true" class="header_item header_button">
          <button v-on:click="logOut">Выйти</button>
        </div>
    </div>
  </div>
  <div class="page">
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters  } from 'vuex';
import SettingsForm from './components/SettingsForm.vue'
import api from './api/index'

export default {
  components:{
    SettingsForm,
  },
  computed: {
    ...mapState(['auth']),
    ...mapGetters(['getAuth'])
  },
  methods: {
    ...mapMutations(['setAuth']),

    getAuthRequest: async function() {
        const token = localStorage.getItem('token');
        if (token == null){
          this.setAuth(false)
          this.$router.push({ name: "AuthPage"})

        } else if (api.auth.tokenAuth(token) === 'false'){
          this.setAuth(false)
          this.$router.push({ name: "AuthPage"})

        } else {
          this.setAuth(true)
        }
      },

      logOut(){
        this.$router.push({ name: "AuthPage"})
        this.setAuth(false)
        localStorage.clear()
      }
  },
  mounted() {
    this.getAuthRequest()
  },
}


</script>

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
.page{
  height: 10%;
}
.header{
  display: flex;
  justify-content: space-between;
  background: linear-gradient(90deg, #776BCC, #C7C5F4);
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
