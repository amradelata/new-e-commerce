<template>
  <div>
    <adminNav />

    <div v-if="this.alldata !=0 || this.alldata != null">
      <!-- loop on alldata -->
      <ul v-for="item in alldata" :key="item.id" class="allcart">
        <h2 class="dead">user items</h2>

        <!-- loop in loop to get cart items  -->

        <div v-for="singleItem in item.cart" :key="singleItem.id" class="singlecart">
          <div class="cardimgimg" :style="{backgroundImage: 'url('+singleItem.img_url+')'}"></div>
          <p>{{"product name :"+singleItem.name}}</p>
          <p>{{"product price :"+singleItem.price}}</p>
          <p>{{"product quantity :"+singleItem.quantity}}</p>
        </div>

        <h2 class="dead">user information</h2>
        <li>{{"ALL PRICE WITH SHIPPING : "+item.allprice}}</li>
        <li>{{"ALL QTY :"+item.allqty}}</li>
        <li>{{"ExpirationNmper : "+item.exp}}</li>
        <li>{{"cvcNumber :"+item.cvc}}</li>
        <li>{{"userCardnumber :"+item.cardnumper}}</li>
        <li>{{"userName :"+item.username}}</li>
        <li>{{"userEmail :"+item.useremail}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import adminNav from "../components/adminNav";
import Axios from "axios";

export default {
  components: {
    adminNav
  },

  data() {
    return {
      alldata: [],
      itemnames: ""
    };
  },

  async created() {
    //get user cart and information
    const orderAPI =
      "https://pharmacy-databeas.herokuapp.com/User-purchases-cart";
    const res = await Axios.get(orderAPI);
    this.alldata = res.data;
    console.log(this.alldata.length);
  }
};
</script>

<style scoped>
.dead {
  padding: 20px;
  /* border-bottom: 1px dashed #fdcb6e; */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  color: aliceblue;
}
.allcart {
  padding-left: 0;
  border: 2px dashed #fdcb6e;
  /* text-align: center; */
  margin: 10px 20px;
  background: #2d3436;
  color: #fdcb6e;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.allcart li {
  list-style: none;
  padding: 10px 20px;
}
.singlecart {
  flex-basis: calc(33.333% - 20px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 25px 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.cardimgimg {
  height: 50px;
  width: 50px;
  background-size: contain;
  background-position: center center;
  /* margin: auto; */
}
@media screen and (max-width: 768px) {
  .allcart {
    margin: 10px 0;
  }
  .singlecart {
    flex-basis: calc(100% - 20px);
    display: block;
    box-shadow: none;
    border-bottom: 1px solid #000;
    padding: 25px;
  }
}
</style>
