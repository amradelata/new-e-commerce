<template>
  <div class="container">
    <div
      v-if="$store.state.products.cart.length > 0"
      class="navbar-dropdown is-boxed is-right topTow"
    >
      <div class="Phone-item cards">
        <div class="card" v-for="item in $store.state.products.cart" :key="item.id">
          <div class="imgcart" :style="{ backgroundImage: 'url(' + item.img_url + ')' }"></div>
          <h3 class="inline">{{item.name}}</h3>
          <br />
          <h5 style="color:#006fcc" class="inline">{{item.price + " $"}}</h5>
          <br />
          <br />
          <br />
          <v-btn text v-if="item.quantity > 1" @click="remvQty(item)" color="primary">-1</v-btn>
          <v-btn text @click="addQty(item)" color="primary">+1</v-btn>
          <v-btn text @click.prevent="removeFromCart(item)" color="primary">Delete</v-btn>
          <p class="qty">{{item.quantity+" : qty"}}</p>
          <hr />
        </div>
      </div>
      <table v-for="item in $store.state.products.cart" :key="item.id" class="dickTop-item" href>
        <!--  -->
        <tr>
          <td>
            <div class="imgcart" :style="{ backgroundImage: 'url(' + item.img_url + ')' }"></div>
          </td>
          <td>
            <h3 class="inline">{{item.name}}</h3>
            <br />
            <h5 style="color:#006fcc" class="inline">{{item.price + " $"}}</h5>
            <!-- info -->
            <nuxt-link :to="'/products/' + item.id">
              <i class="fas fa-info"></i>
            </nuxt-link>
            <!-- info -->
          </td>
          <td class="right">
            <v-btn text v-if="item.quantity > 1" @click="remvQty(item)" color="primary">-1</v-btn>
            <v-btn text @click="addQty(item)" color="primary">+1</v-btn>
            <v-btn text @click.prevent="removeFromCart(item)" color="primary">Delete</v-btn>
            <p class="qty">{{item.quantity+" : qty"}}</p>
          </td>
        </tr>
      </table>
      <div class="threeSections">
        <v-card>
          <v-card-text class="px-5">
            <div>
              <h3 style="display:inline">Total price:</h3>
              <h2 style="color:#006fcc; display:inline">{{totalPrice}} $</h2>
            </div>
            <h3 style="display:inline">Total Items:</h3>
            <h2 style="color:#006fcc; display:inline">{{ $store.state.products.cartCount }}</h2>
            <p></p>
          </v-card-text>
          <button class="next-step" @click="toPayment">Proceed to checkout</button>
        </v-card>
      </div>
      <br />
    </div>
    <!-- if the cart is empty -->
    <div v-else class="is-boxed is-right">
      <div class="content">
        <img src="https://static05.jockeyindia.com/uploads/images/img-no-cartitems.png" alt />
        <span>your cart is empty!</span>
      </div>
    </div>
    <!-- if the cart is empty -->
  </div>
</template>

<script>
export default {
  created() {
    // this.$store.dispatch("products/fetchSinglePage", this.id);
    // console.log(this.$store.state.products.single.id);
  },
  computed: {
    totalPrice() {
      let total = 0;
      for (let item of this.$store.state.products.cart) {
        total += item.totalPrice;
      }
      return total;
    }
  },
  methods: {
    removeFromCart(item) {
      this.$store.commit("products/removeFromCart", item);
      this.$store.commit("products/saveCart");
    },
    addQty(item) {
      this.$store.commit("products/addQty", item);
      this.$store.commit("products/saveCart");
    },
    remvQty(item) {
      this.$store.commit("products/remvQty", item);
      this.$store.commit("products/saveCart");
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
    this.cart = JSON.parse(localStorage.getItem("cart"));
    const sd = localStorage.getItem("cart");
    const sdArry = [sd];
    console.log(localStorage.getItem("cartCount"), sdArry);
  }
};
</script>

<style scoped>
#enmpty {
  position: relative;
}
.content {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%);
}
.content span {
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%);
  font-family: fantasy;
  font-size: 39px;
}
h1,
p {
  color: #000;
}
.imgcart {
  height: 50px;
  width: 50%;
  display: inline-block;
  background-size: contain;
  background-position: center center;
}
.card {
  padding: 20px;
  text-align: center;
  /* margin-bottom: 35px; */
}
.next-step {
  background: #91ce3f;
  width: 90%;
  /* left: 0; */
  margin: auto;
  margin: 50px;
  position: absolute;
  color: #fff;
  padding: 10px;
  border-radius: 3px;
}
.next-step:focus {
  background: #008bff;
}
/* table */
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 20px;
  text-align: center;
}
.right {
  text-align: right;
  width: 35%;
}
.qty {
  border: 1px solid #ddd;
  padding: 5px;
  display: inline;
}
.inline {
  display: inline;
}
.topTow {
  margin-top: 100px;
}
</style>