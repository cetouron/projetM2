<template>
  <v-card outlined align="center">
    <v-avatar size="135" align="center">
    <v-img :src="product.image" />
    </v-avatar>
    <v-card-title>
      {{ product.name }}
    </v-card-title>
    <h3 align="center">Tarif : {{ product.price }}€/h</h3>

    <v-row align="center" justify="center">
          <v-card-actions class="pa-4" align="center">
          
            <v-rating
              :value="product.note"
              background-color="white"
              color="yellow accent-4"
              readonly
              dense
              half-increments
              hover
              size="25"
            ></v-rating>
          </v-card-actions>
        </v-row>

    <!-- <v-card-subtitle> ${{ product.price }} </v-card-subtitle> -->

    <v-row justify="center">
      <v-dialog v-model="dialog" width="1200px" hight="1200px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="couleurPrimaire btnCard" dark v-bind="attrs" v-on="on">
            Voir le profil
          </v-btn>
        </template>
        <v-card>
          <Profil :product="product" />
        </v-card>
      </v-dialog>
    </v-row>
  </v-card>
</template>

<script>
import VueTypes from "vue-types";
import Profil from "@/components/profil/Profil.vue";

export default {
  components: {
    Profil,
  },
  props: {
    product: VueTypes.shape({
      name: VueTypes.string.isRequired,
      price: VueTypes.number.isRequired,
      image: VueTypes.string.isRequired,
    }),
    addToCart: VueTypes.func.isRequired,
    i: VueTypes.integer.isRequired,
  },
};
</script>
