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
        <user-menu/>
      </v-menu>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-toolbar flat :color="topTheme" dark>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
            	Lar<span class="font-weight-thin">Vue</span>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list>
      	<v-subheader>General</v-subheader>
      	<v-list-tile to="/panel/home" ripple>
        	<v-list-tile-action>
            	<v-icon>dashboard</v-icon>
            </v-list-tile-action>
        	<v-list-tile-content>
            	Dashboard
            </v-list-tile-content>
        </v-list-tile>
      	<v-list-tile ripple>
        	<v-list-tile-action>
            	<v-icon>receipt</v-icon>
            </v-list-tile-action>
        	<v-list-tile-content>
            	Reports
            </v-list-tile-content>
        </v-list-tile>
      	<v-divider/>
      	<v-subheader>Administration</v-subheader>
      	<v-list-tile ripple>
        	<v-list-tile-action>
            	<v-icon>wb_cloudy</v-icon>
            </v-list-tile-action>
        	<v-list-tile-content>
            	Servers
            </v-list-tile-content>
        </v-list-tile>
      	<v-list-tile ripple>
        	<v-list-tile-action>
            	<v-icon>bubble_chart</v-icon>
            </v-list-tile-action>
        	<v-list-tile-content>
            	Services
            </v-list-tile-content>
        </v-list-tile>
      	<v-divider/>
      	<v-subheader>Account Manager</v-subheader>
      	<v-list-tile ripple>
        	<v-list-tile-action>
            	<v-icon>group</v-icon>
            </v-list-tile-action>
        	<v-list-tile-content>
            	Clients
            </v-list-tile-content>
        </v-list-tile>
      	<v-list-tile ripple>
        	<v-list-tile-action>
            	<v-icon>description</v-icon>
            </v-list-tile-action>
        	<v-list-tile-content>
            	Package
            </v-list-tile-content>
        </v-list-tile>
      	<v-divider/>
      	<v-subheader>System</v-subheader>
      	<v-list-tile ripple>
        	<v-list-tile-action>
            	<v-icon>face</v-icon>
            </v-list-tile-action>
        	<v-list-tile-content>
            	Users
            </v-list-tile-content>
        </v-list-tile>
      	<v-list-tile ripple>
        	<v-list-tile-action>
            	<v-icon>verified_user</v-icon>
            </v-list-tile-action>
        	<v-list-tile-content>
            	Roles
            </v-list-tile-content>
        </v-list-tile>
      	<v-list-tile ripple>
        	<v-list-tile-action>
            	<v-icon>domain</v-icon>
            </v-list-tile-action>
        	<v-list-tile-content>
            	OAuth
            </v-list-tile-content>
        </v-list-tile>
      	<v-list-tile ripple>
        	<v-list-tile-action>
            	<v-icon>build</v-icon>
            </v-list-tile-action>
        	<v-list-tile-content>
            	Configuration
            </v-list-tile-content>
        </v-list-tile>
      	<v-list-tile ripple>
        	<v-list-tile-action>
            	<v-icon>info</v-icon>
            </v-list-tile-action>
        	<v-list-tile-content>
            	System Information
            </v-list-tile-content>
        </v-list-tile>
      	<v-list-group prepend-icon="face" v-if="1!=1" lazy>
            <template v-slot:activator>
				<v-list-tile>
                    <v-list-tile-title> Users </v-list-tile-title>
                </v-list-tile>
            </template>
        	<v-list-tile ripple>
            	<v-list-tile-action>
                	<v-icon>arrow_forward</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    List Users
                </v-list-tile-content>
        	</v-list-tile>
            <v-list-tile ripple>
            	<v-list-tile-action>
                	<v-icon>arrow_forward</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    Add User
                </v-list-tile-content>
        	</v-list-tile>
        	<v-list-tile ripple>
            	<v-list-tile-action>
                	<v-icon>arrow_forward</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    Edit User
                </v-list-tile-content>
        	</v-list-tile>
        	<v-list-tile ripple>
            	<v-list-tile-action>
                	<v-icon>arrow_forward</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    Remove User
                </v-list-tile-content>
        	</v-list-tile>
        	<v-list-tile ripple>
            	<v-list-tile-action>
                	<v-icon>arrow_forward</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    Update Role
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
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue'
const UserMenu = () => import('@/js/components/UserMenu');
Vue.component('user-menu', UserMenu );

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
  },
  mounted(){
  	
  }
}
</script>