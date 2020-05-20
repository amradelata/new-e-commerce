<template>
  <div>
    <adminNav />
    <div>
      <div class>
        <table v-for="(user, i) in users" :key="i">
          <tr>
            <td style="width: 100px">{{user.id}}</td>
            <td>{{user.email}}</td>
            <td class="right">{{user.password}}</td>
            <td class="right"></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import adminNav from "../components/adminNav";
import axios from "axios";
const API = "https://vue-e-commerce-databse.herokuapp.com/users";
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
    return {};
  },
  computed: {
    users() {
      return this.$store.state.products.users;
    }
  },
  created() {
    this.$store.dispatch("products/fetchUsers");
  },
  methods: {
    async remove(index) {
      const res = await axios.delete(API + "/" + index);
      const dele = await axios.get(API);
      this.products = dele.data;
      console.log(index);
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
  width: 100vw;
}

.link,
.danger,
.success {
  color: #fff;
  padding: 10px;
  border-radius: 5px;
}
.link {
  background: #008bff;
}
.danger {
  background: #ff6b81;
}
</style>
