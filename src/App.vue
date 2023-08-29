<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer v-model="getDrawer" class="nav-bar">
      <v-list density="compact">
        <v-list-subheader>СТРАНИЦЫ</v-list-subheader>

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <router-link :to="{ name:item.page }">
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </router-link>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar 
    class="top-bar"
    :style="{
      background: 'linear-gradient(to right, #ffffff, #776BCC)'
    }"
    >
      <v-app-bar-nav-icon v-if="getAuth === true" v-on:click="setDrawer(!drawer)"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ getPageName }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="getAuth === true" icon v-on:click="logOut">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-layout>
</template>

<script>
import { mapState, mapMutations, mapGetters  } from 'vuex';
import api from './api/index'

export default {

  data: () => ({
      items: [
        { text: 'Создать задачу', icon: 'mdi-folder-plus-outline', page:'CreateTask' },
        { text: 'Мои поручения', icon: 'mdi-list-status', page:'MyTasks' },
        { text: 'История', icon: 'mdi-format-list-bulleted-type', page:'HistoryCreatedTasks' },
        { text: 'Выполненные задачи', icon: 'mdi-check-all', page:'CompletedTasksPage' },
      ],
    }),
  computed: {
    ...mapState(['auth', 'drawer', 'pageName']),
    ...mapGetters(['getAuth', 'getDrawer', 'getPageName']),

  },
  methods: {
    ...mapMutations(['setAuth', 'setDrawer']),

    getAuthRequest: async function() {
        const token = localStorage.getItem('token');
        if (token == null){
          this.setAuth(false)
          this.setDrawer(false)
          this.$router.push({ name: "AuthPage"})

        } else if (api.auth.tokenAuth(token) === 'false'){
          this.setAuth(false)
          this.setDrawer(false)
          this.$router.push({ name: "AuthPage"})

        } else {
          this.$router.replace(({ name: "MyTasks"}))
          this.setAuth(true)
          this.setDrawer(true)
        }
      },

      logOut(){
        this.setAuth(false)
        this.setDrawer(false)
        localStorage.clear()
        this.$router.push({ name: "AuthPage"})
      }
  },
  mounted() {
    this.getAuthRequest()
  },
}
</script>

<style>

.nav-bar{
  background: linear-gradient(150deg, #ffffff, #776BCC);
}

nav {
  padding-top: 30px;
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
</style>
