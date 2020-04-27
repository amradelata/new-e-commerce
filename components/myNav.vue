<template>
  <div>
    <div class="nav mynav">
      <v-card color="grey lighten-4" flat tile class="child-flex">
        <div class="navDiskTop">
          <v-toolbar dense>
            <nuxt-link to="/" class="logo">
              <v-toolbar-title>NUXT</v-toolbar-title>
            </nuxt-link>
            <div class="flex-grow-1"></div>
            <ul class="right0">
              <input
                class="input"
                type="text"
                placeholder="search"
                v-model="searchVale"
                @keyup.enter="searchRout"
              />
              <li class="active">
                <nuxt-link to="/about">About</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/products">products</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/cart">
                  <v-icon>mdi-cart</v-icon>
                  <p v-if="mycartCount > 0" class="cercil">{{mycartCount}}</p>
                </nuxt-link>
              </li>
              <button @click="loggedin" class="loginbtn" ref="loginbtn">Sign In</button>
            </ul>
          </v-toolbar>
        </div>
      </v-card>
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
            <input
              class="inputPhone"
              type="text"
              placeholder="search"
              v-model="searchVale"
              @keyup.enter="searchRout"
            />
          </li>
          <li @click="togelPhoneNave()">
            <nuxt-link to="/products">products</nuxt-link>
          </li>
          <li @click="togelPhoneNave()">
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li @click="togelPhoneNave()">
            <nuxt-link to="/cart">
              cart
              <v-icon>mdi-cart</v-icon>
              <p v-if="mycartCount > 0" class="cercil">{{mycartCount}}</p>
            </nuxt-link>
          </li>
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
      mycartCount: "",
      localStorage: {}
    };
  },
  methods: {
    loggedin() {
      if (localStorage.getItem("status") != null) {
        console.log(this.$refs["loginbtn"]);
        this.$router.replace("/products");
      } else {
        this.$router.replace("/signIn");
      }
    },
    togelPhoneNave() {
      this.$refs["phoneNav"].classList.toggle("change");
      this.$refs["changenavBody"].classList.toggle("changenavBody");
    },

    //pass this.searchVale to link and in search component
    searchRout() {
      this.$router.push("/search?test=" + this.searchVale);
      // this.searchVale = "";
      // window.location.reload(true); ////to relod the page in js and Firefox
      // this.$router.go(); //to relod the page in vue
    }
  },
  mounted() {
    this.mycartCount = JSON.parse(localStorage.getItem("cartCount"));
    console.log(this.mycartCount);
  }
};
</script>
<style scoped>
.logo {
  color: #000;
  text-decoration: none;
}
ul {
  list-style-type: none;
}
li {
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
  right: 0;
  /* margin-top: 5px; */
}
.input {
  border: 1px solid #ddd;
  padding: 3px;
  border-radius: 5px;
  width: 400px;
  outline: none;
}
.child-flex {
  position: fixed;
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
  background: #ecf0f1;
  text-align: center;
  transition: all 0.6s ease-in-out;
  height: 0;
}
.changenavBody {
  height: 250px;
}
.navBody li {
  display: block;
}
.inputPhone {
  border: 1px solid #ddd;
  padding: 3px;
  margin: 10px;
  border-radius: 5px;
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
}
</style>