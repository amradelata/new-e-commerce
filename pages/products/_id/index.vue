<template>
  <div>
    <div class="singleproduct">
      <div class="halfdev">
        <h1>{{single.name}}</h1>
        <div class="singlimg" :style="{backgroundImage: 'url('+single.img_url+')'}"></div>
      </div>
      <div class="halfdev">
        <div class="singlecontent">
          <p>{{single.description}}</p>
          <span>{{single.price}}</span>
          <nuxt-link :to="'/cart'">
            <button @click="addToCart(single)">addto cart</button>
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
      products: []
    };
  },
  computed: {
    single() {
      return this.$store.state.products.single;
    }
  },
  created() {
    this.$store.dispatch("products/fetchSinglePage", this.id);
  },
  methods: {
    addToCart(single) {
      this.$store.commit("products/addToCart", single);
      this.$store.commit("products/totalPrice", single);
    }
  }
};
</script>

<style scoped>
.singleproduct {
  display: flex;
  flex-wrap: wrap;
}

.halfdev {
  flex-basis: calc(50% - 20px);
  display: inline-block;
  margin: 10px;
  overflow: hidden;
}
.halfdev h1 {
  margin-top: 50px;
  margin-left: 119px;
}
.halfdev span {
  display: block;
  margin: 35px 0;
}
.halfdev button {
  border: 1px solid #ccc;
  padding: 20px;
}
.singlecontent {
  padding: 300px 35px;
}
.singlimg {
  height: 500px;
  background-size: contain;
  background-position: center center;
}
@media screen and (max-width: 768px) {
  .singlecontent {
    padding: 35px 0;
  }
  .halfdev {
    flex-basis: calc(100% - 20px);
  }
  .singlimg {
    height: 228px;
  }
  .singleproduct {
    margin-top: 100px;
    text-align: center;
  }
  .halfdev h1 {
    margin-top: 0;
    margin-left: 0;
  }
}
</style>