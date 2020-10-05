<template>
  <div>
    <div class="navDiskTop">
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/products">SHOP</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admin">ADMIN</nuxt-link>
        </li>
        <ul class="right0">
          <li>
            <input
              class="input"
              type="text"
              placeholder="search"
              v-model="searchVale"
              @keyup.enter="searchRout"
            />
          </li>
          <li class="cartnav">
            <nuxt-link to="/cart">
              <v-icon>mdi-cart</v-icon>
              <span v-if="getMyQty != 0 && getMyQty != null" class="cartQty">{{getMyQty}}</span>
            </nuxt-link>
          </li>
          <div class="myNavcart" v-if="getMyQty != 0 && getMyQty != null">
            <ul class="carts" ref="carts">
              <p class>All items {{getMyQty}}</p>

              <li v-for="item in getmylocalStorageCard" :key="item.id">
                <div class="mycartitems">
                  <div class="cardimgimg" :style="{backgroundImage: 'url('+item.img_url+')'}"></div>
                  <p class>{{' name : ' + item.name}}</p>
                  <p class>{{ "price :"+item.price + ' EGP '}}</p>
                  {{"quantity : "+item.quantity}}
                </div>
              </li>
              <hr />
              <p class="TotalPrice">{{ ' Total Price ' + getMyTotalPrice+ " EGP " }}</p>
              <div class="mybtn">
                <nuxt-link to="/payment" v-if="this.userstatus">
                  <v-btn small color="primary">Checkout</v-btn>
                </nuxt-link>
                <nuxt-link to="/cart">
                  <v-btn small color="primary">View Cart</v-btn>
                </nuxt-link>
              </div>
            </ul>
          </div>
        </ul>
      </ul>
    </div>
    <div class="navPhone">
      <nuxt-link to="/">
        <v-toolbar-title class="logoPhone">NUXT</v-toolbar-title>
      </nuxt-link>

      <div class="container" @click="togelPhoneNave()" ref="phoneNav">
        <div class="menu_icon">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>
      <div class="navBody" ref="changenavBody">
        <ul>
          <li>
            <input class="inputPhone" type="text" placeholder="search" v-model="searchVale" />
          </li>
          <li>
            <v-btn @click="searchRout(), togelPhoneNave()" small color="primary">search</v-btn>
          </li>
          <!-- <li @click="togelPhoneNave()">
            <nuxt-link to="/products">products</nuxt-link>
          </li>-->
          <li @click="togelPhoneNave()">
            <nuxt-link to="/products">Shop</nuxt-link>
          </li>
          <li @click="togelPhoneNave()">
            <nuxt-link to="/admin">admin</nuxt-link>
          </li>
          <li @click="togelPhoneNave()">
            <nuxt-link to="/shoes">shoes</nuxt-link>
          </li>
          <li @click="togelPhoneNave()">
            <nuxt-link to="/tShirt">tShirt</nuxt-link>
          </li>
          <li @click="togelPhoneNave()">
            <nuxt-link to="/Shirt">Shirt</nuxt-link>
          </li>
          <li @click="togelPhoneNave()">
            <nuxt-link to="/jacket">jacket</nuxt-link>
          </li>
          <li @click="togelPhoneNave()">
            <nuxt-link to="/suit">suit</nuxt-link>
          </li>
          <li @click="togelPhoneNave()">
            <nuxt-link to="/blazer">blazer</nuxt-link>
          </li>
          <li @click="togelPhoneNave()">
            <nuxt-link to="/pants">pants</nuxt-link>
          </li>
          <li @click="togelPhoneNave()">
            <nuxt-link to="/coat">coat</nuxt-link>
          </li>

          <nuxt-link to="/cart" class="cartQtyiconphone">
            <v-icon>mdi-cart</v-icon>
            <span v-if="getMyQty != 0 && getMyQty != null" class="cartQty">{{getMyQty}}</span>
          </nuxt-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      searchVale: "",
      prodactSearch: [],
      localStorage: {},
      // userLog: localStorage.getItem("status"),
      userstatus: localStorage.getItem("status")
    };
  },
  created() {
    console.log(this.$store.state.products.mylocalStorageQty);
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
  methods: {
    // loggedin() {
    //   if (localStorage.getItem("status") != null) {
    //     console.log(this.$refs["loginbtn"]);
    //     this.$router.replace("/");
    //   } else {
    //     this.$router.replace("/signIn");
    //   }
    // },
    togelPhoneNave() {
      this.$refs["phoneNav"].classList.toggle("change");
      this.$refs["changenavBody"].classList.toggle("changenavBody");
    },

    //pass this.searchVale to link and in search component
    searchRout() {
      this.$router.push("/search?test=" + this.searchVale);
      this.searchVale = "";
      // window.location.reload(true); ////to relod the page in js and Firefox
      // this.$router.go(); //to relod the page in vue
    }
  },
  mounted() {
    // this.mylocalStorageCard = JSON.parse(localStorage.getItem("cart"));
    // this.mylocalStorageTolalPrice = localStorage.getItem("totalprice");
    // this.mylocalStorageQty = localStorage.getItem("qty");
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.navDiskTop {
  /* z-index: 99999; */
}
.navDiskTop li {
  /* padding: 0 100px; */
  /* border: 1px solid red; */
}
.TotalPrice {
  /* color: #00cec9; */
  font-size: 20px;
}
.mycartitems {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 10px 0;

  /* background: #4051b5;
  color: #f5f5f5; */
}
.mycartitems p {
  font-size: 15px;
}
ul {
  padding-left: 0;
}
.cartnav {
  /* border: 1px solid #000; */
}

.cart {
  background: #000;
}
.mybtn button {
  width: 100%;
  margin: 10px 0;
}
.myNavcart {
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 20px;
  position: absolute;
  z-index: 99999;
  background: #fff;
  top: 48px;
  right: 0;
  display: none;
}
.cartnav:hover ~ .myNavcart {
  display: inline-block;
}
.myNavcart:hover {
  display: inline-block;
}

.cardimgimg {
  height: 50px;
  background-size: contain;
  background-position: center center;
  margin-bottom: 10px;
}
.navbar-burger {
  margin-right: auto;
  margin-left: 0;
}
.navitem {
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 300;
  padding: 10px;
  color: #000;
}
.cartQty {
  position: absolute;
  height: 17px;
  width: 17px;
  border-radius: 50%;
  text-align: center;
  line-height: 17px;
  color: #fff;
  font-size: 12px;
  top: 8px;
  /* right: 5px; */
  background: #ff424e;
  color: #fff;
}
.v-application p {
  margin-bottom: 0;
}
.cartQtyiconphone {
  position: absolute;
  height: 22px;
  width: 22px;
  color: #fff;
  top: 15px;
}
.logo {
  color: #000;
  text-decoration: none;
}
ul {
  list-style-type: none;
}
li,
.li {
  display: inline;
}
li a {
  padding: 1em 2em;
  display: inline-block;
  padding: 1em 2em;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  color: #000;
  font-size: 0.9em;
}
.right0 {
  position: absolute;
  right: 10px;
  top: 0;

  /* margin-top: 5px; */
}
.input {
  border-bottom: 1px solid #6c63ff;
  padding: 3px;
  /* border-radius: 3px; */
  /* width: 400px; */
  outline: none;
}
.child-flex {
  /* position: fixed; */
  right: 0;
  left: 0;
  top: 0;
  z-index: 9999;
}
.cercil {
  text-align: center;
  display: inline-block;
  background: #ff4757;
  color: #fff;
  border-radius: 50%;
  font-size: 12px;
  height: 20px;
  width: 20px;
  line-height: 20px;
}
/* icon */
.logoPhone {
  color: #000;
  text-decoration: none !important;
  margin: 10px 20px;
}
.navBody {
  overflow: hidden;
  /* padding: 35px; */
  /* background: ; */
  text-align: center;
  transition: all 0.6s ease-in-out;
  height: 0;
}

.navBody li {
  display: block;
}
.inputPhone {
  border-bottom: 1px solid #ccc;
  padding: 3px;
  margin: 10px;
  border-radius: 3px;
  width: 90%;
  outline: none;
}
.container {
  display: inline-block;
  cursor: pointer;
}
.menu_icon {
  position: absolute;
  right: 20px;
  top: 10px;
}
.bar1,
.bar2,
.bar3 {
  width: 30px;
  height: 3px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}
.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-5px, 5px);
  transform: rotate(-45deg) translate(-5px, 5px);
}
.change .bar2 {
  opacity: 0;
}
.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
.loginbtn {
  background: #333;
  color: #ddd;
  padding: 15px;
}
.navPhone {
  display: none;
}

/* taplet */
@media screen and (min-width: 769px) and (max-width: 1215px) {
  .navPhone {
    display: block;
  }
  .navDiskTop {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .navPhone {
    display: block;
  }
  .navDiskTop {
    display: none;
  }
  .changenavBody {
    height: 100vh;
  }
}
/* taplet */
@media screen and (min-width: 769px) and (max-width: 1215px) {
  .navPhone {
    display: block;
  }
  .navDiskTop {
    display: none;
  }
  .changenavBody {
    height: 100vh;
  }
}
</style>