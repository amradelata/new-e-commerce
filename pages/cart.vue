<template>
  <div>
    <!-- {{$store.state.products.countPlusLocalState}} -->

    <ul class="carts" v-if="getmylocalStorageCard != null" ref="carts">
      <p class="is-size-3">all item/s {{getMyQty}}</p>

      <li class="cart" v-for="(item,index) in getmylocalStorageCard" :key="item.id">
        <div class="card">
          <div class="cardimgimg" :style="{backgroundImage: 'url('+item.img_url+')'}"></div>
          <p class="is-size-6">{{item.name}}</p>
          <p class="is-size-6 has-text-success">{{item.price}}$</p>
          {{item.quantity}}
          <div class="cartbuttons">
            <button class="cartbutton button is-danger" @click="mydelete(index)">delete</button>
            <button
              v-if="item.quantity"
              class="cartbutton button is-light"
              @click="removefromquantty(index)"
            >-</button>
            <button class="cartbutton button is-light" @click="addtoquantty(index)">+</button>
          </div>
        </div>
      </li>

      <p class="is-size-3 has-text-success">{{ ' total price : ' + getMyTotalPrice }}$</p>
      <!-- <div class="is-size-5 flatshipping">Flat Shipping Credit 10 EGP</div> -->

      <button
        v-if="getMyQty != 0 "
        @click="goTooPayment()"
        class="button chekoutptn is-primary"
      >Proceed to checkout</button>

      <!-- <button @click="refreshpage()" class="button">update cart</button> -->
    </ul>
  </div>
  <!-- </div> -->
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
  /* align-items: center;
  justify-content: center;
  text-align: center; */
  flex-wrap: wrap;
}
.totalPrice h2 {
  margin: 20px;
}
.totalPrice .cartbtn {
  margin: 35px;
}

.cardimgimg {
  height: 100px;
  background-size: contain;
  background-position: center center;
  margin-bottom: 35px;
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
  /* text-align: center; */
}
.hied button,
.hied i {
  margin: 20px;
}
.hied img {
  width: 100%;
  height: 100%;
}
.card {
  border: 1px solid #ccc;
  text-align: center;
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