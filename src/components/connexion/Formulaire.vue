<template>
 <div>
    <v-breadcrumbs :items="links">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
   <h1>Connectez-vous</h1>
  <v-card
    class="mx-auto"
    max-width="500"
    outlined
  >
  <div class="text-center mx-16">
    <v-img 
      src="https://aplustudents.com/images/user1.png"
      height="200px"
      width="200px"
      
    ></v-img>
   </div>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
       prepend-icon="mdi-email"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      type="password"
      :counter="20"
      :rules="passwordRules"
      label="Mot de passe"
      prepend-icon="mdi-lock"
      required
    ></v-text-field>


         <v-btn-toggle v-model="profil" tile color="deep-white accent-3" group>
          <v-btn value="eleve"> Elève </v-btn>

          <v-btn value="tuteur"> Tuteur </v-btn>
        </v-btn-toggle>

    <v-btn block
      color="success"
      class="mr-4"
      @click="validate"
    >
      Connecter
    </v-btn>
   <br />

    <v-btn block
      color="warning"
      @click="reset"
    >
      Annuler
    </v-btn>
    <br />
    <v-btn block Link to="/inscription">
    Créer un compte
  </v-btn>
  
  </v-form>
  </v-card>


  <br />
   </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
  export default {
    data: () => ({
     links: [{text: 'Home', to: '/'},{text: 'Connexion', to: '/connexion'}],
      valid: true,
      password: '',
      profil: '',
      passwordRules: [
        v => !!v || 'Le mot de passe est requis',
        v => (v && v.length <= 20) || 'Le mot de passe doit être de moins de 20 caractères',
      ],
      email: '',
      emailRules: [
        v => !!v || 'L\'email est requis',
        v => /.+@.+\..+/.test(v) || 'L\'email doit être valide',
      ],
      
    }),
    computed: {
    ...mapState(["pfl"]),
  },
    methods: {
      validate () {
      if (this.profil == 'eleve') {
                  this.$store.state.pfl='Eleve',
                this.updateprofil('Eleve'),

          this.$router.push({name: 'recherche'})
        }
        if (this.profil == 'tuteur') {
              this.updateprofil('Tuteur'),
                    this.$store.state.pfl='Tuteur',

          this.$router.push({name: 'profilTuteur'})
        }
        },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      ...mapMutations(['updateprofil']),
    },
  }
</script>