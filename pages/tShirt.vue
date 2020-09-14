<template>
  <div>
    <productsNave />
    <div class="shopitems">
      <div class="shop" v-for="item in products" :key="item.id">
        <nuxt-link :to="'/products/' + item.id" class="mylink">
          <div class="img" :style="{backgroundImage: 'url('+item.img_url+')'}"></div>
          <div class="shopcontent">
            <h3>{{item.name}}</h3>

            <p>{{item.price}}EGP</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const API = "https://vue-e-commerce-databse.herokuapp.com/products";
import productsNave from "~/components/productsNave.vue";
export default {
  components: { productsNave },
  data() {
    return {
      products: []
    };
  },

  async created() {
    const res = await axios.get(API + "/?category=T-shirt");
    this.products = res.data;
  }
};
</script>

<style scoped>
/* shop */

.shopitems {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 80%;
}
.shop {
  display: flex;
  width: calc(33.333% - 20px);
  margin: 9px;
  border: 1px solid #00b894;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.mylink {
  display: flex;
  color: black;
  text-decoration: none;
}
.shopcontent {
  margin-top: 100px;
}

.img {
  height: 200px;
  width: 200px;
  background-size: cover;
  background-position: center center;
  margin-right: 35px;
}
@media screen and (max-width: 768px) {
  /* shop */
  .shopitems {
    width: 100%;
  }
  .shop {
    width: calc(100% - 20px);
  }
}
</style>



