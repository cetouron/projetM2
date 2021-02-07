<template>
  <div>
    <v-app-bar>
      <v-toolbar-side-icon>
        <v-img src="/img/products/logomin.png" />
      </v-toolbar-side-icon>

      <v-toolbar-title>Tut'up</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- mobile menu button -->
      <span class="hidden-sm-and-up">
        <v-btn @click.stop="drawer = !drawer"> Menu </v-btn>
      </span>

      <!-- desktop & tablet menu -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" >
          <v-icon>mdi-home</v-icon>
          Accueil
        </v-btn>
        <!--      <v-btn to="store" text>
        <v-icon>mdi-store</v-icon>
          Store
        </v-btn> -->

        <v-btn v-if="this.pfl!='pasco'" to='recherche'>
          <v-icon>mdi-feature-search</v-icon>
          Recherche
        </v-btn>

       
          <v-btn v-if="this.pfl!='pasco'" to='chat'>
          <v-icon>mdi-message</v-icon>
          Messagerie
        </v-btn>

<!--Affichage conditionnel à faire -->

 <v-btn v-if="this.pfl=='Tuteur'" to='profilTuteur'>
          <v-icon>mdi-account</v-icon>
          Profil
        </v-btn>

       

<v-btn v-if="this.pfl=='Eleve'" to='profilEleve'>
          <v-icon>mdi-account</v-icon>
          Profil
        </v-btn>

        <v-btn class="couleurPrimaire" v-if="this.pfl=='Eleve'">
          <v-icon>mdi-star</v-icon>
          Premium
        </v-btn>

<v-btn  v-if="this.pfl=='pasco'" to='connexion'>
          <v-icon>mdi-account</v-icon>
          Connexion
        </v-btn>

        <v-btn  v-if="this.pfl=='pasco'" to='inscription'>
          <v-icon>mdi-account</v-icon>
          Inscription
        </v-btn>


        <!--     <v-btn @click="show = !show" text>
          <v-icon>mdi-message</v-icon>
          Message
        </v-btn> -->

        <!--
        <v-btn to="connexion" text>
          <v-icon>mdi-account</v-icon>
          Connexion
        </v-btn> -->
      </v-toolbar-items>
    </v-app-bar>

<!--    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> --> 
  </div>
</template>

<script>

import { mapState, mapMutations } from "vuex";


export default {
  components: {
  
  },
    computed: {
    ...mapState(["pfl"]),
  },
  methods: {
    mssg: function () {
      this.showP = false;
      this.showPT = false;
      this.show = !this.show;
    },
    prfl: function () {
      this.show = false;
      this.showPT = false;
      this.showP = !this.showP;
    },
    prflT: function () {
      this.show = false;
      this.showP = false;
      this.showPT = !this.showPT;
    },
  },
  data() {
    return {
      drawer: false,
      show: false,
      showP: false,
      showPT: false,
      items: [
        { title: "Home", link: "/", icon: "home" },
        { title: "Store", link: "store", icon: "store" },
        { title: "Cart", link: "cart", icon: "cart" },
        { title: "Recherche", link: "recherche", icon: "feature-search" },
        { title: "Mesagerie", link: "chat", icon: "message" },

      ],
    };
  },
};
</script>
