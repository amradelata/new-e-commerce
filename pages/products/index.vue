<template>
  <div class="top">
    <!-- <ul>
        <li v-for="item in todos">
          {{item.title}}
        </li>
    </ul>-->
    <v-row no-gutters class="myprodactscards">
      <v-col v-for="product in products" :key="product.id" cols="12" sm="4">
        <v-card class="ma-2 myCard" outlined tile>
          <nuxt-link :to="'/products/' + product.id">
            <div class="img" :style="{ backgroundImage: 'url(' + product.img_url + ')' }"></div>

            <v-card-title>{{product.name}}</v-card-title>
            <v-card-text>
              <div
                class="my-4 subtitle-1 black--text"
              >{{product.price + ' $'}} {{product. category}}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
              <v-btn text>Show more</v-btn>
            </v-card-actions>
          </nuxt-link>
          <!-- <button @click="fetchTodos(product.id)">click</button> -->
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  scrollToTop: true,
  data() {
    return {
      alignment: "center",
      justify: "center"
    };
  },
  computed: {
    products() {
      return this.$store.state.products.products;
    }
    // todos() {
    //   return this.$store.state.products.todos;
    // }
  },
  created() {
    this.$store.dispatch("products/fetchProducts");
    // this.$store.dispatch('products/fetchTodos')
  }
};
</script>


<style scoped>
a {
  display: block;
  color: black;
  text-decoration: none;
}
.paragraph {
  color: rgba(0, 0, 0, 0.54);
}
.myCard {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 10px !important;
  border-radius: 4px;
  padding: 0;
  overflow: hidden;
  margin: auto;
  margin-bottom: 20px;
}
.img {
  height: 250px;
  width: 100%;
  background-size: contain;
  background-position: center center;
}
@media screen and (max-width: 768px) {
  .myprodactscards {
    margin-bottom: 50px;
  }
}
</style>