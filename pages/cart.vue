<template>
  <div>
    <div class="hied" v-show="!$store.state.products.cart.length">
      <i>Please add some products to cart.</i>
      <nuxt-link to="/products">
        <v-btn class="thankYouBtn">back to shopping</v-btn>
      </nuxt-link>
      <img
        class="empyimg"
        src="https://images.pexels.com/photos/296916/pexels-photo-296916.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      />
    </div>

    <div v-if="$store.state.products.cart.length > 0">
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
        <div class="supCard" v-if="item.quantity > 1">
          <v-btn @click="deletItemfromcart(index)">delet</v-btn>
          <v-btn @click="addToqty(index)">+1</v-btn>
          <v-btn @click="remvQty(index)">-1</v-btn>
        </div>
        <div v-else>
          <v-btn @click="deletItemfromcart(index)">delet</v-btn>
          <v-btn @click="addToqty(index)">+1</v-btn>
        </div>
      </div>

      <div class="totalPrice">
        <span style="display:inline">Total price:</span>
        <h2 style="color:#006fcc; display:inline">{{this.totalPrice}} $</h2>
        <!-- <span style="display:inline">Total Items:</span>
        <h2 style="color:#006fcc; display:inline">{{this.totalItems}}</h2>-->
        <v-btn class="cartbtn" @click="toPayment">Proceed to checkout</v-btn>
      </div>
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
    },
    toPayment() {
      if (localStorage.getItem("status") != null) {
        this.$router.replace("/payment");
      } else {
        this.$router.replace("/signIn");
      }
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
.content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.content span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 300%);
  width: 100%;
  text-align: center;
}

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
.hied {
  text-align: center;
}
.hied button,
.hied i {
  margin: 20px;
}
.hied img {
  width: 100%;
  height: 100%;
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