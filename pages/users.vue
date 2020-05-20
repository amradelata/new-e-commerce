<template>
  <div>
    <adminNav />
    <div>
      <div class="users margintop">
        <div class="user" v-for="(user, i) in users" :key="i">
          <div>{{user.id}}</div>
          <div>{{user.email}}</div>
          <div>{{user.password}}</div>
          <button @click="remove(index = user.id)" class="danger" ref="delete" id="delete">delete</button>
        </div>
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
.danger {
  background: #ff6b81;
}

.danger {
  color: #fff;
  padding: 10px;
  border-radius: 5px;
}
.users {
  display: flex;
  flex-wrap: wrap;
}

.user {
  flex-basis: calc(33.333% - 20px);
  display: inline-block;
  margin: 10px;
  overflow: hidden;
  text-align: center;
  padding: 20px;
}
.margintop {
  padding-top: 100px;
}
@media screen and (max-width: 768px) {
  .user {
    flex-basis: calc(100% - 20px);
  }
}
</style>
