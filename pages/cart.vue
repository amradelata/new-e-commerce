<template>
  <div>
    <div class="dadCrds" v-for="(item , index) in this.cartItems" :key="item.id">
      <div class="supCard">
        <div class="cardimgimg" :style="{backgroundImage: 'url('+item.img_url+')'}"></div>
      </div>
      <div class="supCard">
        <span>{{item.name}}</span>
        <span>{{item.price}}$</span>
        <span>{{item.quantity+" : qty"}}</span>
        <nuxt-link :to="'/products/' + item.id">
          <i class="fas fa-info">poen product</i>
        </nuxt-link>
      </div>
      <div class="supCard">
        <v-btn @click="deletItemfromcart(index)">delet</v-btn>
        <v-btn @click="addToqty(index)">+1</v-btn>
        <v-btn @click="remvQty(index)">-1</v-btn>
      </div>
    </div>

    <div class="totalPrice">
      <span style="display:inline">Total price:</span>
      <h2 style="color:#006fcc; display:inline">{{this.totalPrice}} $</h2>
      <!-- <span style="display:inline">Total Items:</span>
      <h2 style="color:#006fcc; display:inline">{{this.totalItems}}</h2>-->
      <v-btn class="cartbtn">Proceed to checkout</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // cartItems: this.$store.state.products.cart,
      // totalPrice: this.$store.state.products.totalPrice,
      // totalItems: this.$store.state.products.cartCount
      cartItems: [],
      totalPrice: 0,
      totalItems: 0
    };
  },
  methods: {
    deletItemfromcart(index) {
      this.$store.commit("products/deletItemfromcart", index);
      this.$store.commit("products/totalPrice");
    },
    addToqty(index) {
      this.$store.commit("products/addToqty", index);
      this.$store.commit("products/totalPrice");
    },
    remvQty(index) {
      this.$store.commit("products/remvQty", index);
      this.$store.commit("products/totalPrice");
    }
  },
  mounted() {
    this.cartItems = JSON.parse(localStorage.getItem("cart"));
    this.totalPrice = JSON.parse(localStorage.getItem("mytotalPrice"));
    this.totalItems = JSON.parse(localStorage.getItem("cartCount"));
    console.log(this.cartItems);
  }
};
</script>

<style scoped>
/* how to center text in html vertically horizontally with display flex */
.dadCrds,
.totalPrice {
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
}
.totalPrice h2 {
  margin: 20px;
}
.totalPrice .cartbtn {
  margin: 35px;
}

.cardimgimg {
  height: 200px;
  background-size: contain;
  background-position: center center;
}
.supCard {
  flex-basis: calc(33.333% - 20px);
  display: inline-block;
  margin: 10px;
}
.supCard span {
  margin: 0 35px;
}
@media screen and (max-width: 768px) {
  .supCard {
    flex-basis: calc(100% - 20px);
  }
  .supCard span {
    margin: 0;
    display: block;
    margin: 20px 0;
  }
}
</style>