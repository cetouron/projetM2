<template>
  <v-row>
    <v-card
      class="mx-auto elevation-20"
      color="blue"
      dark
      align="center"
      max-width="1200"
      width="1200"
      sm="12"
      md="12"
      lg="12"
    >
      <v-col>
        <v-avatar size="136" align="center">
          <img src="img/products/gerard.jpg" style="margin-bottom: 10px" />
        </v-avatar>

        <br />
        <h1>Gérard</h1>

        <h4 class="black--text text--lighten-2 mr-1">2 avis laissés</h4>

        <br />

        <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group>
          <v-btn value="parent"> Parent </v-btn>

          <v-btn value="eleve"> Elève </v-btn>
        </v-btn-toggle>

        <v-col cols="12" class="text-center" v-if="text == 'parent'">
          <div v-for="messages in enft.slice(0, nbEnft)" :key="messages.nom">
            <div v-if="messages.nom != ''">
              <v-text-field
                v-model="messages.nom"
                :rules="nameRules"
                label="Nom de l'enfant :"
                required
              ></v-text-field>
              <v-textarea
                v-model="messages.content"
                auto-grow
                filled
                color="deep-purple"
                label="Sa description"
                rows="1"
              ></v-textarea>
            </div>

            <div v-else>
              <v-text-field
                :rules="nameRules"
                label="Nom de l'enfant :"
                required
              ></v-text-field>
              <v-textarea
                auto-grow
                filled
                color="deep-purple"
                label="Sa description"
                rows="1"
              ></v-textarea>
            </div>
          </div>

          <v-btn @click="Enftplus()" class="couleurPrimaire">
            <v-icon large color="blue darken-2">mdi-plus</v-icon>
            <span large color="blue darken-2"> Ajouter un enfant</span>
          </v-btn>
        </v-col>

        <v-col cols="12" class="text-center" v-if="text == 'eleve'">
          <v-textarea
            v-model="description"
            auto-grow
            filled
            color="deep-purple"
            label="Ma description"
            rows="1"
          ></v-textarea>
        </v-col>
      </v-col>
    </v-card>
          <v-col>
             <v-btn @click="deco()" class="red">
            <span large color="blue darken-2"> Déconnexion</span>
          </v-btn>
      </v-col>
  </v-row>
</template>


<script>
export default {
  data() {
    return {
      dialog: false,
      text: "parent",
      nbEnft: 2,
      enft: [
        {
          nom: "Clément",
          content: "13 ans en cinquième, a du mal à se concentrer",
          age: "4",
        },
        {
          nom: "Melanie",
          content:
            "15 ans en seconde, plutôt bonne mais jamais contre quelques cours particulier",
          age: "4.5",
        },
        { nom: "", content: "", age: "" },
        { nom: "", content: "", age: "" },
        { nom: "", content: "", age: "" },
        { nom: "", content: "", age: "" },
      ],
    };
  },
  props: {},
  methods: {
    Enftplus: function () {
      this.nbEnft = this.nbEnft + 1;
    },
    deco: function () {
      this.$store.state.pfl = 'pasco';
              this.$router.push({name: 'home'})

    },
  },
};
</script>