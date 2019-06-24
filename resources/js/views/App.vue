<style>
    .v-list__tile--link:hover {
        text-decoration:none !important;
        color: #fff;
    }
    .activenav {
        color: #fff !important;
        background-color: #666;
    }
</style>
<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
      dark
    >
      <v-list>
        <v-list-tile v-for="navitem in navlinks" active-class="activenav" :key="navitem.name"
        :to="navitem.to"  ripple>
          <v-list-tile-action>
            <v-icon>{{ navitem.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ navitem.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left color="blue" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
        <v-container fluid>
        <v-fade-transition mode="out-in">
      <router-view></router-view>
      </v-fade-transition>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      navlinks : [
          {
              to: '/panel/home',
              name : 'Home',
              icon : 'dashboard'
          },
          {
              to: '/panel/about',
              name: 'About',
              icon: 'settings'
          }
      ]
    }),
    props: {
        
    }
  }
</script>