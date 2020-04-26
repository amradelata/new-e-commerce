<template>
  <div id="order" class="container top">
    <div>
      <div id="enmpty" ref="enmpty" style="display:none; color:#fff">
        <div class="content">
          <img src="https://static05.jockeyindia.com/uploads/images/img-no-cartitems.png" alt />
          <span>your cart is empty!</span>
        </div>
      </div>
    </div>

    <adminNav />
    <div>
      <div class="tabul top">
        <h2>order:</h2>
        <table v-for="(product, i) in cart" :key="i">
          <tr>
            <td>
              <div class="img" :style="{ backgroundImage: 'url(' + product.img_url + ')' }"></div>
            </td>
            <td>
              <h3 class="inline">{{product.name}}</h3>
              <br />
              <p>{{product.quantity+" : qty"}}</p>
              <h5 style="color:#006fcc" class="inline">{{product.price + " EGP"}}</h5>
            </td>
          </tr>
        </table>
        <h2>userCardnumberInfo:</h2>
        <h4>userCardnumber:</h4>
        {{userCardnumber}}
        <br />
        <h4>Expiration:</h4>
        {{ExpirationNmper}}
        <br />
        <h4>CVC:</h4>
        {{cvcNumber}}
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import adminNav from "../components/adminNav";

export default {
  components: {
    adminNav
  },
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
      cart: [],
      cvcNumber: "",
      ExpirationNmper: "",
      userCardnumber: ""
    };
  },

  mounted() {
    this.cart = JSON.parse(localStorage.getItem("cart"));
    this.cvcNumber = localStorage.getItem("cvcNumber");
    this.ExpirationNmper = localStorage.getItem("ExpirationNmper");
    this.userCardnumber = localStorage.getItem("userCardnumber");
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
  background: #91ce3f;
  width: 100%;
  left: 0;
  margin-top: 40px;
  position: absolute;
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
#order {
  position: relative;
}
.tabul {
  position: absolute;
  right: 0;
  width: 70vw;
}
</style>
