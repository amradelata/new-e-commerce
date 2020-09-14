<template>
  <div class="contenir">
    <div class="singleproduct">
      <div class="halfdev">
        <div class="singlimg" :style="{backgroundImage: 'url('+single.img_url+')'}"></div>
      </div>
      <div class="halfdev">
        <div class="singlecontent">
          <h1>{{single.name}}</h1>
          <p>{{single.description}}</p>
          <span class="price">{{single.price + ' $'}}</span>
          <nuxt-link :to="'/cart'">
            <v-btn class="btn" @click="addToCart(i = single.id)">addto cart</v-btn>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      products: [],
      mylocalStorageCard: [],
      mylocalStorageQty: 0,
      mylocalStorageTolalPrice: 0
    };
  },
  computed: {
    single() {
      return this.$store.state.products.single;
    }
  },
  mounted() {
    //when i refresh  git my cart data from localStorage
    this.mylocalStorageCard = JSON.parse(localStorage.getItem("cart"));
    this.mylocalStorageTolalPrice = localStorage.getItem("totalprice");
    this.mylocalStorageQty = localStorage.getItem("qty");
  },
  created() {
    this.$store.dispatch("products/fetchSinglePage", this.id);
  },
  methods: {
    addToCart(single) {
      this.$store.commit("products/addToCart", single);
      // this.$store.commit("products/totalPrice", single);
    }
  }
};
</script>

<style scoped>
.btn {
  margin: 50px 0 !important;
}
a {
  text-decoration: none;
}
.contenir {
  padding: 0 100px;
}
.price {
  font-size: 35px;
  color: #3ace40;
  display: block;
}
.halfdev h1 {
  padding-top: 100px;
}
.singleproduct {
  /* border: 1px solid #000; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
}
.singlimg {
  /* border: 1px solid #000; */
  height: 500px;
  width: 700px;
  margin-top: 50px;
  background-size: contain;
}

@media screen and (max-width: 768px) {
  .singleproduct {
    display: block;
    text-align: center;
  }
  .singlimg {
    width: 100%;
    margin-top: 0;
    margin-bottom: 35px;
  }
  .halfdev h1 {
    padding-top: 0;
  }
  .contenir {
    padding: 0 15px;
  }
  .price {
    font-size: 35px;
    display: block;
  }
}
</style>