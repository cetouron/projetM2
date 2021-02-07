<template>
  <v-sheet
    :height="sheetHeight"
    class="overflow-hidden"
    style="position: relative"
  >
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <img
          src="../../../public/img/video.jpg"
          alt="Vidéo de présentation Tut'Up"
          width="100%"
        />
        <img
          src="../../../public/img/down.png"
          alt="scrollDown"
          width="5%"
          style="margin: 20px"
        />
        <!-- <h1 class="display-3 hidden-xs-only">Tut'up</h1>
        <h1 class="text-center display-1 hidden-sm-and-up">
          Bienvenue sur Tut'up, le rendez-vous de la réussite.
        </h1> -->
        <div class="flexContain mainHome">
          <img src="../../../public/img/qqtutup.jpg" />
          <div>
            <h2>Qu'est-ce que Tut'Up ?</h2>
            <div>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim velit mollit. Exercitation veniam consequat
            </div>
            <v-btn class="couleurPrimaire" dark v-bind="attrs" v-on="on">
              Créer un compte
            </v-btn>
          </div>
        </div>
        <div class="mainValeur">
          <h2>Nos valeurs</h2>
          <div class="flexContain">
            <div class="valeur">
              <img
                src="../../../public/img/valeur1.png"
                alt="Valeur1"
                width="30%"
              />
              <p>nsequat sunt nostrud amet.</p>
            </div>
            <div class="valeur">
              <img
                src="../../../public/img/valeur2.png"
                alt="Valeur2"
                width="30%"
              />
              <p>nsequat sunt nostrud amet.</p>
            </div>
            <div class="valeur">
              <img
                src="../../../public/img/valeur3.png"
                alt="Valeur3"
                width="30%"
              />
              <p>nsequat sunt nostrud amet.</p>
            </div>
          </div>
        </div>
        <div class="flexContain mainHome">
          <div>
            <h2>Pourquoi nous choisir ?</h2>
            <div>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim velit mollit. Exercitation veniam consequat
            </div>
            <v-btn class="couleurPrimaire" dark v-bind="attrs" v-on="on" to='FAQ'>
              Notre FAQ
            </v-btn>
          </div>
          <img src="../../../public/img/titre.jpg" width="40%" />
        </div>
      </v-row>
    </v-container>
  </v-sheet>
</template>

// <script>
// export default {
//   computed: {
//     sheetHeight() {
//       switch (this.$vuetify.breakpoint.name) {
//         case "xs":
//           return "200px";
//         case "sm":
//           return "300px";
//         case "md":
//           return "300px";
//         case "lg":
//           return "300px";
//         case "xl":
//           return "350px";
//       }
//       return "300px";
//     },
//   },
// };
//
</script>
