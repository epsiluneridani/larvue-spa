<template>
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
</template>
<script>
	export default {
    	data(){
        	return {}
        }
    }
</script>