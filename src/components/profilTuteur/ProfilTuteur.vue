<template>
  <v-row>
          <v-row>
    <v-col>
      <v-card
        class="mx-auto elevation-20"
        color="blue"
        dark
        align="center"
        max-width="600"
        sm="12"
        md="12"
        lg="12"
      >
        <v-col>
          <v-avatar size="136" align="center">
            <img src="img/products/murielle.jpg" style="margin-bottom: 10px" />
          </v-avatar>

          <br />
          <h1>Murielle</h1>

          <v-row align="center" justify="center">
            <v-card-actions class="pa-4" align="center">
              <v-spacer></v-spacer>
              <span class="grey--text text--lighten-2 caption mr-1">
                (3.2) </span
              ><!--   -->
              <v-rating
                :value="3.2"
                background-color="black"
                color="yellow accent-4"
                readonly
                dense
                half-increments
                hover
                size="35"
              ></v-rating>
            </v-card-actions>
          </v-row>

          <h4 class="black--text text--lighten-2 mr-1">12 avis</h4>

          <br />

          <v-col>
            <v-select
              v-model="value"
              :items="items"
              chips
              label="Matières"
              multiple
              outlined
            ></v-select>
          </v-col>

          <v-col cols="12" class="text-center">
            <v-textarea
              v-model="bio"
              auto-grow
              filled
              color="deep-purple"
              label="Ma bio"
              rows="1"
              max-widht="200"
            ></v-textarea>

            <v-textarea
              v-model="formation"
              auto-grow
              filled
              color="deep-purple"
              label="Mes formations"
              rows="1"
            ></v-textarea>

            <v-textarea
              v-model="autre"
              auto-grow
              filled
              color="deep-purple"
              label="Autre"
              rows="1"
            ></v-textarea>
          </v-col>
        </v-col>
      </v-card>
    </v-col>
    <v-col>
      <h2>Commentaires</h2>

      <div v-for="messages in comm" :key="messages.id">
        <v-card
          class="mx-auto elevation-20 couleurPrimaire comProfilTuteur"
          color="white"
          dark
          align="left"
          justify="left"
        >
          <span
            class="black--text text--lighten-2 mr-1"
            align="right"
            justify="right"
          >
            <v-row>
              <v-col>
                <span class="font-weight-bold" align="right"
                  >{{ messages.id }} vous a noté {{ messages.note }} :
                </span>
              </v-col>
              <v-col>
                <v-rating
                  :value="messages.note"
                  background-color="black"
                  color="white accent-4"
                  readonly
                  half-increments
                  size="20"
                ></v-rating>
              </v-col>
            </v-row>
            {{ messages.content }}
          </span>
        </v-card>
        <br />
      </div>
    </v-col> 
     </v-row>

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
      items: [
        "Mathémathique",
        "Français",
        "Anglais",
        "Espagnol",
        "SVT",
        "Italien",
        "Physique-Chimie",
        "Philosophie",
        "Histoire",
        "Géographie",
      ],
      comm: [
        {
          id: "Michel73",
          content: "Mon commentaire sur le personne, très bien",
          note: "4",
        },
        { id: "Julie32", content: "Super merci", note: "4.5" },
        { id: "Corentin", content: "Bravo pour votre entrain", note: "4" },
        {
          id: "Elise",
          content: "THate de reprendre contact pour un cours",
          note: "5",
        },
        { id: "Edith", content: "A très vite !", note: "4.5" },
        {
          id: "Nicolas",
          content: "Merci beaucoup grâce à vous j'ai évolué",
          note: "3.5",
        },
      ],
      value: ["Mathémathique", "Italien", "Physique-Chimie", "Géographie"],
    };
  },
    methods: {
    deco: function () {
      this.$store.state.pfl = 'pasco';
                this.$router.push({name: 'home'})

    },
  },
  props: {},
};
</script>