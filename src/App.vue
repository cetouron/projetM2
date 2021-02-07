<template>
  <v-app>
    <TopNav :data='data'/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-snackbar
      v-model="snackbar.show"
      :multi-line="true"
      :right="true"
      :top="true"
      :timeout="6000"
      :color="snackbar.variant"
    >
      {{ snackbar.message }}
      <v-btn
        dark
        text
        @click="updateSnackbar({show: false})"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import TopNav from './components/TopNav.vue'

export default {
  data() {
    return {
      data: {
        profil : this.$jambon,
      }
    }
  },
  name: 'app',
  components: {
    TopNav
  },
  computed: {
    ...mapState(['snackbar'])
  },
  methods: {
    ...mapMutations(['updateSnackbar'])
  }
}
</script>
