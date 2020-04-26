<template>
  <div id="cart">
    <div>
      <div id="enmpty" ref="enmpty" style="display:none; color:#fff">
        <div class="content">
          <img src="https://static05.jockeyindia.com/uploads/images/img-no-cartitems.png" alt />
          <span>your cart is empty!</span>
        </div>
      </div>
    </div>
    <div class="container" ref="contener">
      <div class="sections top">
        <table v-for="(product, i) in cart" :key="i">
          <tr>
            <td>
              <div class="img" :style="{ backgroundImage: 'url(' + product.img_url + ')' }"></div>
            </td>
            <td>
              <h3 class="inline">{{product.name}}</h3>
              <br />
              <h5 style="color:#006fcc" class="inline">{{product.price + " EGP"}}</h5>

              <!-- info -->
              <nuxt-link :to="'/products/' + product.id">
                <i class="fas fa-info" @click="info(i ,product.qty)"></i>
              </nuxt-link>
              <!-- info -->

              <!-- <q @click="show(i, product.id)">click me</q> -->
            </td>
            <td class="right">
              <v-btn text v-if="product.qty > 1" @click="remvQty(i ,product.qty)" color="primary">-1</v-btn>
              <v-btn text @click="addQty(i ,product.qty)" color="primary">+1</v-btn>
              <v-btn text @click="del(i, product.id) " color="primary">Delete</v-btn>
              <p class="qty">{{item.quantity+" : qty"}}</p>
            </td>
          </tr>
        </table>
      </div>

      <div class="threeSections">
        <v-card>
          <v-card-text class="px-5">
            <div>
              <h3 style="display:inline">Total price:</h3>
              <h2 style="color:#006fcc; display:inline">{{total}} EGP</h2>
            </div>
            <h3 style="display:inline">Total Items:</h3>
            <h2 style="color:#006fcc; display:inline">{{this.cart.length}}</h2>
            <p></p>
          </v-card-text>
          <!-- <router-link to="/logInSteps"> -->
          <button class="next-step" @click="toPayment">Proceed to checkout</button>
          <!-- </router-link> -->
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Cart",
      meta: [
        { name: "description", content: "This is my cart description here." },
        { name: "keywords", content: "cart nuxt, nuxt info" }
      ]
    };
  },
  data() {
    return {
      slider: 1,
      cart: []
    };
  },
  computed: {
    count: function() {
      return this.cart.reduce(function(n, cart) {
        return cart.qty + n;
      }, 0);
    },
    total: function() {
      return this.cart
        .reduce(function(n, cart) {
          return cart.price * cart.qty + n;
        }, 0)
        .toFixed(2);
    }
  },
  methods: {
    show(index, id) {
      console.log(index);
      if (localStorage.myProduct.includes(`"id":${index}`)) {
        console.log("this is here");
      } else {
        console.log("this is not here noooooo");
      }
    },
    del(index, id) {
      this.cart.splice(index, 1);
      let myStringCart = JSON.stringify(this.cart);
      localStorage.setItem("myProduct", myStringCart);
    },
    addQty(index, id) {
      console.log(this.cart.length);
      this.cart[index].qty += 1;
      let myStringCart = JSON.stringify(this.cart);
      localStorage.setItem("myProduct", myStringCart);
    },
    remvQty(index, id) {
      this.cart[index].qty -= 1;
      let myStringCart = JSON.stringify(this.cart);
      localStorage.setItem("myProduct", myStringCart);
    },
    info(index, id) {
      console.log(this.cart[index]);
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
    if (localStorage.getItem("myProduct") === null) {
      console.log("empty");
      //  this.message = "your cart is empty!"
      this.$refs.contener.style.display = "none";
      this.$refs.enmpty.style.display = "block";
    } else {
      this.cart = JSON.parse(localStorage.getItem("myProduct"));
      //  console.log("we have an itme");
    }
  }
};
</script>

<style scoped>
#cart {
  /* padding: 200px ; */
  margin: 100px 0 100px 0;
  /* display: block  ; */
}
#enmpty {
  position: relative;
}
.content {
  position: absolute;
  left: 50%;
  top: 50%;
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
.img {
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
  /* background: #91ce3f; */
  /* width: 100%; */
  /* left: 0; */
  margin-top: 40px;
  /* position: absolute; */
  color: #fff;
  padding: 10px;
  border-radius: 3px;
}
.next-step:focus {
  background: #008bff;
}
/*  */
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
</style>