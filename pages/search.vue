<template>
  <div class="top">
    <h3 class="found">{{this.prodactSearch.length+' - products found '}}</h3>
    <v-row no-gutters>
      <v-col v-for="product in prodactSearch" :key="product.id" cols="12" sm="4">
        <v-card class="ma-2 myCard" outlined tile>
          <nuxt-link :to="'products/' + product.id">
            <div class="img" :style="{ backgroundImage: 'url(' + product.img_url + ')' }"></div>

            <v-card-title>{{product.name}}</v-card-title>
            <v-card-text>
              <div
                class="my-4 subtitle-1 black--text"
              >{{product.price + ' $'}} {{product. category}}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
              <v-btn text>Shoew More</v-btn>
            </v-card-actions>
          </nuxt-link>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import axios from "axios";
const API = "https://vue-e-commerce-databse.herokuapp.com/products";
export default {
  props: [],
  data() {
    return {
      prodactSearch: []
    };
  },
  async created() {
    this.search();
  },
  // computed: {
  //   test() {
  //     return this.$route.query.test;
  //   }
  // },
  watch: {
    // test(to, from) {
    //   this.search();
    // }
    "$route.query": {
      immediate: true,
      handler() {
        this.search();
      }
    }
  },
  methods: {
    async search() {
      const res = await axios.get(
        API + "/" + "?name_like=" + this.$route.query.test
      );
      this.prodactSearch = res.data;
      console.log(this.prodactSearch.length);
    }
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
.found {
  text-align: center;
}
</style>
