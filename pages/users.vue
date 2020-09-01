<template>
  <div>
    <adminNav />
    <div>
      <div class="users margintop">
        <div class="user" v-for="(user, index) in users" :key="user.id">
          <div>{{user.id}}</div>
          <div>{{user.email}}</div>
          <div>{{user.password}}</div>
          <button
            @click="removeuser(index = user.id)"
            class="danger"
            ref="delete"
            id="delete"
          >delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adminNav from "../components/adminNav";
const API = "https://vue-e-commerce-databse.herokuapp.com/users";
import axios from "axios";

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
      users: []
    };
  },
  async created() {
    const response = await axios.get(API);
    this.users = response.data;
  },
  methods: {
    async removeuser(index) {
      const res = await axios.delete(API + "/" + index);
      const dele = await axios.get(API);
      this.users = dele.data;
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
