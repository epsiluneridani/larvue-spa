<style>
.v-list__tile--link:hover {
  text-decoration:none !important;
}
.activenav {
  color: #fff !important;
  background-color: #666;
}
</style>
<template>
  <v-app>
    <v-toolbar fixed app clipped-right dark :color="topTheme">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>message</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-menu v-model="topMenu" :close-on-content-click="false" :nudge-width="200" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon>
            <v-flex xs12 sm6 md8 align-center justify-center layout text-xs-center>
              <v-avatar :size="30" color="grey lighten-4">
                <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
              </v-avatar>
            </v-flex>
          </v-btn>
        </template>
        <v-card>
          <v-list>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>John Leider</v-list-tile-title>
                <v-list-tile-sub-title>Founder of Vuetify.js</v-list-tile-sub-title>
              </v-list-tile-content>

            </v-list-tile>
          </v-list>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-tile to="/panel/account">
              <v-list-tile-title>Account Preferences</v-list-tile-title>
            </v-list-tile>

            <v-list-tile to="/panel/logout">
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-menu>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-toolbar flat :color="topTheme" dark>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Application
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list>
      	<v-list-tile to="/panel/home" ripple>
        	<v-list-tile-action>
            	<v-icon>home</v-icon>
            </v-list-tile-action>
        	<v-list-tile-content>
            	Home
            </v-list-tile-content>
        </v-list-tile>
      	<v-list-tile to="/panel/about"  v-if="false==true" ripple>
        	<v-list-tile-action>
            	<v-icon>info</v-icon>
            </v-list-tile-action>
        	<v-list-tile-content>
            	About
            </v-list-tile-content>
        </v-list-tile>
      	<v-list-group prepend-icon="face" lazy>
            <template v-slot:activator>
				<v-list-tile>
                    <v-list-tile-title> Users </v-list-tile-title>
                </v-list-tile>
            </template>
            <v-list-tile to="/panel/about" ripple>
            	<v-list-tile-action>
                	<v-icon>arrow_forward</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    About
                </v-list-tile-content>
        	</v-list-tile>
            <v-list-group no-action sub-group v-if="false==true">
            	<template v-slot:activator>
					<v-list-tile>
                    	<v-list-tile-title>Test</v-list-tile-title>
                   	</v-list-tile>
            	</template>
            	<v-list-tile>
                	<v-list-tile-title>Home</v-list-tile-title>
                	<v-list-tile-action>
                    	<v-icon>home</v-icon>
                	</v-list-tile-action>
                </v-list-tile>
            </v-list-group>
         </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
  	topTheme: "primary",
    drawer: null,
    topMenu: false,
    fav: true,
    hints: true,
    message: false,
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
    source: String
  }
}
</script>