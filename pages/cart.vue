<template>
  <div class="cartpage">
    <div class="asd">
      <!-- <h2 class>all item/s {{getMyQty}}</h2> -->
      <h2 class="head">Shopping Cart</h2>
      <hr />
      <div class="supheds">
        <h4>Product Details</h4>
        <h4>Quantity</h4>
        <h4>Price</h4>
      </div>
      <div class="carts" v-for="(item,index) in getmylocalStorageCard" :key="item.id">
        <div class="cart">
          <p class>{{item.name}}</p>
          <div class="cardimgimg" :style="{backgroundImage: 'url('+item.img_url+')'}"></div>
        </div>
        <div class="cart">
          <p class="quantity">{{"quantity : "+item.quantity}}</p>
          <div class="cartbuttons">
            <v-btn @click="mydelete(index)">delete</v-btn>
            <v-btn v-if="item.quantity" @click="removefromquantty(index)">-</v-btn>
            <v-btn @click="addtoquantty(index)">+</v-btn>
          </div>
        </div>
        <div class="cart">
          <p class="price">{{"price : "+item.price}}$</p>
        </div>
      </div>
      <div class="totalprice">
        <p>{{ ' total price : ' + getMyTotalPrice }}$</p>
        <!-- <v-btn v-if="getMyQty != 0 " @click="goTooPayment()">Proceed to checkout</v-btn> -->
        <v-btn
          class="ma-2"
          tile
          outlined
          color="success"
          v-if="getMyQty != 0 "
          @click="goTooPayment()"
        >
          Proceed to checkout
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mylocalStorageCard: [],
      mylocalStorageQty: 0,
      mylocalStorageTolalPrice: 0
    };
  },
  computed: {
    getMyQty() {
      return this.$store.state.products.mylocalStorageQty;
    },
    getMyTotalPrice() {
      return this.$store.state.products.mylocalStorageTolalPrice;
    },
    getmylocalStorageCard() {
      return this.$store.state.products.mylocalStorageCard;
    }
  },
  mounted() {
    //when i refresh  git my cart data from localStorage
    this.mylocalStorageCard = JSON.parse(localStorage.getItem("cart"));
    this.mylocalStorageTolalPrice = localStorage.getItem("totalprice");
    this.mylocalStorageQty = localStorage.getItem("qty");
  },
  methods: {
    addNumber(numberInput) {
      this.$store.dispatch("products/addNumber", Number(numberInput));
    },
    addtoquantty(index) {
      this.$store.commit("products/sitAddFromQuantty", index);
      this.$store.commit("products/savelocalstorage");
    },
    removefromquantty(index) {
      this.$store.commit("products/sitRemoveFromQuantty", index);
      this.$store.commit("products/savelocalstorage");
    },
    mydelete(index) {
      this.$store.commit("products/sitmydelete", index);
      this.$store.commit("products/savelocalstorage");
    },
    goTooPayment() {
      this.$store.commit("products/goTooPayment");
    }
  }
};
</script>
<style scoped>
.cartpage {
  padding: 0 50px;
  background: #f1f2f6;
  /* background: #000; */
  margin-top: 0;
  /* padding-top: 50px; */
  height: 100%;
}

.carts {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: #fff;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  height: auto;
  /* border: 1px solid #000; */
  margin: 20px 0;
}
.carts > div {
  /* border: 1px solid #000; */
  text-align: center;
}
.supheds {
  margin-top: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
.head {
  padding: 35px 0;
}

.cardimgimg {
  margin: auto;
  height: 200px;
  width: 150px;
  background-size: cover;
  background-position: center center;
}
.totalprice {
  padding: 35px 0;
}
.totalprice p {
  font-size: 30px;
  color: #2d3436;
}
@media screen and (max-width: 500px) {
  .supheds {
    display: none;
  }
  .carts {
    display: block;
    padding: 15px;
    margin: 35px 0;
  }
  .price,
  .quantity {
    margin-top: 20px;
  }
  .cartpage {
    padding: 0 20px;
  }
  .totalprice {
    text-align: center;
    padding: 35px;
  }
}
</style>

